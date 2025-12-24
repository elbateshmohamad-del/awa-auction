import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | AWA Auction',
    default: 'AWA Auction - Premium Japanese Motorcycle Auction',
  },
  description: 'Global access to premium Japanese used motorcycles. Real-time bidding, verified inspections, and seamless logistics.',
  keywords: ['motorcycle auction', 'japanese used bikes', 'kawasaki ninja', 'yamaha r1', 'export bikes'],
  authors: [{ name: 'AWA Platform' }],
  creator: 'AWA Platform',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'AWA Auction - Premium Japanese Motorcycle Auction',
    description: 'Bid on thousands of inspected Japanese motorcycles. We handle logistics worldwide.',
    url: 'http://localhost:3000',
    siteName: 'AWA Auction',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWA Auction',
    description: 'Premium Japanese Motorcycle Auction Platform',
    creator: '@awa_auction',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}


