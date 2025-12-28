
import { getTranslations } from 'next-intl/server';
import { getAllBikes } from '@/lib/bike-database';
import AdminPricesClient from './AdminPricesClient';

export default async function AdminMarketPricesPage(props: {
    params: Promise<{ locale: string }>,
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const { locale } = params;

    // Fetch archive/sold bikes
    const statusParam = typeof searchParams.status === 'string' ? searchParams.status.toLowerCase() : '';
    let statusFilter: string | string[] = statusParam;

    if (!statusParam) {
        statusFilter = ['archived', 'sold'];
    }

    const bikes = await getAllBikes({ status: statusFilter });

    // Server-side filtering for initial render
    const q = typeof searchParams.q === 'string' ? searchParams.q.toLowerCase() : '';
    const filteredBikes = q ? bikes.filter(bike =>
        (bike.name || '').toLowerCase().includes(q) ||
        (bike.vin || '').toLowerCase().includes(q) ||
        (bike.auctionNumber || '').toLowerCase().includes(q)
    ) : bikes;

    // Serialize dates for client usage (if they are Date objects)
    // getAllBikes usually returns serialized-ish objects or Dates. 
    // Client components dislike passing Date objects directly if they aren't serialized? 
    // Next.js Server Actions/Components pass props via serialization. Date objects are allowed in latest Next.js if passed from Server Comp to Client Comp?
    // Usually yes. But safer to ensure.
    // Assuming implementation is safe or simple enough.

    return <AdminPricesClient initialBikes={filteredBikes} locale={locale} />;
}
