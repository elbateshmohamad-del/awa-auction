import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { getAllBikes } from '@/lib/bike-database';
import BikeImportButton from '@/components/admin/BikeImportButton';
import { createPageMetadata } from '@/lib/metadata';

import BikeSearchFilters from '@/components/admin/BikeSearchFilters';

type Props = {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'adminBikes');
}


export default async function AdminBikesPage(props: {
    params: Promise<{ locale: string }>,
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const { locale } = params;

    const t = await getTranslations('admin.bikesPage');
    const tCommon = await getTranslations('admin.common');

    // Fetch directly on server
    const status = typeof searchParams.status === 'string' ? searchParams.status.toLowerCase() : '';
    let bikes = await getAllBikes({ status: status || 'active' });

    // Filter Logic
    const q = typeof searchParams.q === 'string' ? searchParams.q.toLowerCase() : '';
    // Status is handled in getAllBikes query

    if (q) {
        bikes = bikes.filter(bike =>
            (bike.name || '').toLowerCase().includes(q) ||
            (bike.vin || '').toLowerCase().includes(q) ||
            (bike.auctionNumber || '').toLowerCase().includes(q)
        );
    }

    // Sort by auctionNumber (Lot) ascending
    bikes = bikes.sort((a, b) => {
        const lotA = parseInt(a.auctionNumber || '0', 10);
        const lotB = parseInt(b.auctionNumber || '0', 10);
        return lotA - lotB;
    });

    // Pagination
    const perPage = parseInt(typeof searchParams.perPage === 'string' ? searchParams.perPage : '10', 10);
    const page = parseInt(typeof searchParams.page === 'string' ? searchParams.page : '1', 10);
    const totalBikes = bikes.length;
    const totalPages = Math.ceil(totalBikes / perPage);
    const paginatedBikes = bikes.slice((page - 1) * perPage, page * perPage);

    // Build query string helper
    const buildQuery = (newParams: Record<string, string | number>) => {
        const params = new URLSearchParams();
        if (q) params.set('q', q);
        if (status) params.set('status', status);
        params.set('perPage', String(newParams.perPage ?? perPage));
        params.set('page', String(newParams.page ?? page));
        return params.toString();
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <div className="flex gap-2">
                    <BikeImportButton />
                    <Link href={`/${locale}/admin/bikes/new`}>
                        <Button variant="primary">
                            {t('addNew')}
                        </Button>
                    </Link>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    {/* Filters */}
                    <BikeSearchFilters />

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Image</th>
                                    <th className="px-6 py-3">Bike Info</th>
                                    <th className="px-6 py-3">VIN / Lot</th>
                                    <th className="px-6 py-3">Price (JPY)</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Grades</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {paginatedBikes.map((bike) => (
                                    <tr key={bike.id} className="hover:bg-blue-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <Link href={`/${locale}/admin/bikes/${bike.id}`}>
                                                <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden relative border border-gray-300 hover:ring-2 hover:ring-[#0F4C81] transition-all cursor-pointer">
                                                    {bike.images && bike.images.length > 0 ? (
                                                        <img src={bike.images[0]} alt={bike.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-400">No Img</div>
                                                    )}
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <Link href={`/${locale}/admin/bikes/${bike.id}`} className="font-bold text-gray-900 text-base hover:text-[#0F4C81] hover:underline transition-colors">
                                                    {bike.name}
                                                </Link>
                                                <span className="text-xs text-gray-500">{bike.makerConfirmed ? '(Verified)' : '(Auto)'} {bike.maker}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-gray-600">
                                            <div>VIN: {bike.vin}</div>
                                            <div className="text-xs text-blue-600">Lot: {bike.auctionNumber}</div>
                                        </td>
                                        <td className="px-6 py-4 font-medium">¥{bike.startPrice.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium w-fit
                                                ${bike.status === 'active' ? 'bg-green-100 text-green-800' :
                                                        bike.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                            'bg-blue-100 text-blue-800'}`}>
                                                    {(bike.status || 'unknown').toUpperCase()}
                                                </span>
                                                <span className="text-xs text-gray-500">{bike.inspectionStatus}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-xs">
                                            <div className="grid grid-cols-2 gap-x-2 gap-y-1 w-24">
                                                <span className="font-semibold" title="Overall">All: {bike.overallGrade}</span>
                                                <span title="Engine">EG: {bike.engineGrade}</span>
                                                <span title="Frame">Fr: {bike.frameGrade}</span>
                                                <span title="Exterior">Ext: {bike.exteriorGrade}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex gap-1 justify-end">
                                                <Link href={`/${locale}/admin/bikes/${bike.id}`}>
                                                    <Button variant="ghost" size="sm" className="text-[#0F4C81] hover:bg-[#0F4C81]/10">View</Button>
                                                </Link>
                                                <Link href={`/${locale}/admin/bikes/${bike.id}?edit=true`}>
                                                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">Edit</Button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {paginatedBikes.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                            No bikes found. Click "AWAスクレイパー実行" to import data.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Controls */}
                    <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>表示件数:</span>
                            <div className="flex gap-1">
                                {[10, 50, 100].map(num => (
                                    <Link
                                        key={num}
                                        href={`/${locale}/admin/bikes?${buildQuery({ perPage: num, page: 1 })}`}
                                        className={`px-3 py-1 rounded border ${perPage === num ? 'bg-[#0F4C81] text-white border-[#0F4C81]' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        {num}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500">
                                {totalBikes}件中 {(page - 1) * perPage + 1}-{Math.min(page * perPage, totalBikes)}件を表示
                            </span>
                            <div className="flex gap-1">
                                {page > 1 && (
                                    <Link href={`/${locale}/admin/bikes?${buildQuery({ page: page - 1 })}`}>
                                        <Button variant="ghost" size="sm">← 前へ</Button>
                                    </Link>
                                )}
                                {page < totalPages && (
                                    <Link href={`/${locale}/admin/bikes?${buildQuery({ page: page + 1 })}`}>
                                        <Button variant="ghost" size="sm">次へ →</Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
