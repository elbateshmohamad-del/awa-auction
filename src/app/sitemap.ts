import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'http://localhost:3000'; // Replace with production URL

    // Static Pages
    const routes = [
        '',
        '/login',
        '/register',
        '/catalog',
        '/services',
        '/about',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
    }));

    // Dynamic Bike Pages (Mock)
    const bikes = [1, 2, 3].map((id) => ({
        url: `${baseUrl}/bike/${id}`,
        lastModified: new Date(),
        changeFrequency: 'hourly' as const, // Auctions change frequently
        priority: 0.8,
    }));

    return [...routes, ...bikes];
}
