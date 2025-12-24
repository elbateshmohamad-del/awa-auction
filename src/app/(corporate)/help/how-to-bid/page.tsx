import { Badge } from "@/components/ui/Badge";

export default function HowToBidPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">How to Bid</h1>

            <div className="prose max-w-none text-neutral-600">
                <p className="lead text-xl mb-6">
                    Our bidding system is transparent and easy to use. Learn how to place bids and win your dream vehicle.
                </p>

                <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Bidding Types</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Live Bidding</h4>
                        <Badge className="mb-2">Real-time</Badge>
                        <p>Bid in real-time as the auction happens. Fast-paced and exciting.</p>
                    </div>
                    <div className="border p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Proxy Bidding</h4>
                        <Badge variant="secondary" className="mb-2">Automated</Badge>
                        <p>Set your maximum price in advance. Our system bids for you incrementally.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Bidding Rules</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                    <li><strong>Bid Increments:</strong> Bids increase by fixed amounts (e.g., ¥1,000 or ¥10,000) depending on the current price.</li>
                    <li><strong>Sniper Protection:</strong> If a bid is placed in the last 5 minutes, the auction time is extended by 5 minutes to prevent last-second sniping.</li>
                    <li><strong>Binding Bids:</strong> All bids are legally binding contracts. Do not bid if you do not intend to purchase.</li>
                </ul>

                <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Tips for Success</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Research the market value of the vehicle before bidding.</li>
                    <li>Set a strict budget including shipping and import taxes.</li>
                    <li>Use the watchlist to track multiple items.</li>
                    <li>Check the inspection sheet thoroughly.</li>
                </ul>
            </div>
        </div>
    );
}
