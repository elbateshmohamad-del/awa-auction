import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
    title: 'Our Team',
    description: 'Meet the AWA team. Passionate professionals dedicated to connecting you with premium Japanese motorcycles.',
};

const team = [
    { name: 'Taro Yamada', role: 'CEO & Founder', bio: '20+ years in automotive export. Founded AWA to revolutionize motorcycle trading.' },
    { name: 'Yuki Tanaka', role: 'COO', bio: 'Operations expert with background in logistics and supply chain management.' },
    { name: 'Kenji Sato', role: 'Head of Inspections', bio: 'Master mechanic with certifications from Honda, Yamaha, and Kawasaki.' },
    { name: 'Emily Chen', role: 'Head of International Sales', bio: 'Fluent in 4 languages. Builds relationships with buyers worldwide.' },
    { name: 'Hiroshi Ito', role: 'CTO', bio: 'Former Google engineer. Built AWA\'s real-time auction platform.' },
    { name: 'Sarah Miller', role: 'Customer Success Lead', bio: 'Ensures every buyer has a seamless experience from bid to delivery.' },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Team</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Passionate professionals dedicated to connecting you with premium Japanese motorcycles.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#0F4C81] to-[#3B82F6] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                <p className="text-[#0F4C81] font-medium text-sm mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Join Our Team</h2>
                    <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                        We're always looking for talented individuals to join our growing team.
                    </p>
                    <a href="mailto:careers@awa-auction.com" className="inline-block bg-white text-[#0F4C81] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                        View Open Positions
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
