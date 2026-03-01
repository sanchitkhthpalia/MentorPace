import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            bookingData,
            amount
        } = body;

        const secret = process.env.RAZORPAY_KEY_SECRET;
        if (!secret) {
            throw new Error("Razorpay secret not configured");
        }

        // 1. Verify Signature
        const generated_signature = crypto
            .createHmac("sha256", secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generated_signature !== razorpay_signature) {
            return NextResponse.json(
                { error: "Invalid payment signature" },
                { status: 400 }
            );
        }

        // 2. Signature is valid - Send Email Notification via Web3Forms
        const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
        if (web3formsKey) {
            try {
                await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: web3formsKey,
                        subject: `New Mentorship Booking: ${bookingData.fullName}`,
                        from_name: "MentorPace Booking",
                        name: bookingData.fullName,
                        email: bookingData.email,
                        phone: bookingData.phone,
                        domain: bookingData.domain,
                        amount: `₹${amount}`,
                        order_id: razorpay_order_id,
                        payment_id: razorpay_payment_id,
                        message: `A new session has been booked.\n\nDetails:\n- Name: ${bookingData.fullName}\n- Email: ${bookingData.email}\n- Domain: ${bookingData.domain}\n- Amount: ₹${amount}\n- Requirement: ${bookingData.description}`,
                    }),
                });
            } catch (emailErr) {
                console.error("Failed to send notification email:", emailErr);
                // We don't fail the request if email fails, as payment is verified
            }
        }

        return NextResponse.json({
            success: true,
            message: "Payment verified and notification sent"
        });
    } catch (error: any) {
        console.error("Verification error:", error);
        return NextResponse.json(
            { error: "Internal server error during verification" },
            { status: 500 }
        );
    }
}
