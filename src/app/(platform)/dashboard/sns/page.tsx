import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function DashboardSnsPage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h1 className="text-2xl font-bold">Social Media Accounts</h1>
            <p className="text-neutral-600">Connect your social accounts for easier login and sharing.</p>

            <div className="grid gap-4">
                {/* Google */}
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl">
                                G
                            </div>
                            <div>
                                <h3 className="font-semibold">Google</h3>
                                <p className="text-sm text-neutral-500">Not connected</p>
                            </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                    </CardContent>
                </Card>

                {/* Facebook */}
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                f
                            </div>
                            <div>
                                <h3 className="font-semibold">Facebook</h3>
                                <p className="text-sm text-green-600">Connected as Taro Yamada</p>
                            </div>
                        </div>
                        <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700">Disconnect</Button>
                    </CardContent>
                </Card>

                {/* LINE */}
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                                L
                            </div>
                            <div>
                                <h3 className="font-semibold">LINE</h3>
                                <p className="text-sm text-neutral-500">Not connected</p>
                            </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
