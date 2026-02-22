import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const dynamic = 'force-dynamic';

const getRazorpay = () => {
    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
        throw new Error("Missing Razorpay credentials. Set RAZORPAY_KEY_ID (or NEXT_PUBLIC_RAZORPAY_KEY_ID) and RAZORPAY_KEY_SECRET in .env.local");
    }
    return new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
    });
};

export async function POST(request: NextRequest) {
    try {
        const razorpay = getRazorpay();
        const body = await request.json();
        const { amount, currency = "INR", receipt } = body;

        if (!amount || amount < 1) {
            return NextResponse.json(
                { error: "Invalid amount" },
                { status: 400 }
            );
        }

        const order = await razorpay.orders.create({
            amount: amount * 100, // Razorpay expects amount in paise
            currency,
            receipt: receipt || `receipt_${Date.now()}`,
        });

        return NextResponse.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error: any) {
        console.error("Razorpay order creation error:", error);
        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}
