import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const dynamic = 'force-dynamic';

const getRazorpay = () => {
    return new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID || 'placeholder',
        key_secret: process.env.RAZORPAY_KEY_SECRET || 'placeholder',
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
