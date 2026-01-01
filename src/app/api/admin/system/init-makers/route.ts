import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Hardcoded keywords to seed
const MAKER_KEYWORDS: Record<string, string[]> = {
    'BMW': [
        'R1200', 'R1250', 'S1000', 'F800', 'F900', 'G310', 'K1600', 'R18', 'F750', 'F850', 'C400', 'C650', 'CE', 'BMW',
        'ビーエム', 'K1', 'K100', 'K75', 'R100', 'R80', 'R65'
    ],
    'Kawasaki': [
        'NINJA', 'ZX', 'KLX', 'VERSYS', 'VULCAN', 'ELIMINATOR', 'ZR', 'Z1', 'Z2', 'Z900', 'Z650', 'Z400', 'Z250', 'Z125', 'Z1000', 'ZRX', 'ZEPHYR', 'ESTRELLA', 'BALIUS', 'W400', 'W650', 'W800', 'MEGURO', 'KLE', 'KSR', 'D-TRACKER', 'SHERPA',
        'カワサキ', 'ニンジャ', 'バルカン', 'エリミネーター', 'ｾﾞﾌｧｰ', 'ﾊﾞﾘｵｽ', 'ｴｽﾄﾚﾔ', 'ﾆﾝｼﾞｬ', 'ｶﾜｻｷ', 'ﾒｸﾞﾛ', 'ｼｪﾙﾊﾟ'
    ],
    'Honda': [
        'CBR', 'CB', 'CRF', 'NC', 'VFR', 'CTX', 'GOLDWING', 'AFRICA TWIN', 'REBEL', 'GROM', 'MSX', 'PCX', 'FORZA', 'X-ADV', 'MONKEY', 'DAX', 'SUPER CUB', 'CROSS CUB', 'GB', 'HORNET', 'VT', 'MAGNA', 'SHADOW', 'CL', 'ADV', 'LEAD', 'DIO', 'GIORNO', 'DUNK', 'TACT', 'ZOOMER',
        'ホンダ', 'レブル', 'グロム', 'カブ', 'モンキー', 'ダックス', 'フォルツァ', 'ﾎﾝﾀﾞ', 'ﾚﾌﾞﾙ', 'ｸﾞﾛﾑ', 'ｶﾌﾞ', 'ﾓﾝｷｰ', 'ﾌｫﾙﾂｧ', 'ｼｬﾄﾞｳ', 'ﾏｸﾞﾅ', 'ﾎｰﾈｯﾄ'
    ],
    'Yamaha': [
        'YZF', 'MT', 'SR', 'XSR', 'TRACER', 'TMAX', 'XMAX', 'NMAX', 'FZ', 'FJR', 'BOLT', 'VMAX', 'TENERE', 'WR', 'YZ', 'SEROW', 'TW', 'DRAG STAR', 'MAJESTY', 'CYGNUS', 'AXIS', 'JOG', 'VINO', 'TRICITY',
        'ヤマハ', 'セロー', 'ドラッグスター', 'マジェスティ', 'ｼｸﾞﾅｽ', 'ﾔﾏﾊ', 'ｾﾛｰ', 'ﾄﾞﾗｯｸﾞｽﾀｰ', 'ﾏｼﾞｪ', 'ﾋﾞｰﾉ', 'ｼﾞｮｸﾞ', 'ﾄﾘｼﾃｨ'
    ],
    'Suzuki': [
        'GSX', 'V-STROM', 'VSTROM', 'HAYABUSA', 'KATANA', 'SV', 'GIXXER', 'BURGMAN', 'ADDRESS', 'DR', 'RM', 'BANDIT', 'GLADIUS', 'INTRUDER', 'IMPULSE', 'VOLTY', 'GRASSTRACKER', 'ST250', 'VANVAN', 'LET', 'SWISH',
        'スズキ', 'ハヤブサ', 'カタナ', 'アドレス', 'バーグマン', 'ｽｽﾞｷ', 'ﾊﾔﾌﾞｻ', 'ｶﾀﾅ', 'ｱﾄﾞﾚｽ', 'ﾊﾞｰｸﾞﾏﾝ', 'ﾊﾞﾝﾃﾞｨｯﾄ', 'ｲﾝﾊﾟﾙｽ'
    ],
    'Ducati': [
        'MONSTER', 'PANIGALE', 'MULTISTRADA', 'SCRAMBLER', 'DIAVEL', 'HYPERMOTARD', 'STREETFIGHTER', 'SUPERSPORT', 'XDIAVEL', 'DESERT X',
        'ドゥカティ', 'モンスター', 'パニガーレ', 'ﾄﾞｩｶﾃｨ', 'ﾓﾝｽﾀｰ'
    ],
    'Triumph': [
        'BONNEVILLE', 'STREET', 'TIGER', 'SPEED', 'ROCKET', 'TRIDENT', 'SCRAMBLER', 'THRUXTON', 'BOBBER',
        'トライアンフ', 'ボンネビル', 'ﾄﾗｲｱﾝﾌ'
    ],
    'Harley-Davidson': [
        'SPORTSTER', 'SOFTAIL', 'TOURING', 'STREET', 'IRON', 'FORTY-EIGHT', 'BREAKOUT', 'FAT BOY', 'ROAD KING', 'ELECTRA GLIDE', 'PAN AMERICA', 'LIVEWIRE',
        'HARLEY', 'ハーレー', 'スポーツスター', 'ﾊｰﾚｰ', 'ｽﾎﾟｰﾂｽﾀｰ'
    ],
    'KTM': [
        'DUKE', 'RC', 'ADVENTURE', 'EXC', 'SX', 'SUPER DUKE', 'SUPERMOTO', '390', '690', '790', '890', '1090', '1190', '1290',
        'ケーティーエム', 'デューク'
    ],
    'Aprilia': ['RSV4', 'RS', 'TUONO', 'SHIVER', 'DORSODURO', 'MANA', 'SRV', 'アプリリア', 'ｱﾌﾟﾘﾘｱ'],
    'MV Agusta': ['F3', 'F4', 'BRUTALE', 'DRAGSTER', 'TURISMO VELOCE', 'SUPERVELOCE', 'アグスタ'],
    'Indian': ['SCOUT', 'CHIEF', 'CHALLENGER', 'PURSUIT', 'SPRINGFIELD', 'CHIEFTAIN', 'ROADMASTER', 'FTR', 'インディアン'],
    'Husqvarna': ['SVARTPILEN', 'VITPILEN', 'TE', 'FE', 'TC', 'FC', 'ハスクバーナ', 'ﾊｽｸﾊﾞｰﾅ', 'ﾇｰﾀﾞ'],
    'Vespa': ['PRIMAVERA', 'SPRINT', 'GTS', 'LX', 'PX', 'ベスパ', 'ﾍﾞｽﾊﾟ'],
    'Royal Enfield': ['CLASSIC', 'METEOR', 'INT', 'CONTINENTAL', 'HIMALAYAN', 'HUNTER', 'BULLET', 'ロイヤルエンフィールド', 'ﾛｲﾔﾙｴﾝﾌｨｰﾙﾄﾞ'],
    'Peugeot': ['DJANGO', 'SPEEDFIGHT', 'CITYSTAR', 'プジョー', 'ﾌﾟｼﾞｮｰ'],
    'SYM': ['NH', 'JET', 'ORBIT', 'JOYRIDE', 'DRG', 'CROX', 'エスワイエム', 'ｼﾑ', 'SYM'],
    'KYMCO': ['RACING', 'GP', 'K-XCT', 'DOWNTOWN', 'AK', 'キムコ', 'ｷﾑｺ'],
    'GPX': ['DEMON', 'LEGEND', 'RAPTOR', 'GENTLEMAN', 'ジーピーエックス', 'GPX'],
    'Megelli': ['250R', 'メガリ', 'ﾒｶﾞﾘ'],
    'Beta': ['RR', 'ALP', 'EVO', 'ベータ', 'ﾍﾞｰﾀ'],
    'GasGas': ['EC', 'TXT', 'ガスガス', 'ｶﾞｽｶﾞｽ'],
    'Sherco': ['SE', 'SEF', 'シェルコ', 'ｼｪﾙｺ'],
    'Montesa': ['COTA', 'モンテッサ', 'ﾓﾝﾃｯｻ'],
    'Lambretta': ['V125', 'V200', 'V50', 'ランブレッタ', 'ﾗﾝﾌﾞﾚｯﾀ'],
    'Italjet': ['DRAGSTER', 'イタルジェット', 'ｲﾀﾙｼﾞｪｯﾄ'],
};

export async function POST() {
    try {
        await prisma.systemSetting.upsert({
            where: { key: 'maker_rules' },
            update: {
                value: JSON.stringify(MAKER_KEYWORDS),
                description: 'Maker Detection Rules (Auto-generated)'
            },
            create: {
                key: 'maker_rules',
                value: JSON.stringify(MAKER_KEYWORDS),
                description: 'Maker Detection Rules (Auto-generated)'
            }
        });

        return NextResponse.json({ success: true, message: 'Maker rules initialized in DB' });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
