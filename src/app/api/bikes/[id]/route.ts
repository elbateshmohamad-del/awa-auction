import { NextResponse } from 'next/server';
import { getBikeById, updateBike, deleteBike, Bike } from '@/lib/bike-database';
import { translateBrandName, translateModelName, translateGeneral, convertJapaneseEraToWestern } from '@/lib/normalizer';

// Helper to translate inspection details object using Promise.all for parallelism
async function translateInspectionDetails(
    details: Record<string, Record<string, string>> | null,
    targetLang: 'ja' | 'en' | 'ar'
): Promise<Record<string, Record<string, string>>> {
    if (!details) return {};

    const result: Record<string, Record<string, string>> = {};
    const promises: Promise<void>[] = [];

    for (const [category, items] of Object.entries(details)) {
        result[category] = {};
        for (const [key, value] of Object.entries(items || {})) {
            if (value && value.trim()) {
                promises.push((async () => {
                    // Handle keys like "3. Blinker", "①キー" (Circled), "１．カギ" (Full-width)
                    // Simplified Regex: Capture leading digits/circled/full-width, then everything else.
                    console.log(`[DEBUG] Processing Inspection Key: ${key}`);
                    const keyMatch = key.match(/^\s*([0-9０-９①-⑳]+)(.*)$/);
                    let keyPrefix = '';
                    let keyText = key;

                    if (keyMatch) {
                        const rawNum = keyMatch[1];
                        // Normalize number
                        let normalizedNumString = rawNum;

                        // Check for Circled Numbers (①-⑳) -> 1-20
                        const firstChar = rawNum.codePointAt(0) || 0;
                        if (firstChar >= 0x2460 && firstChar <= 0x2473) {
                            normalizedNumString = (firstChar - 0x2460 + 1).toString();
                        } else {
                            // Handle Full-width digits -> Half-width
                            normalizedNumString = rawNum.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
                        }

                        // Clean the text part (remove leading . - ) space)
                        const rawText = keyMatch[2] || '';
                        const cleanText = rawText.replace(/^[.\-\)\s]+/, '');

                        // Reconstruct standard prefix "N. "
                        keyPrefix = `${normalizedNumString}. `;
                        keyText = cleanText;
                    }

                    // Parallel translation of key (text part only) and value
                    const [translatedKeyText, translatedValue] = await Promise.all([
                        translateGeneral(keyText, targetLang),
                        translateGeneral(value, targetLang)
                    ]);

                    const finalKey = keyPrefix + translatedKeyText;
                    result[category][finalKey] = translatedValue;
                })());
            }
        }
    }

    await Promise.all(promises);
    return result;
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') as 'ja' | 'en' | 'ar' | null;

    const bike = await getBikeById(resolvedParams.id);

    if (!bike) {
        return NextResponse.json(
            { success: false, error: 'Bike not found' },
            { status: 404 }
        );
    }

    // Apply translation based on locale
    if (locale) {
        const translatedBike = { ...bike };

        // Define translation promises
        const translationPromises = [
            // Brand names: Always English
            translateBrandName(bike.maker || '').then(res => { translatedBike.maker = res; }),

            // Model names: Always English (or translate JP to EN)
            translateModelName(bike.name).then(res => { translatedBike.name = res; }),

            // General fields: Translate to target locale
            translateGeneral(bike.color || '', locale).then(res => { translatedBike.color = res; }),
            translateGeneral(bike.region || '', locale).then(res => { translatedBike.region = res; }),
            translateGeneral(bike.listingType || '', locale).then(res => { translatedBike.listingType = res; }),

            // Optional fields
            bike.awaReport ? translateGeneral(bike.awaReport, locale).then(res => { translatedBike.awaReport = res; }) : Promise.resolve(),
            bike.sellerDeclaration ? translateGeneral(bike.sellerDeclaration, locale).then(res => { translatedBike.sellerDeclaration = res; }) : Promise.resolve(),

            // Inspection details (parallelized internally)
            bike.inspectionDetails ? translateInspectionDetails(bike.inspectionDetails as any, locale).then(res => { translatedBike.inspectionDetails = res; }) : Promise.resolve()
        ];

        // Execute all translations in parallel
        await Promise.all(translationPromises);

        // Convert Japanese era year to Western year for non-Japanese locales (Sync operation)
        if (bike.firstRegistration) {
            translatedBike.firstRegistration = convertJapaneseEraToWestern(bike.firstRegistration, locale);
        }
        if (bike.inspection) {
            translatedBike.inspection = convertJapaneseEraToWestern(bike.inspection, locale);
        }

        return NextResponse.json({
            success: true,
            data: translatedBike,
        });
    }

    return NextResponse.json({
        success: true,
        data: bike,
    });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    try {
        const body = await request.json();
        // Remove id and bdsId from body to prevent changing them if passed
        const { id, bdsId, ...updates } = body;

        const updatedBike = updateBike(resolvedParams.id, updates as Partial<Bike>);

        if (!updatedBike) {
            return NextResponse.json(
                { success: false, error: 'Bike not found or update failed' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: updatedBike,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Invalid request body' },
            { status: 400 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const success = deleteBike(resolvedParams.id);

    if (!success) {
        return NextResponse.json(
            { success: false, error: 'Bike not found or delete failed' },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        message: 'Bike deleted successfully',
    });
}

