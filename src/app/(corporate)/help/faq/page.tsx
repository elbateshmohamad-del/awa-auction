export default function FaqPage() {
    const faqs = [
        {
            q: "How do I register for an account?",
            a: "Click on the 'Register' button at the top right corner. You'll need to provide your email, create a password, and verify your email address. For full access, you'll also need to complete KYC verification."
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept major credit cards (Visa, Mastercard, Amex), Bank Wire Transfers, and PayPal for deposits."
        },
        {
            q: "Can I inspect the vehicles before bidding?",
            a: "Yes, we provide detailed inspection reports and high-resolution photos for every vehicle. You can also request a video inspection or hire a third-party inspector through our partners."
        },
        {
            q: "How long does shipping take?",
            a: "Shipping times vary by destination. Typically, it takes 2-4 weeks for Asia, 4-6 weeks for Oceania and North America, and 6-8 weeks for Europe and Africa."
        },
        {
            q: "What if the vehicle is not as described?",
            a: "We have a strict dispute resolution policy. If a vehicle significantly differs from the inspection report, please contact support within 48 hours of receiving the vehicle."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h1>

            <div className="space-y-6">
                {faqs.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.q}</h3>
                        <p className="text-neutral-600 leading-relaxed">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
