'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { signOut } from 'next-auth/react';

// Renaming to avoid potential conflict if any, but likely just fine to export.
export interface AuthUser {
    id: string;
    email: string;
    name: string | null;
    role: string;
    memberType: 'INDIVIDUAL' | 'CORPORATE';
    phoneNumber?: string | null;
    address?: string | null;
    corporateName?: string | null;
    corporateRegNum?: string | null;
    representative?: string | null;
    preferredCurrency?: 'USD' | 'EUR' | 'GBP' | 'EGP';
    permissions?: string[];
    memberId?: string | null;
}

// Active Bid Type
interface ActiveBid {
    bikeId: string;
    endTime: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: AuthUser | null;
    login: (email?: string, password?: string) => Promise<boolean>;
    logout: () => Promise<void>;
    activeBids: ActiveBid[];
    registerBid: (bikeId: string, endTime: Date) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeBids, setActiveBids] = useState<ActiveBid[]>([]);

    useEffect(() => {
        const checkAuth = async () => {
            // 1. Try to recover from localStorage first (fastest)
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                    setIsAuthenticated(true);
                } catch (e) {
                    console.error('Failed to parse user from localStorage', e);
                    localStorage.removeItem('user');
                }
            }

            // 2. Always verify with server (single source of truth) or fetch if missing
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    if (data.authenticated && data.user) {
                        setUser(data.user);
                        setIsAuthenticated(true);
                        // Update localStorage to keep it fresh
                        localStorage.setItem('user', JSON.stringify(data.user));
                    }
                } else {
                    // If server says unauthorized, clear client state
                    // But only if we are seemingly authenticated? 
                    // No, let's trust server. If server says 401, we are logged out.
                    if (res.status === 401) {
                        // Only clear if we thought we were logged in/or just ensure clean state
                        // However, be careful not to flicker. 
                        // If localStorage had data but server says 401, server wins.
                        localStorage.removeItem('user');
                        setUser(null);
                        setIsAuthenticated(false);
                    }
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Auto-logout on inactivity (1 hour)
    useEffect(() => {
        if (!isAuthenticated) return;

        const TIMEOUT_MS = 3600000; // 1 hour
        const CHECK_INTERVAL_MS = 60000; // 1 minute
        let isActivityDetected = false;

        const updateActivityFlag = () => {
            isActivityDetected = true;
        };

        // Events to monitor
        const events = ['mousedown', 'keydown', 'touchstart', 'scroll', 'mousemove'];
        events.forEach(event => {
            window.addEventListener(event, updateActivityFlag, { passive: true });
        });

        // Initialize last activity if not set
        if (!localStorage.getItem('awa_last_activity')) {
            localStorage.setItem('awa_last_activity', Date.now().toString());
        }

        const checkInterval = setInterval(() => {
            const now = Date.now();

            // If activity was detected in this interval, update the storage
            if (isActivityDetected) {
                localStorage.setItem('awa_last_activity', now.toString());
                isActivityDetected = false;
            }

            // Check for timeout
            const lastActivity = parseInt(localStorage.getItem('awa_last_activity') || now.toString());
            if (now - lastActivity > TIMEOUT_MS) {
                console.log('Session timed out by inactivity');
                // Call logout but don't loop if it updates state
                logout();
            }
        }, CHECK_INTERVAL_MS);

        return () => {
            events.forEach(event => {
                window.removeEventListener(event, updateActivityFlag);
            });
            clearInterval(checkInterval);
        };
    }, [isAuthenticated]);

    const login = async (email?: string, password?: string) => {
        if (!email || !password) {
            throw new Error("Email and password required");
        }

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Login failed');
        }

        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = async () => {
        try {
            // Clear app-specific cookie
            await fetch('/api/auth/logout', { method: 'POST' });

            // Clear NextAuth session (Google)
            // redirect: false allows us to handle the state cleanup below without page reload interruption
            await signOut({ redirect: false });
        } catch (error) {
            console.error('Logout API failed:', error);
        }

        localStorage.removeItem('user');
        localStorage.removeItem('awa_active_bids');
        setUser(null);
        setActiveBids([]);
        setIsAuthenticated(false);
    };

    const registerBid = (bikeId: string, endTime: Date) => {
        const newBid = { bikeId, endTime: endTime.toISOString() };
        setActiveBids(prev => {
            if (prev.some(b => b.bikeId === bikeId)) return prev;
            const updated = [...prev, newBid];
            localStorage.setItem('awa_active_bids', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout, activeBids, registerBid }}>
            {children}
        </AuthContext.Provider>
    );
}

// export type { User }; // Removed invalid export

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
