"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#0F4C81] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#ffffff' }}>Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto" style={{ color: '#bfdbfe' }}>
                        Have a question or need assistance? We're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                    <p className="text-green-600">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                                            <Input placeholder="John" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                                            <Input placeholder="Doe" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                        <Input type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                                        <select className="w-full h-10 rounded-lg border-gray-300 focus:border-[#0F4C81] focus:ring-[#0F4C81]">
                                            <option>General Inquiry</option>
                                            <option>Auction Support</option>
                                            <option>Shipping Question</option>
                                            <option>Payment Issue</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                        <textarea
                                            className="w-full rounded-lg border-gray-300 focus:border-[#0F4C81] focus:ring-[#0F4C81] min-h-[150px]"
                                            placeholder="How can we help you?"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">support@awa-auction.com</p>
                                        <p className="text-gray-400 text-sm">Response within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+81 45-123-4567</p>
                                        <p className="text-gray-400 text-sm">Mon-Fri, 9:00 AM - 6:00 PM JST</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                                        <p className="text-gray-600">
                                            AWA Holdings Co., Ltd.<br />
                                            1-2-3 Minato Mirai, Nishi-ku<br />
                                            Yokohama, Kanagawa 220-0012<br />
                                            Japan
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 bg-gray-100 rounded-xl h-48 flex items-center justify-center text-gray-400">
                                🗺️ Map Placeholder
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

