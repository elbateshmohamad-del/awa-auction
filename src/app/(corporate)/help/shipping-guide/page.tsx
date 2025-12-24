export default function ShippingGuidePage() {
    return (
        <div className="max-w-5xl mx-auto pt-24 pb-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Global Shipping Guide</h1>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">RoRo Shipping</h3>
                    <p className="text-neutral-600 text-sm mb-4">Roll-on/Roll-off. The most common and cost-effective method for drivable vehicles.</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Fast processing</li>
                        <li>Lower cost</li>
                        <li>Vehicle must run</li>
                    </ul>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Container Shipping</h3>
                    <p className="text-neutral-600 text-sm mb-4">Secure shipping in 20ft or 40ft containers. Good for multiple bikes or high-value items.</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Higher security</li>
                        <li>Can ship parts</li>
                        <li>Flexible loading</li>
                    </ul>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Air Freight</h3>
                    <p className="text-neutral-600 text-sm mb-4">The fastest option for urgent deliveries. Most expensive.</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Fastest delivery</li>
                        <li>High cost</li>
                        <li>Good for prototypes</li>
                    </ul>
                </div>
            </div>

            <div className="overflow-x-auto">
                <h3 className="font-bold text-xl mb-4">Estimated Shipping Rates (Motorcycles)</h3>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-neutral-100 border-b">
                            <th className="p-4">Region</th>
                            <th className="p-4">Destination Port</th>
                            <th className="p-4">Est. Time</th>
                            <th className="p-4">Est. Cost (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-4">Asia</td>
                            <td className="p-4">Manila, Phillipines</td>
                            <td className="p-4">10-15 Days</td>
                            <td className="p-4">$300 - $500</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4">Oceania</td>
                            <td className="p-4">Sydney, Australia</td>
                            <td className="p-4">20-25 Days</td>
                            <td className="p-4">$600 - $800</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4">North America</td>
                            <td className="p-4">Long Beach, USA</td>
                            <td className="p-4">25-30 Days</td>
                            <td className="p-4">$800 - $1,200</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4">Europe</td>
                            <td className="p-4">Rotterdam, Netherlands</td>
                            <td className="p-4">35-45 Days</td>
                            <td className="p-4">$900 - $1,300</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4">Africa</td>
                            <td className="p-4">Mombasa, Kenya</td>
                            <td className="p-4">30-40 Days</td>
                            <td className="p-4">$700 - $1,000</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-xs text-neutral-500 mt-2">* Rates are estimates and subject to fuel surcharges and seasonal changes.</p>
            </div>
        </div>
    );
}
