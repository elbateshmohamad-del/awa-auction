/**
 * Mapping of Japanese katakana maker names to English brand names.
 * Used to ensure brand names are always displayed in English across all locales.
 */
export const MAKER_TO_ENGLISH: Record<string, string> = {
    // Japanese Big Four
    'ホンダ': 'Honda',
    'ヤマハ': 'Yamaha',
    'スズキ': 'Suzuki',
    'カワサキ': 'Kawasaki',

    // European Brands
    'ドゥカティ': 'Ducati',
    'ドカティ': 'Ducati',
    'ビーエムダブリュー': 'BMW',
    'ビーエムダブリュ': 'BMW',
    'トライアンフ': 'Triumph',
    'アプリリア': 'Aprilia',
    'MVアグスタ': 'MV Agusta',
    'ピアジオ': 'Piaggio',
    'ベスパ': 'Vespa',
    'モトグッツィ': 'Moto Guzzi',
    'KTM': 'KTM',
    'ケーティーエム': 'KTM',
    'ハスクバーナ': 'Husqvarna',

    // American Brands
    'ハーレーダビッドソン': 'Harley-Davidson',
    'ハーレー': 'Harley-Davidson',
    'インディアン': 'Indian',
    'ビューエル': 'Buell',

    // Other Asian Brands
    'キムコ': 'KYMCO',
    'SYM': 'SYM',
    'シム': 'SYM',
    'ロイヤルエンフィールド': 'Royal Enfield',
    'タイホンダ': 'Thai Honda',

    // Chinese Brands
    'ベネリ': 'Benelli',

    // Already English - passthrough
    'Honda': 'Honda',
    'Yamaha': 'Yamaha',
    'Suzuki': 'Suzuki',
    'Kawasaki': 'Kawasaki',
    'Ducati': 'Ducati',
    'BMW': 'BMW',
    'Triumph': 'Triumph',
    'Aprilia': 'Aprilia',
    'Harley-Davidson': 'Harley-Davidson',
};

/**
 * Normalizes a maker name to its English equivalent.
 * If no mapping exists, returns the original text.
 */
export function normalizeMakerToEnglish(makerName: string): string {
    if (!makerName) return '';

    const trimmed = makerName.trim();

    // Direct lookup
    if (MAKER_TO_ENGLISH[trimmed]) {
        return MAKER_TO_ENGLISH[trimmed];
    }

    // Check if already English (ASCII only)
    if (/^[A-Za-z0-9\s\-]+$/.test(trimmed)) {
        return trimmed;
    }

    // Fallback: return original
    return trimmed;
}
