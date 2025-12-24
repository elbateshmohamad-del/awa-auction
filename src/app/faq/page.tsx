"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const faqs = [
    {
        category: 'Getting Started',
        questions: [
            {
                q: 'How do I create an account?',
                a: 'Click "Sign Up" on the top right, fill in your details, and verify your email. You\'ll need to complete KYC verification before placing bids.'
            },
            {
                q: 'What is KYC verification?',
                a: 'KYC (Know Your Customer) is a verification process required to prevent fraud. You\'ll need to submit valid ID and proof of address. This is typically approved within 24-48 hours.'
            },
            {
                q: 'Is there a registration fee?',
                a: 'No, registration is completely free. You only pay when you win an auction (buyer\'s premium + shipping).'
            },
        ]
    },
    {
        category: 'Bidding & Auctions',
        questions: [
            {
                q: 'How does the auction work?',
                a: 'Our auctions run in real-time. You can place bids on any active listing. The highest bidder when the timer ends wins the motorcycle.'
            },
            {
                q: 'Can I set a maximum bid?',
                a: 'Yes, you can set a proxy bid. The system will automatically bid on your behalf up to your maximum, using the minimum increment necessary to stay ahead.'
            },
            {
                q: 'What happens if I win?',
                a: 'You\'ll receive an email with payment instructions. Payment is typically due within 3 business days. Once confirmed, we begin the export process.'
            },
        ]
    },
    {
        category: 'Shipping & Delivery',
        questions: [
            {
                q: 'How long does shipping take?',
                a: 'Shipping times vary by destination. Asia: 2-4 weeks, Europe: 4-6 weeks, Americas: 4-8 weeks. We provide tracking updates throughout the journey.'
            },
            {
                q: 'Is insurance included?',
                a: 'Basic marine insurance is included in all shipments. You can opt for comprehensive coverage at an additional cost.'
            },
            {
                q: 'Who handles customs clearance?',
                a: 'We handle all Japanese export paperwork. Import customs is typically the buyer\'s responsibility, but we can recommend customs brokers in your country.'
            },
        ]
    },
    {
        category: 'Payments',
        questions: [
            {
                q: 'What payment methods do you accept?',
                a: 'We accept bank wire transfer (preferred), credit cards (for deposits), and select cryptocurrency for international payments.'
            },
            {
                q: 'Are there any hidden fees?',
                a: 'No hidden fees. All costs are disclosed upfront: bid amount + buyer\'s premium (5%) + shipping + inspection fee. That\'s it.'
            },
        ]
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Everything you need to know about buying motorcycles through AWA.
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex} className="mb-12">
                            <h2 className="text-xl font-bold text-[#0F4C81] mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-[#0F4C81] rounded-full"></span>
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.questions.map((item, qIndex) => {
                                    const id = `${catIndex}-${qIndex}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div
                                            key={qIndex}
                                            className={`border rounded-xl overflow-hidden transition-all ${isOpen ? 'border-[#0F4C81] bg-blue-50/30' : 'border-gray-200'
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggleFAQ(id)}
                                                className="w-full px-6 py-4 text-left flex justify-between items-center"
                                            >
                                                <span className={`font-bold ${isOpen ? 'text-[#0F4C81]' : 'text-gray-900'}`}>
                                                    {item.q}
                                                </span>
                                                <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                                                    +
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Still Have Questions?</h2>
                    <p className="text-blue-200 mb-8">Our support team is ready to help you.</p>
                    <Link href="/contact">
                        <Button variant="accent" size="lg">Contact Support</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
