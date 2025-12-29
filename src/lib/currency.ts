
// Simple currency service to get exchange rates
// Base currency is always JPY for this application

export interface ExchangeRates {
    [currency: string]: number; // 1 Unit = X JPY (e.g. USD = 145.5) or 1 JPY = X Unit?
    // Wait, usually we want "1 JPY = 0.006 USD" or "1 USD = 145 JPY".
    // For price conversion: PriceInJPY / (JPY per Unit)? No.
    // PriceInJPY * (Unit per JPY).
    // Or PriceInJPY / (JPY per Unit).
    // If USD = 150 JPY. 15000 JPY = 100 USD.
    // 15000 / 150 = 100.
    // So we need "JPY per Unit" (e.g. USD returns 150).
}

// Fallback rates if API fails
const FALLBACK_RATES: ExchangeRates = {
    JPY: 1,
    USD: 145.50,
    EUR: 158.20,
    GBP: 185.30,
    PHP: 2.55,
    AED: 39.50,
    EGP: 0.30,
    SAR: 26.50
};

export type CurrencyCode = 'JPY' | 'USD' | 'EUR' | 'GBP' | 'PHP' | 'AED' | 'EGP' | 'SAR';

export async function getCurrentExchangeRates(): Promise<ExchangeRates> {
    try {
        // Try to fetch from a free API (e.g., exchangerate-api)
        // Note: Check if we can use a free endpoint. 
        // Often https://open.er-api.com/v6/latest/JPY gives 1 JPY = X USD.
        // If we get 1 JPY = 0.0068 USD.
        // To get "USD = 145 JPY", we take 1 / 0.0068.

        const response = await fetch('https://open.er-api.com/v6/latest/JPY', { next: { revalidate: 3600 } });
        if (!response.ok) throw new Error('Failed to fetch rates');

        const data = await response.json();
        const rates: ExchangeRates = { JPY: 1 };

        // Convert "1 JPY = X Currency" to "1 Currency = Y JPY"
        // Because we usually store "How many JPY is 1 USD" for easy mental math in Japan, 
        // OR we store the multiplier.
        // Let's verify how we want to store it. 
        // Plan said: "{ "USD": 145.50 }" -> 1 USD = 145.50 JPY.
        // API returns: "USD": 0.0068 (1 JPY = 0.0068 USD).
        // So we calculate 1 / rate.

        const targetCurrencies = ['USD', 'EUR', 'GBP', 'PHP', 'AED'];

        targetCurrencies.forEach(code => {
            if (data.rates[code]) {
                const rateInForeign = data.rates[code];
                // Avoid division by zero
                if (rateInForeign > 0) {
                    rates[code] = 1 / rateInForeign;
                }
            }
        });

        // Merge with fallback in case some are missing
        return { ...FALLBACK_RATES, ...rates };

    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return FALLBACK_RATES;
    }
}

export function formatCurrency(amountInJPY: number, currency: string, rates: ExchangeRates): string {
    if (currency === 'JPY') {
        return `¥${amountInJPY.toLocaleString()}`;
    }

    const rate = rates[currency];
    if (!rate) {
        // Fallback to JPY if rate unknown
        return `¥${amountInJPY.toLocaleString()}`;
    }

    const value = amountInJPY / rate;

    // Formatting options
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 0
    }).format(value);
}

// -- Legacy/Compatibility Exports and Helpers --

export async function fetchExchangeRate(currency: CurrencyCode): Promise<number> {
    // If JPY, rate is 1? Or undefined. 
    // In auctions/page.tsx: `const rate = await fetchExchangeRate(selectedCurrency);`
    // `const rateWithMargin = selectedCurrency === 'JPY' ? 1 : applyMargin(rate);`
    // So if JPY, it returns something, maybe 1.
    if (currency === 'JPY') return 1;

    const rates = await getCurrentExchangeRates();
    return rates[currency] || 1;
}

export function applyMargin(rate: number): number {
    // Apply 2% margin to cover exchange fees/volatility for user estimates
    // rate is JPY per Unit (e.g. 145).
    // If we want to show a SAFE price to user, we want Price / Rate_With_Margin.
    // Price / (Rate * 0.98) -> Price / LowerRate -> Higher calculated USD Price.
    // This assumes "Buying". 
    // If we are showing "Cost", higher is safer.
    return rate * 0.98;
}

export function getCurrencySymbol(currency: string): string {
    switch (currency) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'GBP': return '£';
        case 'JPY': return '¥';
        case 'PHP': return '₱';
        case 'AED': return 'Dh';
        case 'EGP': return 'E£';
        default: return currency;
    }
}
