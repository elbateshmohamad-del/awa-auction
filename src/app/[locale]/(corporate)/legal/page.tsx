import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
    title: 'Legal Information',
    description: 'AWA Auction Platform legal information including specified commercial transactions, company details, and regulatory compliance.',
};

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Legal Information</h1>
                    <p className="text-gray-500 mb-12">特定商取引法に基づく表記 / Specified Commercial Transactions Act</p>

                    <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900 w-1/3">販売事業者 / Seller</td>
                                    <td className="py-4 text-gray-600">AWA Holdings Co., Ltd.</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">代表者 / Representative</td>
                                    <td className="py-4 text-gray-600">Taro Yamada</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">所在地 / Address</td>
                                    <td className="py-4 text-gray-600">
                                        〒220-0012<br />
                                        神奈川県横浜市西区みなとみらい1-2-3<br />
                                        AWAビル5F
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">電話番号 / Phone</td>
                                    <td className="py-4 text-gray-600">+81 45-123-4567</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">メール / Email</td>
                                    <td className="py-4 text-gray-600">legal@awa-auction.com</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">商品代金 / Price</td>
                                    <td className="py-4 text-gray-600">各商品ページに表示（落札価格 + 手数料）</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">支払方法 / Payment</td>
                                    <td className="py-4 text-gray-600">銀行振込、クレジットカード</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">支払時期 / Payment Due</td>
                                    <td className="py-4 text-gray-600">落札後3営業日以内</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">引渡時期 / Delivery</td>
                                    <td className="py-4 text-gray-600">入金確認後、2〜8週間（配送先による）</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-4 font-bold text-gray-900">返品・交換 / Returns</td>
                                    <td className="py-4 text-gray-600">原則、オークション落札品の返品は不可。ただし、記載と著しく異なる場合は要相談。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">古物商許可</h2>
                        <p className="text-gray-600 leading-relaxed">
                            神奈川県公安委員会許可 第00000000号
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">免責事項</h2>
                        <p className="text-gray-600 leading-relaxed">
                            当社は、オークションにおける商品の品質、性能、適合性について、検査報告書に記載の範囲において情報を提供しますが、これを保証するものではありません。落札者は、自己の責任において入札・購入を行うものとします。
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
