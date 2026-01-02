import { getAllBikes } from '../src/lib/bike-database';

async function main() {
    const bikes = await getAllBikes();
    if (bikes.length === 0) {
        console.log('No bikes found.');
        return;
    }
    const firstBike = bikes[0];
    console.log('Inspection of first bike from DB:');
    console.log(`ID: ${firstBike.id}`);
    console.log(`Color (Original): ${firstBike.color}`);
    console.log(`Color (EN): ${firstBike.colorEn}`);
    console.log(`Color (AR): ${firstBike.colorAr}`);

    if (firstBike.colorEn) {
        console.log('SUCCESS: colorEn field is accessible.');
    } else {
        console.log('FAILURE: colorEn field is missing or empty.');
    }
}

main().catch(console.error);
