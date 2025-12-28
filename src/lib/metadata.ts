import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type MetaKey =
    | 'home' | 'admin' | 'adminLogin' | 'auctions' | 'auctionCalendar' | 'bikeCatalog' | 'bikeDetail'
    | 'about' | 'contact' | 'blog' | 'careers' | 'cookies' | 'fees' | 'financing'
    | 'help' | 'helpAuctionTypes' | 'helpDeliveryTimes' | 'helpFaq' | 'helpGettingStarted'
    | 'helpHowToBid' | 'helpInspectionReports' | 'helpPaymentMethods' | 'helpSecurity'
    | 'helpShippingGuide' | 'helpVerification' | 'helpVideoGuides'
    | 'legal' | 'legalCookies' | 'legalExport' | 'legalRefunds'
    | 'news' | 'partners' | 'privacy' | 'shipping' | 'shippingSchedule' | 'successStories' | 'terms'
    | 'login' | 'register' | 'forgotPassword' | 'verifyEmail'
    | 'dashboard' | 'dashboardBids' | 'dashboardDeposit' | 'dashboardDocuments' | 'dashboardKyc'
    | 'dashboardOrders' | 'dashboardProfile' | 'dashboardSettings' | 'dashboardSns'
    | 'dashboardSubscription' | 'dashboardTracking' | 'dashboardWatchlist'
    | 'checkout' | 'checkoutSuccess' | 'catalog' | 'market' | 'reservation' | 'snsCampaign' | 'subscription'
    | 'kycSubmit' | 'guideExport' | 'guideHowToBid' | 'guideHowToBuy' | 'guideShipping'
    | 'adminAuctions' | 'adminAuctionNew' | 'adminBikes' | 'adminBikeNew' | 'adminBikeEdit'
    | 'adminContainers' | 'adminContent' | 'adminFinance' | 'adminKyc' | 'adminNotifications'
    | 'adminOrders' | 'adminPrices' | 'adminReports' | 'adminSettings' | 'adminSettingsInvoice'
    | 'adminSns' | 'adminStaff' | 'adminUsers' | 'services';

export async function createPageMetadata(locale: string, key: MetaKey): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'meta' });
    return {
        title: t(key),
    };
}
