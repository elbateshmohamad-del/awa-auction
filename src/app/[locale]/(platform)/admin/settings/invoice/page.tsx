"use client";

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { fetchExchangeRate, CurrencyCode } from '@/lib/currency';

// --- 型定義 ---
type Currency = 'JPY' | 'USD' | 'EUR' | 'GBP';

// 各費用項目の定義
type CostConfig = {
    [key in Currency]?: number; // 通貨ごとの請求額設定
};

type CostItem = {
    label: string;
    category: 'japan' | 'destination' | 'other';
    jpyCost: number; // 日本円での原価 (損益分岐点)
    defaultBilling: CostConfig; // デフォルトの請求額設定
};

// 全29項目のキー
type CostKeys =
    // Japan Side
    | 'awaCommission' | 'auctionFee' | 'inlandTransport' | 'yardStorage' | 'vanning'
    | 'exportCustoms' | 'documentation' | 'deregistration'
    | 'packingFrame' | 'packingCrate' | 'packingPallet' | 'packingCarton'
    | 'oceanFreight'
    // Destination Side
    | 'unloading' | 'destInlandTransport'
    // Other
    | 'exchangeFee' | 'bankRemittance' | 'demurrage';


export default function InvoiceSettingsPage() {
    const t = useTranslations('admin.settingsPage.invoiceSimulator');
    // --- State: グローバル設定 ---
    const [globalSettings, setGlobalSettings] = useState({
        monthlyVolume: 10000,
        exportRatio: 30, // %
        avgBikePrice: 300000, // 消費税還付計算用
    });

    // --- State: 為替レート & マージン ---
    type ExchangeRates = { [key in Currency]?: number };
    const [rates, setRates] = useState<ExchangeRates>({ JPY: 1 });
    const [margins, setMargins] = useState<{ [key in Currency]?: number }>({
        USD: 3, EUR: 5, GBP: 5, JPY: 0
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    // --- State: 費用データ (29項目) ---
    const [costs, setCosts] = useState<Record<CostKeys, CostItem>>({
        // A. Japan Side
        awaCommission: { label: 'AWA手数料 (利益)', category: 'japan', jpyCost: 0, defaultBilling: { USD: 500, EUR: 480, GBP: 420 } },
        auctionFee: { label: 'オークション落札手数料', category: 'japan', jpyCost: 20000, defaultBilling: { JPY: 0 } },
        inlandTransport: { label: '陸送費 (Inland Transport)', category: 'japan', jpyCost: 20000, defaultBilling: { JPY: 35000 } },
        yardStorage: { label: 'ヤード保管料', category: 'japan', jpyCost: 1000, defaultBilling: { JPY: 5000 } },
        vanning: { label: 'コンテナ積込作業費', category: 'japan', jpyCost: 5000, defaultBilling: { JPY: 15000 } },
        exportCustoms: { label: '輸出通関費用', category: 'japan', jpyCost: 3000, defaultBilling: { JPY: 8000 } },
        documentation: { label: '書類作成費', category: 'japan', jpyCost: 500, defaultBilling: { JPY: 5000 } },
        deregistration: { label: '抹消登録費用', category: 'japan', jpyCost: 1000, defaultBilling: { JPY: 5000 } },

        packingFrame: { label: '木枠梱包 (Wooden Frame)', category: 'japan', jpyCost: 50000, defaultBilling: { JPY: 80000 } },
        packingCrate: { label: '密閉木箱 (Wooden Crate)', category: 'japan', jpyCost: 80000, defaultBilling: { JPY: 120000 } },
        packingPallet: { label: 'パレット梱包 (Pallet)', category: 'japan', jpyCost: 10000, defaultBilling: { JPY: 20000 } },
        packingCarton: { label: '段ボール梱包 (Carton)', category: 'japan', jpyCost: 5000, defaultBilling: { JPY: 8000 } },

        oceanFreight: { label: '海上運賃 (Ocean Freight)', category: 'japan', jpyCost: 100000, defaultBilling: { USD: 700, EUR: 600, GBP: 500 } },


        // B. Destination Side

        unloading: { label: '港荷降ろし費用', category: 'destination', jpyCost: 0, defaultBilling: { JPY: 0 } },
        destInlandTransport: { label: '現地陸送費', category: 'destination', jpyCost: 0, defaultBilling: { JPY: 0 } },

        // C. Other
        exchangeFee: { label: 'Payment Fee (Gas/Bank)', category: 'other', jpyCost: 2000, defaultBilling: { JPY: 0 } },
        bankRemittance: { label: '海外送金手数料 (被仕向)', category: 'other', jpyCost: 2500, defaultBilling: { JPY: 4000 } },
        demurrage: { label: 'Demurrage (保管料)', category: 'other', jpyCost: 0, defaultBilling: { JPY: 0 } },

    });

    // --- State: 通貨ごとの価格設定 (Multi-Currency Pricing) ---
    // ここで各通貨での請求額を管理する
    type PricingStrategy = Record<CostKeys, number>;
    const [usdPricing, setUsdPricing] = useState<PricingStrategy>({} as any);
    const [eurPricing, setEurPricing] = useState<PricingStrategy>({} as any);
    const [gbpPricing, setGbpPricing] = useState<PricingStrategy>({} as any);

    // 初期化：costsのdefaultBillingから各通貨の初期値を生成
    useEffect(() => {
        const initUSD: any = {};
        const initEUR: any = {};
        const initGBP: any = {};

        // JPYのdefaultBillingがあるものはレート換算で初期値を入れる（仮）
        (Object.keys(costs) as CostKeys[]).forEach(key => {
            const item = costs[key];
            initUSD[key] = item.defaultBilling.USD || 0;
            initEUR[key] = item.defaultBilling.EUR || 0;
            initGBP[key] = item.defaultBilling.GBP || 0;
        });

        setUsdPricing(initUSD);
        setEurPricing(initEUR);
        setGbpPricing(initGBP);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    // --- 為替レート取得 ---
    useEffect(() => {
        const fetchAllRates = async () => {
            try {
                // CurrencyCode型に合わせてキャスト
                const [usd, eur, gbp] = await Promise.all([
                    fetchExchangeRate('USD'),
                    fetchExchangeRate('EUR'),
                    fetchExchangeRate('GBP')
                ]);
                setRates({
                    JPY: 1,
                    USD: parseFloat(usd.toFixed(2)),
                    EUR: parseFloat(eur.toFixed(2)),
                    GBP: parseFloat(gbp.toFixed(2))
                });
            } catch (e) {
                console.error("Failed to fetch rates", e);
            }
        };
        fetchAllRates();
    }, []);

    // --- Load Saved Settings ---
    useEffect(() => {
        const loadSettings = async () => {
            try {
                const res = await fetch('/api/settings/invoice');
                if (res.ok) {
                    const data = await res.json();
                    if (data.settings) {
                        if (data.settings.globalSettings) setGlobalSettings(prev => ({ ...prev, ...data.settings.globalSettings }));

                        if (data.settings.costs) {
                            setCosts(prev => {
                                const merged = { ...prev };
                                // Only update keys that currently exist (preserving new keys, ignoring old ones)
                                (Object.keys(merged) as CostKeys[]).forEach(key => {
                                    if (data.settings.costs[key]) {
                                        merged[key] = data.settings.costs[key];
                                    }
                                });
                                return merged;
                            });
                        }

                        if (data.settings.margins) setMargins(prev => ({ ...prev, ...data.settings.margins }));
                        if (data.settings.usdPricing) setUsdPricing(prev => ({ ...prev, ...data.settings.usdPricing }));
                        if (data.settings.eurPricing) setEurPricing(prev => ({ ...prev, ...data.settings.eurPricing }));
                        if (data.settings.gbpPricing) setGbpPricing(prev => ({ ...prev, ...data.settings.gbpPricing }));
                        console.log("Settings loaded and merged successfully");
                    }
                }
            } catch (e) {
                console.error("Failed to load settings", e);
            }
        };
        loadSettings();
    }, []);

    // --- Save Handler ---
    const handleSaveAll = async () => {
        setIsSaving(true);
        setIsSaved(false);
        try {
            const payload = {
                globalSettings,
                costs,
                margins,
                usdPricing,
                eurPricing,
                gbpPricing
            };
            const res = await fetch('/api/settings/invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setIsSaved(true);
                setTimeout(() => setIsSaved(false), 3000); // 3秒後に戻す
            } else {
                throw new Error('Failed to save');
            }
        } catch (e) {
            console.error("Failed to save settings", e);
            alert('Failed to save configuration.');
        } finally {
            setIsSaving(false);
        }
    };


    // --- Scroll Lock Fix for Number Inputs ---
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // Prevent page scroll when using wheel on focused number input
            if (document.activeElement === e.target && (e.target as HTMLElement).tagName === 'INPUT' && (e.target as HTMLInputElement).type === 'number') {
                e.preventDefault();
            }
        };

        // Add non-passive listener to window to capture all events
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    // --- 計算ロジック ---
    const calculateProfit = (currency: Currency, pricing: PricingStrategy) => {
        if (!rates[currency]) return 0;

        let totalProfit = 0;
        const rate = (rates[currency] || 0) - (margins[currency] || 0); // 安全マージン適用レート

        (Object.keys(costs) as CostKeys[]).forEach(key => {
            // auctionFeeは顧客請求しないため、利益計算から除外
            if (key === 'auctionFee') return;

            const billingAmount = pricing[key] || 0;
            const jpyCost = costs[key].jpyCost;

            // 請求額を円換算
            const billingInJpy = billingAmount * rate;
            totalProfit += (billingInJpy - jpyCost);
        });

        return totalProfit;
    };

    // UI用State
    const [activeTab, setActiveTab] = useState<Currency>('USD');
    const [showCostInput, setShowCostInput] = useState(false);

    // ハンドラー
    const handleCostChange = (key: CostKeys, value: number) => {
        setCosts(prev => ({
            ...prev,
            [key]: { ...prev[key], jpyCost: value }
        }));
    };

    const handlePricingChange = (currency: Currency, key: CostKeys, value: number) => {
        if (currency === 'USD') setUsdPricing(prev => ({ ...prev, [key]: value }));
        if (currency === 'EUR') setEurPricing(prev => ({ ...prev, [key]: value }));
        if (currency === 'GBP') setGbpPricing(prev => ({ ...prev, [key]: value }));
    };

    // Auto-fill pricing from JPY Cost + Margin (Helper function)
    const autoFillPricing = (currency: Currency) => {
        const rate = (rates[currency] || 1);
        if (rate <= 0) return;

        const newPricing: any = {};
        (Object.keys(costs) as CostKeys[]).forEach(key => {
            // auctionFeeは自動入力の対象外
            if (key === 'auctionFee') {
                newPricing[key] = 0;
                return;
            }
            const cost = costs[key].jpyCost;
            // 原価 / レート = その通貨での原価相当額
            // 小数点第2位まで保持
            newPricing[key] = parseFloat((cost / rate).toFixed(2));
        });

        if (currency === 'USD') setUsdPricing(newPricing);
        if (currency === 'EUR') setEurPricing(newPricing);
        if (currency === 'GBP') setGbpPricing(newPricing);
    };


    return (
        <div className="p-4 md:p-8 max-w-[1800px] mx-auto min-h-screen bg-gray-50/50 space-y-8">

            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#0F4C81] mb-2">{t('title')}</h1>
                    <p className="text-gray-500 font-bold">{t('subtitle')}</p>
                </div>

                {/* Global Settings (Volume, etc) */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-end">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 mb-1">{t('globalSettings.monthlyVolume')}</label>
                        <input
                            type="number"
                            value={globalSettings.monthlyVolume}
                            onChange={(e) => setGlobalSettings({ ...globalSettings, monthlyVolume: Number(e.target.value) })}
                            className="bg-gray-50 border border-gray-200 rounded p-2 w-24 font-bold text-right"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 mb-1">{t('globalSettings.avgPrice')}</label>
                        <input
                            type="number"
                            value={globalSettings.avgBikePrice}
                            onChange={(e) => setGlobalSettings({ ...globalSettings, avgBikePrice: Number(e.target.value) })}
                            className="bg-gray-50 border border-gray-200 rounded p-2 w-32 font-bold text-right"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                {/* Left: Input Area (Costs & Pricing) (Span 8) */}
                <div className="xl:col-span-8 space-y-6">

                    {/* 1. JPY Cost Input (Collapsible) */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div
                            className="bg-gray-100 px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-colors"
                            onClick={() => setShowCostInput(!showCostInput)}
                        >
                            <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                                🇯🇵 {t('baseCost.title')} <span className="text-xs font-normal bg-gray-600 text-white px-2 py-1 rounded">{t('baseCost.label')}</span>
                            </h2>
                            <span className="text-2xl text-gray-400">{showCostInput ? '−' : '+'}</span>
                        </div>

                        {showCostInput && (
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 animate-in slide-in-from-top-2">
                                {(Object.entries(costs) as [CostKeys, CostItem][]).map(([key, item]) => (
                                    <div key={key} className="flex justify-between items-center border-b border-gray-100 py-2">
                                        <div className="text-sm font-bold text-gray-600">
                                            <span className={`inline-block w-20 text-xs text-white px-1 mr-2 rounded text-center ${item.category === 'japan' ? 'bg-blue-400' : item.category === 'destination' ? 'bg-orange-400' : 'bg-gray-400'}`}>
                                                {item.category === 'japan' ? t('baseCost.categoryJapan') : item.category === 'destination' ? t('baseCost.categoryDest') : t('baseCost.categoryOther')}
                                            </span>
                                            {t(`costItems.${key}`)}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-400 text-xs mr-1">¥</span>
                                            <input
                                                type="number"
                                                value={item.jpyCost}
                                                onChange={(e) => handleCostChange(key, Number(e.target.value))}
                                                onWheel={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                                className="w-24 text-right font-bold text-gray-800 bg-gray-50 border border-gray-200 rounded px-2 focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 2. Multi-Currency Pricing Strategy */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-700">🌍 {t('pricing.title')}</h2>
                            <p className="text-xs text-gray-500 mt-1">{t('pricing.subtitle')}</p>
                        </div>

                        {/* Currency Tabs */}
                        <div className="flex border-b border-gray-200">
                            {(['USD', 'EUR', 'GBP'] as Currency[]).map(c => (
                                <button
                                    key={c}
                                    onClick={() => setActiveTab(c)}
                                    className={`flex-1 py-4 text-center font-bold text-sm transition-all ${activeTab === c
                                        ? 'border-b-4 border-[#0F4C81] text-[#0F4C81] bg-blue-50/50'
                                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {c === 'USD' ? '🇺🇸 USD Pricing' : c === 'EUR' ? '🇪🇺 EUR Pricing' : '🇬🇧 GBP Pricing'}
                                </button>
                            ))}
                        </div>

                        {/* Pricing Form */}
                        <div className="p-6 bg-blue-50/30 min-h-[500px]">
                            {/* Toolbar */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                                        <span className="text-xs text-gray-400 font-bold block">{t('pricing.liveRate')}</span>
                                        <span className="font-black text-xl text-gray-700">1 {activeTab} = {rates[activeTab]?.toFixed(2)} JPY</span>
                                    </div>
                                    <div className="bg-yellow-50 px-4 py-2 rounded-lg border border-yellow-200 shadow-sm">
                                        <span className="text-xs text-yellow-600 font-bold block">{t('pricing.safetyMargin')}</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-gray-400 font-bold text-sm">-</span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={margins[activeTab]}
                                                onChange={(e) => setMargins({ ...margins, [activeTab]: Number(e.target.value) })}
                                                className="w-16 bg-transparent border-b border-yellow-400 font-bold text-center text-gray-700 focus:outline-none"
                                            />
                                            <span className="text-xs text-gray-500">JPY</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => autoFillPricing(activeTab)}
                                    className="text-xs"
                                >
                                    {t('pricing.autoFill')}
                                </Button>
                            </div>

                            {/* Matrix */}
                            <div className="space-y-2">
                                <div className="grid grid-cols-12 gap-4 px-4 text-xs font-bold text-gray-400 uppercase mb-2">
                                    <div className="col-span-5">{t('pricing.itemName')}</div>
                                    <div className="col-span-3 text-right">{t('pricing.jpyCost')}</div>
                                    <div className="col-span-4 text-right">{t('pricing.billing')} ({activeTab})</div>
                                </div>

                                {(Object.entries(costs) as [CostKeys, CostItem][]).map(([key, item]) => {
                                    const currentPricing = activeTab === 'USD' ? usdPricing
                                        : activeTab === 'EUR' ? eurPricing
                                            : gbpPricing;
                                    const val = currentPricing[key] || 0;

                                    // Profit Simulation for this row
                                    const rate = (rates[activeTab] || 0) - (margins[activeTab] || 0);
                                    const profit = (val * rate) - item.jpyCost;

                                    return (
                                        <div key={key} className="grid grid-cols-12 gap-4 items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="col-span-5 text-sm font-bold text-gray-700">{t(`costItems.${key}`)}</div>
                                            <div className="col-span-3 text-right text-xs text-gray-400">¥{item.jpyCost.toLocaleString()}</div>
                                            <div className="col-span-4 flex items-center justify-end gap-2 relative group">
                                                <span className="text-xs font-bold text-gray-400">{activeTab}</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={val || ''}
                                                    onChange={(e) => handlePricingChange(activeTab, key, parseFloat(e.target.value))}
                                                    onWheel={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                                    className={`w-24 text-right font-black text-lg border-b-2 bg-transparent focus:outline-none focus:border-blue-500 ${profit >= 0 ? 'text-gray-800 border-gray-200' : 'text-red-500 border-red-200'}`}
                                                    placeholder="0.00"
                                                />
                                                {/* Hover tooltip for row profit */}
                                                <div className="absolute right-0 -top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    {t('pricing.profit')}: ¥{Math.round(profit).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Comparative Simulator (Span 4) */}
                <div className="xl:col-span-4 space-y-6">
                    <div className="sticky top-24">
                        <div className="bg-gradient-to-b from-[#1a1f2c] to-[#2d3748] rounded-2xl p-6 text-white shadow-2xl border border-gray-700">
                            <h2 className="text-xl font-bold mb-6 text-center !text-white">
                                📊 {t('simulation.title')}
                            </h2>

                            {/* Comparison Cards */}
                            <div className="space-y-4">
                                {(['USD', 'EUR', 'GBP'] as Currency[]).map(c => {
                                    const pricing = c === 'USD' ? usdPricing : c === 'EUR' ? eurPricing : gbpPricing;
                                    // Use 'USD' type for calculation even if it is EUR/GBP because calculateProfit takes defined Currency type
                                    // Note: Currency type is 'JPY' | 'USD' | 'EUR' | 'GBP'
                                    const profitPerUnit = calculateProfit(c, pricing);
                                    const taxRefund = globalSettings.avgBikePrice * 0.1;
                                    const totalUnitProfit = profitPerUnit + taxRefund;
                                    const monthlyTotal = totalUnitProfit * globalSettings.monthlyVolume * (globalSettings.exportRatio / 100);

                                    const allProfits = [
                                        calculateProfit('USD', usdPricing) + taxRefund,
                                        calculateProfit('EUR', eurPricing) + taxRefund,
                                        calculateProfit('GBP', gbpPricing) + taxRefund
                                    ];
                                    const maxProfit = Math.max(...allProfits);
                                    const isBest = totalUnitProfit === maxProfit && maxProfit > 0;

                                    return (
                                        <div key={c} className={`rounded-xl p-4 border transition-all ${isBest ? 'bg-gradient-to-r from-blue-900/50 to-blue-800/50 border-blue-400 shadow-blue-900/50 shadow-lg scale-105' : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl">{c === 'USD' ? '🇺🇸' : c === 'EUR' ? '🇪🇺' : '🇬🇧'}</span>
                                                    <span className="font-bold">{c} {t('simulation.billing')}</span>
                                                </div>
                                                {isBest && <span className="bg-blue-500 text-xs font-bold px-2 py-1 rounded-full animate-pulse">{t('simulation.best')}</span>}
                                            </div>

                                            <div className="flex items-end justify-between">
                                                <span className="text-xs text-gray-400">{t('simulation.totalMonth')}</span>
                                                <span className="text-2xl font-black tracking-tight text-white">¥{(monthlyTotal / 100000000).toFixed(2)}億</span>
                                            </div>
                                            <div className="text-right text-xs text-blue-300 mt-1">
                                                (¥{Math.round(totalUnitProfit).toLocaleString()} {t('simulation.perUnit')})
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400 text-center leading-relaxed">
                                {t('simulation.taxRefund')} (¥{(globalSettings.avgBikePrice * 0.1).toLocaleString()}/unit)<br />
                                {t('simulation.monthlyExport')}: {(globalSettings.monthlyVolume * globalSettings.exportRatio / 100).toLocaleString()} units
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <Button
                                onClick={handleSaveAll}
                                disabled={isSaving}
                                className={`w-full py-6 text-lg font-bold shadow-xl transition-all duration-300 ${isSaved
                                    ? 'bg-green-600 hover:bg-green-700 text-white scale-105'
                                    : 'hover:scale-[1.02]'
                                    }`}
                            >
                                {isSaving ? t('buttons.saving') : isSaved ? t('buttons.saved') + ' ✅' : t('buttons.saveAll')}
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
