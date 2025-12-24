import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CurrencyCode } from './currency';

// Define Interface for Order Data
interface OrderData {
    id: string;
    createdAt: string;
    buyer: {
        name: string;
        email: string;
        country: string;
        id: string;
        address?: string; // Optional
    };
    bike: {
        name: string;
        vin: string;
        lotNumber: string;
    };
    payment: {
        subtotal: number;
        auctionFee: number;
        shippingFee: number;
        total: number;
    };
}

export const generateInvoicePDF = (order: OrderData, exchangeRate: number, currency: CurrencyCode): Blob => {
    // 1. Initialize jsPDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // --- Header ---
    doc.setFontSize(22);
    doc.setTextColor(15, 76, 129); // Brand Blue #0F4C81
    doc.text('INVOICE', pageWidth - 20, 20, { align: 'right' });

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('AWA Auction System', 20, 20);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('123 Export Street, Yokohama, Japan', 20, 26);
    doc.text('Email: support@awa-auction.com', 20, 31);
    doc.text('Phone: +81-3-1234-5678', 20, 36);

    // --- Invoice Info ---
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 45, pageWidth - 20, 45);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Invoice Number: INV-${order.id.split('-')[1] || order.id}`, pageWidth - 20, 55, { align: 'right' });
    doc.text(`Date: ${new Date().toLocaleDateString('en-US')}`, pageWidth - 20, 60, { align: 'right' });
    doc.text(`Order Ref: ${order.id}`, pageWidth - 20, 65, { align: 'right' });

    // Exchange Rate Display
    const rateText = currency === 'JPY'
        ? 'Base Currency: JPY'
        : `Exchange Rate: 1 ${currency} = ${exchangeRate.toFixed(2)} JPY`;
    doc.text(rateText, pageWidth - 20, 70, { align: 'right' });

    // --- Bill To ---
    doc.text('Bill To:', 20, 55);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(order.buyer.name, 20, 62);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`ID: ${order.buyer.id}`, 20, 67);
    doc.text(order.buyer.email, 20, 72);
    doc.text(order.buyer.country, 20, 77);

    // Format Helper
    const getSymbol = (c: CurrencyCode) => {
        switch (c) {
            case 'USD': return '$';
            case 'EUR': return '€';
            case 'GBP': return '£';
            case 'EGP': return 'E£';
            case 'JPY': return '¥';
            default: return c + ' ';
        }
    };

    const symbol = getSymbol(currency);

    const fmtPrice = (jpy: number) => {
        const val = jpy / exchangeRate;
        const digits = currency === 'JPY' ? 0 : 2;
        return `${symbol}${val.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
    };

    // --- Line Items Table ---
    const tableBody = [
        ['Vehicle Price', order.bike.name + `\nVIN: ${order.bike.vin} (Lot: ${order.bike.lotNumber})`, fmtPrice(order.payment.subtotal)],
        ['Auction Fee', 'Service fee for auction participation', fmtPrice(order.payment.auctionFee)],
        ['Shipping Fee', 'International Shipping (RoRo)', fmtPrice(order.payment.shippingFee)],
    ];

    // 2. Use Functional AutoTable
    autoTable(doc, {
        startY: 90,
        head: [['Item', 'Description', 'Amount']],
        body: tableBody,
        theme: 'striped',
        headStyles: { fillColor: [15, 76, 129], textColor: 255, fontStyle: 'bold' },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 50 },
            2: { halign: 'right', cellWidth: 40 },
        },
        styles: { fontSize: 10, cellPadding: 5 },
    });

    // --- Totals ---
    // @ts-ignore - lastAutoTable property exists on doc after plugin usage
    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 150;

    doc.setFontSize(10);
    doc.text('Subtotal:', pageWidth - 90, finalY);
    doc.text(fmtPrice(order.payment.total), pageWidth - 20, finalY, { align: 'right' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 76, 129);
    doc.text('Total Due:', pageWidth - 90, finalY + 10);
    doc.text(fmtPrice(order.payment.total), pageWidth - 20, finalY + 10, { align: 'right' });

    // --- Footer ---
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for your business. Please complete payment within 3 business days.', pageWidth / 2, 280, { align: 'center' });

    return doc.output('blob');
};
