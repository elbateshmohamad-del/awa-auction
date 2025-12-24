import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function AdminSettingsPage() {
    return (
        <div className="p-6 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Platform Settings</h1>

            <div className="space-y-6">
                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>General Information</CardTitle>
                        <CardDescription>Configure basic platform details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Platform Name</label>
                            <Input defaultValue="AWA Auction" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Support Email</label>
                            <Input defaultValue="support@awa-auction.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Timezone</label>
                            <select className="w-full border p-2 rounded">
                                <option>UTC</option>
                                <option>Asia/Tokyo (JST)</option>
                                <option>America/New_York (EST)</option>
                            </select>
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>

                {/* Fees */}
                <Card>
                    <CardHeader>
                        <CardTitle>Fees & Commission</CardTitle>
                        <CardDescription>Set default listing and transaction fees.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Buyer Premium (%)</label>
                                <Input type="number" defaultValue="5.0" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Listing Fee ($)</label>
                                <Input type="number" defaultValue="10.00" />
                            </div>
                        </div>
                        <Button>Update Fees</Button>
                    </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                    <CardHeader>
                        <CardTitle>System Maintenance</CardTitle>
                        <CardDescription>Manage platform availability.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="maintenance" className="h-4 w-4" />
                            <label htmlFor="maintenance">Enable Maintenance Mode</label>
                        </div>
                        <p className="text-sm text-neutral-500">
                            When enabled, only admins can access the site. Users will see a maintenance page.
                        </p>
                        <Button variant="danger">Save Maintenance Settings</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
