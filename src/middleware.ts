import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { jwtVerify } from 'jose';

const intlMiddleware = createMiddleware(routing);

// JWT Secret for Edge Runtime
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'awa-auction-dev-secret-key-change-in-production'
);

interface AuthPayload {
    userId: string;
    role: string;
    email: string;
}

async function verifyTokenEdge(token: string): Promise<AuthPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as AuthPayload;
    } catch {
        return null;
    }
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const hostname = request.headers.get('host') || '';

    // Parse path to check for admin routes properly
    const localeMatch = pathname.match(/^\/(ja|en|ar)(\/|$)/);
    const locale = localeMatch ? localeMatch[1] : 'ja';
    const pathWithoutLocale = localeMatch ? pathname.replace(/^\/(ja|en|ar)/, '') || '/' : pathname;

    // --- Domain-based Access Control ---
    const isPublicDomain = hostname.includes('awa.auction');
    const isVercelDomain = hostname.includes('vercel.app');
    const isLocalhost = hostname.includes('localhost');

    // 1. Block Admin Access on Public Domain (awa.auction)
    if (isPublicDomain) {
        if (pathWithoutLocale.startsWith('/admin') || pathWithoutLocale === '/admin-login') {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    }

    // 2. Redirect Public Traffic from Vercel Domain to Public Domain
    // Allow admin routes on Vercel domain, but redirect everything else to awa.auction
    if (isVercelDomain && !isLocalhost) {
        const isAdminRoute = pathWithoutLocale.startsWith('/admin') || pathWithoutLocale === '/admin-login';

        if (!isAdminRoute) {
            // Redirect to the same path on the public domain
            const newUrl = new URL(request.url);
            newUrl.hostname = 'awa.auction';
            return NextResponse.redirect(newUrl);
        }
    }

    // 3. Enforce Language Persistence
    // If the user has a preferred locale in cookies (NEXT_LOCALE), and the current URL locale differs,
    // redirect them to their preferred locale. This fixes the issue where "Back" button reverts language.
    // Note: We only do this for GET requests to prevent breaking form submissions, though middleware runs before that usually.
    // Also, we must allow the LanguageSwitcher to actually change the locale.
    // The LanguageSwitcher updates the cookie via next-intl router.
    // However, if we redirect immediately, we might fight the router?
    // standard next-intl router replaces URL -> middleware sees new URL.
    // If cookie is NOT yet updated (client side), we might bounce back?
    // next-intl sets cookie on the client side or via API? Usually client side document.cookie.
    // So if user clicks "EN", cookie becomes "en", then router pushes "/en". Middleware sees "/en" and cookie "en". OK.
    // If user hits Back to "/ja", middleware sees "/ja", cookie "en". Redirect to "/en". OK.

    // We must ensure we don't redirect if it's an asset or API (already handled by matcher but be safe)
    if (localeMatch && request.method === 'GET') {
        const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
        const currentUrlLocale = localeMatch[1];

        // Only redirect if valid locale and different
        if (savedLocale &&
            ['ja', 'en', 'ar'].includes(savedLocale) &&
            savedLocale !== currentUrlLocale) {

            // Construct new URL with saved locale
            const newUrl = new URL(request.url);
            newUrl.pathname = request.nextUrl.pathname.replace(`/${currentUrlLocale}`, `/${savedLocale}`);
            return NextResponse.redirect(newUrl);
        }
    }
    // -----------------------------------

    // Check Authentication with JWT verification
    const authToken = request.cookies.get('auth_token')?.value;
    let userRole: string | null = null;
    let isLoggedIn = false;

    if (authToken) {
        const payload = await verifyTokenEdge(authToken);
        if (payload) {
            userRole = payload.role;
            isLoggedIn = true;
        }
        // If verification fails, token is invalid/tampered - treat as not logged in
    }

    // Protect Admin Routes
    if (pathWithoutLocale.startsWith('/admin')) {
        // Exclude the admin login page to prevent loops
        if (pathWithoutLocale === '/admin-login') {
            // Pass through - public page
        }
        // Old admin login path redirection
        else if (pathWithoutLocale === '/admin/login') {
            return NextResponse.redirect(new URL(`/${locale}/admin-login`, request.url));
        }
        else {
            if (!isLoggedIn) {
                return NextResponse.redirect(new URL(`/${locale}/admin-login`, request.url));
            }

            // Access Control (RBAC)
            // Only ADMIN and STAFF can access admin area
            if (userRole !== 'ADMIN' && userRole !== 'STAFF') {
                return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
            }

            // Restricted Areas for STAFF
            const restrictedForStaff = ['/admin/users', '/admin/orders', '/admin/finance'];
            if (userRole === 'STAFF' && restrictedForStaff.some(p => pathWithoutLocale.startsWith(p))) {
                return NextResponse.redirect(new URL(`/${locale}/admin`, request.url));
            }
        }
    }

    // Protect Dashboard Routes
    if (pathWithoutLocale.startsWith('/dashboard')) {
        if (!isLoggedIn) {
            const loginUrl = new URL(`/${locale}/login`, request.url);
            loginUrl.searchParams.set('callbackUrl', pathname + request.nextUrl.search);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Handle i18n routing
    const response = intlMiddleware(request);

    // Add x-pathname header for not-found page locale detection
    response.headers.set('x-pathname', pathname);

    return response;
}

export const config = {
    matcher: ['/', '/(ja|en|ar)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
