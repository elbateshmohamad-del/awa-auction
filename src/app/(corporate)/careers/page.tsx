import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function CareersPage() {
    const jobs = [
        {
            id: 1,
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Remote (Japan)",
            type: "Full-time",
            description: "We are looking for an experienced Full Stack Engineer to lead our platform development.",
        },
        {
            id: 2,
            title: "Product Designer",
            department: "Design",
            location: "Tokyo, Japan",
            type: "Full-time",
            description: "Join our design team to create world-class user experiences for our global auction platform.",
        },
        {
            id: 3,
            title: "Customer Success Manager",
            department: "Operations",
            location: "Remote",
            type: "Full-time",
            description: "Help our customers succeed and grow their businesses using the AWA platform.",
        },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-indigo-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="info" className="mb-4">We are hiring!</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#ffffff' }}>Join the Future of Global Auctions</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
                        Help us build the most transparent and efficient auction platform connecting Japan to the world.
                    </p>
                    <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                        View Open Positions
                    </Button>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why AWA Auction?</h2>
                        <p className="text-neutral-600">
                            We believe in transparency, innovation, and global connection. Join a diverse team passionate about simplifying cross-border trade.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">Fast-Paced Growth</h3>
                            <p className="text-neutral-600">Work in a dynamic environment where your impact is visible every day.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🌏</div>
                            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                            <p className="text-neutral-600">Connect buyers and sellers from over 50 countries around the world.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💡</div>
                            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                            <p className="text-neutral-600">We leverage the latest technology to solve complex logistics and trading problems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Open Positions</h2>
                <div className="grid gap-6 max-w-4xl mx-auto">
                    {jobs.map((job) => (
                        <Card key={job.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-2xl text-blue-800">{job.title}</CardTitle>
                                        <p className="text-lg mt-1 text-gray-500">
                                            {job.department} · {job.location}
                                        </p>
                                    </div>
                                    <Badge>{job.type}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-600 mb-6">{job.description}</p>
                                <Button variant="secondary">Apply Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
