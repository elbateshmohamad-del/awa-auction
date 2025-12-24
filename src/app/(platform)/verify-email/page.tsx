import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";

export default function VerifyEmailPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-4">
            <Card className="max-w-md w-full text-center p-6">
                <div className="mb-6 flex justify-center">
                    <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
                        ✉️
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
                    <CardDescription className="text-base mt-2">
                        We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-neutral-500">
                        It may take a few minutes to arrive. Don't forget to check your spam folder!
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">Resend Verification Email</Button>
                    <Link href="/login" className="text-sm text-blue-600 hover:underline">
                        Back to Login
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
