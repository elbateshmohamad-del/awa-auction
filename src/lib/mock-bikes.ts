/**
 * Mock Bikes Generator
 * Generates mock bike data for testing without BDS connection
 */

import { Bike, convertGradeToAWA } from './bike-database';
import { detectMaker } from './maker-detection';

const MOCK_BIKES_DATA = [
    { name: 'NINJA250-2', vin: 'EX250Y-A36161', startPrice: 280000, overallGrade: 7, color: '黒／緑', displacement: '250cc', mileage: '1,644K' },
    { name: 'YZF-R1M', vin: 'RN65-009876', startPrice: 2100000, overallGrade: 8, color: 'シルバー', displacement: '998cc', mileage: '5,230K' },
    { name: 'CBR1000RR-R', vin: 'SC82-100200', startPrice: 2450000, overallGrade: 6, color: '赤', displacement: '1000cc', mileage: '3,100K' },
    { name: 'GSX-R1000R', vin: 'DM11G-101101', startPrice: 1580000, overallGrade: 5, color: '青／白', displacement: '1000cc', mileage: '8,900K' },
    { name: 'Panigale V4S', vin: 'ZDM1100-334455', startPrice: 3200000, overallGrade: 8, color: '赤', displacement: '1103cc', mileage: '2,100K' },
];

/**
 * Generate mock bikes for testing when BDS is not accessible
 */
export async function generateMockBikes(count: number = 5): Promise<Bike[]> {
    return Promise.all(MOCK_BIKES_DATA.slice(0, count).map(async (mock, index) => {
        const makerResult = await detectMaker(mock.name);
        const timestamp = Date.now();
        return {
            id: `awa-mock-${timestamp}-${index}`,
            bdsId: `BDS-${1000 + index}`,
            lane: String.fromCharCode(65 + index),
            auctionNumber: String(index + 1).padStart(4, '0'),
            auctionDate: new Date().toISOString().split('T')[0],
            name: mock.name,
            maker: makerResult.maker,
            makerConfirmed: makerResult.confidence === 'high',
            region: '関東',
            inspectionStatus: '検査済',
            listingType: '定例',
            vin: mock.vin,
            engineNumber: mock.vin.replace('Y-', 'PL'),
            mileage: mock.mileage,
            documentMileage: '',
            pastMileage: '',
            color: mock.color,
            displacement: mock.displacement,
            firstRegistration: '',
            inspection: '',
            hasParts: 'なし',
            registrationNumber: '',
            startPrice: mock.startPrice,
            result: '',
            overallGrade: mock.overallGrade,
            engineGrade: Math.max(1, mock.overallGrade - 1),
            frontGrade: mock.overallGrade,
            exteriorGrade: Math.max(1, mock.overallGrade - 2),
            rearGrade: mock.overallGrade,
            electricGrade: Math.min(8, mock.overallGrade + 1),
            frameGrade: mock.overallGrade,
            awaGrade: convertGradeToAWA(mock.overallGrade),
            inspectionDetails: JSON.stringify({
                engine: {},
                frontSuspension: {},
                exterior: {},
                rearSuspension: {},
                electrical: {},
                frame: {},
            }),
            awaReport: 'AWAシステムにより取り込み',
            sellerDeclaration: '',
            images: JSON.stringify([
                'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop', // Main
                'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop', // Front
                'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=2070&auto=format&fit=crop', // Side
                'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2070&auto=format&fit=crop', // Rear
            ]),
            videoUrls: JSON.stringify([
                'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4', // Left Engine Sound (Mock)
                'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4'  // Right Engine Sound (Mock)
            ]),
            importedAt: new Date(),
            status: 'active',
            currentPrice: 0,
            remarks: JSON.stringify([]),
            updatedAt: new Date(),
        } as unknown as Bike;
    }));
}
