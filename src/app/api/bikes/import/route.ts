import { NextRequest, NextResponse } from 'next/server';
import { importBikesFromBDS } from '@/lib/bds-scraper';
import { addBikes, addImportLog, getBikeByBdsId } from '@/lib/bike-database';

export async function POST(request: NextRequest) {
    // Force rebuild: 3
    try {
        const body = await request.json();
        const maxBikes = Math.min(body.maxBikes || 10, 10); // Max 10 for safety during initial test

        // Perform actual import from BDS
        const result = await importBikesFromBDS(maxBikes);

        if (!result.success) {
            return NextResponse.json({
                success: false,
                errors: result.errors,
            }, { status: 400 });
        }

        const importedBikes = result.imported;
        const errors = result.errors;

        // Filter out already imported bikes
        const newBikes = importedBikes.filter(bike => !getBikeByBdsId(bike.bdsId));
        const skippedCount = result.skipped + (importedBikes.length - newBikes.length);

        // Save new bikes to database
        if (newBikes.length > 0) {
            addBikes(newBikes);
        }

        // Log the import
        const importLog = {
            id: `log-${Date.now()}`,
            timestamp: new Date().toISOString(),
            bikesImported: newBikes.length,
            bikesSkipped: skippedCount,
            errors,
            bikeIds: newBikes.map(b => b.id),
        };
        addImportLog(importLog);

        return NextResponse.json({
            success: true,
            imported: newBikes.length,
            skipped: skippedCount,
            bikes: newBikes,
            errors,
        });
    } catch (error) {
        console.error('Import failed:', error);
        return NextResponse.json({
            success: false,
            errors: [`Import failed: ${error}`],
        }, { status: 500 });
    }
}
