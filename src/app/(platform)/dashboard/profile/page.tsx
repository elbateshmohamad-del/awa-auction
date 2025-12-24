import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function DashboardProfilePage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h1 className="text-2xl font-bold">Account Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your contact details and address.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <Input defaultValue="Taro" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <Input defaultValue="Yamada" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <Input type="email" defaultValue="taro.yamada@example.com" disabled className="bg-neutral-100" />
                        <p className="text-xs text-neutral-500 mt-1">Contact support to change your email.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input defaultValue="+81 90-1234-5678" />
                    </div>

                    <Button className="mt-2">Save Changes</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Ensure your account is secure with a strong password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Current Password</label>
                        <Input type="password" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">New Password</label>
                        <Input type="password" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                        <Input type="password" />
                    </div>
                    <Button variant="outline" className="mt-2">Update Password</Button>
                </CardContent>
            </Card>
        </div>
    );
}
