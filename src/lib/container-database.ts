/**
 * Container Database Library
 * Handles storage and retrieval of shipping containers using JSON file storage
 */

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTAINERS_FILE = path.join(DATA_DIR, 'containers.json');

export interface Container {
    id: string;
    name: string; // e.g. TH-BKK-001
    type: '20ft' | '40ft';
    status: 'open' | 'closingSoon' | 'scheduled' | 'closed';
    destination: string; // e.g. "bangkok, thailand"
    capacity: number;
    filled: number;
    etd: string;
    eta: string;
    price: string;
    features: string[];
}

function ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
}

function readContainersFile(): Container[] {
    ensureDataDir();
    if (fs.existsSync(CONTAINERS_FILE)) {
        const data = fs.readFileSync(CONTAINERS_FILE, 'utf-8');
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error('Failed to parse containers.json:', e);
            return [];
        }
    }
    return [];
}

function writeContainersFile(data: Container[]) {
    ensureDataDir();
    fs.writeFileSync(CONTAINERS_FILE, JSON.stringify(data, null, 2));
}

export function getAllContainers(): Container[] {
    return readContainersFile();
}

export function getContainerById(id: string): Container | undefined {
    const containers = readContainersFile();
    return containers.find(c => c.id === id);
}

export function createContainer(container: Container): Container {
    const containers = readContainersFile();
    containers.push(container);
    writeContainersFile(containers);
    return container;
}

export function updateContainer(id: string, updates: Partial<Container>): Container | null {
    const containers = readContainersFile();
    const index = containers.findIndex(c => c.id === id);
    if (index === -1) return null;
    containers[index] = { ...containers[index], ...updates };
    writeContainersFile(containers);
    return containers[index];
}

export function deleteContainer(id: string): boolean {
    const containers = readContainersFile();
    const index = containers.findIndex(c => c.id === id);
    if (index === -1) return false;
    containers.splice(index, 1);
    writeContainersFile(containers);
    return true;
}
