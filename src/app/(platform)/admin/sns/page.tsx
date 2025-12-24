import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function AdminSnsPage() {
    return (
        <div className="p-6 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">SNS Integrations</h1>
            <p className="text-neutral-600 mb-8">Manage API keys and settings for social media login and sharing.</p>

            <div className="grid gap-6">
                {/* Google */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">G</div>
                            <div>
                                <CardTitle className="text-lg">Google</CardTitle>
                                <CardDescription>Configure Google Sign-In</CardDescription>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-green-600 font-medium">Active</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Client ID</label>
                            <Input type="password" value="************************.apps.googleusercontent.com" readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Client Secret</label>
                            <Input type="password" value="************************" readOnly />
                        </div>
                        <Button variant="outline">Edit Configuration</Button>
                    </CardContent>
                </Card>

                {/* Facebook */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">f</div>
                            <div>
                                <CardTitle className="text-lg">Facebook</CardTitle>
                                <CardDescription>Meta Graph API</CardDescription>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-neutral-300 rounded-full"></div>
                            <span className="text-sm text-neutral-500 font-medium">Inactive</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">App ID</label>
                            <Input placeholder="Enter App ID" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">App Secret</label>
                            <Input type="password" placeholder="Enter App Secret" />
                        </div>
                        <Button>Save & Connect</Button>
                    </CardContent>
                </Card>

                {/* LINE */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">L</div>
                            <div>
                                <CardTitle className="text-lg">LINE Login</CardTitle>
                                <CardDescription>LINE Developers Console</CardDescription>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-neutral-300 rounded-full"></div>
                            <span className="text-sm text-neutral-500 font-medium">Inactive</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Channel ID</label>
                            <Input placeholder="Enter Channel ID" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Channel Secret</label>
                            <Input type="password" placeholder="Enter Channel Secret" />
                        </div>
                        <Button>Save & Connect</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
