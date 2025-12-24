import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const bidSchema = z.object({
    amount: z.number().min(1, { message: "Bid amount must be positive" }),
    auctionId: z.string(),
});

export const shippingSchema = z.object({
    fullName: z.string().min(2, "Full name required"),
    address: z.string().min(5, "Address required"),
    city: z.string().min(2, "City required"),
    country: z.string().min(2, "Country required"),
    postalCode: z.string().min(3, "Postal code required"),
});

export const paymentSchema = z.object({
    cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number"),
    expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Invalid expiry (MM/YY)"),
    cvc: z.string().regex(/^\d{3,4}$/, "Invalid CVC"),
    name: z.string().min(2, "Cardholder name required"),
});
