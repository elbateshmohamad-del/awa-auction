/**
 * Reservation Database Library
 * Handles storage and retrieval of reservations using JSON file storage
 */

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const RESERVATIONS_FILE = path.join(DATA_DIR, 'reservations.json');

export interface Reservation {
    id: string;
    userId: string;
    containerId: string;
    bikeIds: string[];
    shippingAddress: {
        type: 'registered' | 'new';
        details: string; // "City, Country" or "123 St, City, Country"
    };
    status: 'pending' | 'confirmed';
    createdAt: string;
}

function ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
}

function readReservationsFile(): Reservation[] {
    ensureDataDir();
    if (fs.existsSync(RESERVATIONS_FILE)) {
        const data = fs.readFileSync(RESERVATIONS_FILE, 'utf-8');
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error('Failed to parse reservations.json:', e);
            return [];
        }
    }
    return [];
}

function writeReservationsFile(data: Reservation[]) {
    ensureDataDir();
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify(data, null, 2));
}

export function getAllReservations(): Reservation[] {
    return readReservationsFile();
}

export function createReservation(reservation: Reservation): Reservation {
    const data = readReservationsFile();
    data.push(reservation);
    writeReservationsFile(data);
    return reservation;
}
