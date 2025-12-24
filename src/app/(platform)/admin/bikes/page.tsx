import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { getAllBikes } from '@/lib/bike-database';
import BikeImportButton from '@/components/admin/BikeImportButton';

export default function AdminBikesPage() {
    // Fetch directly on server
    const bikes = getAllBikes();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Bike Inventory</h1>
                    <p className="text-sm text-gray-500">Manage listings, edit details, and track auctions.</p>
                </div>
                <div className="flex gap-2">
                    <BikeImportButton />
                    <Link href="/admin/bikes/new">
                        <Button variant="primary">
                            + Add New Bike
                        </Button>
                    </Link>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    {/* Filters */}
                    <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
                        <div className="flex-1 max-w-sm">
                            <Input placeholder="Search by Name, VIN, or Lot #" className="bg-white" />
                        </div>
                        <select className="h-10 rounded-md border-gray-300 text-sm focus:ring-[#0F4C81] focus:border-[#0F4C81]">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Draft</option>
                            <option>Sold</option>
                        </select>
                    </div>

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
                                            <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden relative border border-gray-300">
                                                {bike.images && bike.images.length > 0 ? (
                                                    <img src={bike.images[0]} alt={bike.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-gray-400">No Img</div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 text-base">{bike.name}</span>
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
                                                    {bike.status.toUpperCase()}
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
                                            <Button variant="ghost" size="sm" className="text-gray-400 group-hover:text-[#0F4C81]">Edit</Button>
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
