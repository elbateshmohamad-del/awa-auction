export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'EGP' | 'JPY';

export const fetchExchangeRate = async (fromCurrency: CurrencyCode): Promise<number> => {
    // 1 JPY is always 1 JPY
    if (fromCurrency === 'JPY') return 1;

    try {
        // Using Exchangerate-API (Free, supports EGP)
        // Fetches all rates relative to USD in a single call (lightweight JSON)
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (!res.ok) throw new Error('Failed to fetch rates');
        const data = await res.json();

        const usdToJpy = data.rates.JPY;
        const usdToFrom = data.rates[fromCurrency]; // e.g., Rate for EGP

        if (!usdToJpy || !usdToFrom) throw new Error('Currency not found in API');

        // Calculate Cross Rate: How many JPY for 1 unit of foreign currency?
        // 1 Foreign = (1 / usdToForeign) USD
        // = (1 / usdToForeign) * usdToJpy JPY

        return usdToJpy / usdToFrom;

    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        // Fallback rates (Approximate)
        switch (fromCurrency) {
            case 'USD': return 150.0;
            case 'EUR': return 160.0;
            case 'GBP': return 190.0;
            case 'EGP': return 3.2;
            default: return 1.0;
        }
    }
};

export const applyMargin = (rate: number, percentMargin: number = 3): number => {
    // Apply a percentage margin to "Cheapen" the rate (User pays more foreign currency).
    // If rate is 150 JPY/USD. "3% margin" -> 150 * 0.97 = 145.5.
    // If rate is 3.2 JPY/EGP. "3% margin" -> 3.2 * 0.97 = 3.104.
    // This is safe even for low-value currencies.

    // Safety check for JPY (no margin needed for self)
    if (rate === 1) return 1;

    return rate * (1 - (percentMargin / 100));
};

export const convertToCurrency = (jpyAmount: number, rate: number): number => {
    if (rate === 0) return jpyAmount;
    return jpyAmount / rate;
};

export const getCurrencySymbol = (code: string): string => {
    switch (code) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'GBP': return '£';
        case 'EGP': return 'E£';
        case 'JPY': return '¥';
        default: return code;
    }
};
