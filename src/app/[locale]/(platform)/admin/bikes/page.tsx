import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { getAllBikes } from '@/lib/bike-database';
import BikeImportButton from '@/components/admin/BikeImportButton';

import BikeSearchFilters from '@/components/admin/BikeSearchFilters';

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
    let bikes = getAllBikes();

    // Filter Logic
    const q = typeof searchParams.q === 'string' ? searchParams.q.toLowerCase() : '';
    const status = typeof searchParams.status === 'string' ? searchParams.status.toLowerCase() : '';

    if (q) {
        bikes = bikes.filter(bike =>
            (bike.name || '').toLowerCase().includes(q) ||
            (bike.vin || '').toLowerCase().includes(q) ||
            (bike.auctionNumber || '').toLowerCase().includes(q)
        );
    }

    if (status) {
        bikes = bikes.filter(bike => bike.status.toLowerCase() === status);
    }

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
                                {bikes.map((bike) => (
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
                                {bikes.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                            No bikes found. Click "Run BDS Scraper" to import data.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-gray-100 flex justify-center">
                        <Button variant="ghost" size="sm" className="text-gray-500">Load More</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
