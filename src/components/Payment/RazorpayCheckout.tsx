"use client";

import React, { useState, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface BookingData {
    fullName: string;
    email: string;
    phone: string;
    domain: string;
    description: string;
}

interface RazorpayCheckoutProps {
    amount: number;
    bookingData: BookingData;
    onBack: () => void;
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

const RazorpayCheckout: React.FC<RazorpayCheckoutProps> = ({ amount, bookingData, onBack }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [error, setError] = useState("");

    const loadRazorpayScript = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            // Load Razorpay script
            const loaded = await loadRazorpayScript();
            if (!loaded) {
                throw new Error("Failed to load Razorpay SDK");
            }

            // Create order via API
            const response = await fetch("/api/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount,
                    receipt: `booking_${Date.now()}`,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create order");
            }

            const data = await response.json();

            // Open Razorpay checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: data.currency,
                name: "MentorPace",
                description: `Mentorship Session - ${bookingData.domain}`,
                order_id: data.orderId,
                prefill: {
                    name: bookingData.fullName,
                    email: bookingData.email,
                    contact: bookingData.phone,
                },
                theme: {
                    color: "#22C55E",
                },
                handler: async (response: any) => {
                    try {
                        // Save booking to Firestore
                        await addDoc(collection(db, "bookings"), {
                            userId: user?.uid || "",
                            fullName: bookingData.fullName,
                            email: bookingData.email,
                            phone: bookingData.phone,
                            domain: bookingData.domain,
                            description: bookingData.description,
                            amount,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            status: "paid",
                            createdAt: serverTimestamp(),
                        });

                        setTransactionId(response.razorpay_payment_id);
                        setPaymentSuccess(true);
                    } catch (err) {
                        console.error("Error saving booking:", err);
                        setTransactionId(response.razorpay_payment_id);
                        setPaymentSuccess(true);
                        // Still show success even if Firestore save fails
                        // The payment was collected - we can reconcile later
                    }
                },
                modal: {
                    ondismiss: () => {
                        setLoading(false);
                    },
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", (response: any) => {
                setError(`Payment failed: ${response.error.description}`);
                setLoading(false);
            });
            rzp.open();
        } catch (err: any) {
            setError(err.message || "Payment initialization failed");
            setLoading(false);
        }
    }, [amount, bookingData, user]);

    if (paymentSuccess) {
        return (
            <div className="bg-white dark:bg-darklight rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-dark_border text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-midnight_text dark:text-white mb-3">
                    Payment Successful! 🎉
                </h2>
                <p className="text-grey dark:text-white/60 mb-6">
                    Your mentorship session has been booked. Our team will contact you soon to schedule the session.
                </p>

                <div className="bg-section dark:bg-white/5 rounded-xl p-5 mb-6 text-left space-y-3">
                    <div className="flex justify-between">
                        <span className="text-sm text-grey dark:text-white/50">Transaction ID</span>
                        <span className="text-sm font-mono font-bold text-midnight_text dark:text-white">{transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-grey dark:text-white/50">Amount Paid</span>
                        <span className="text-sm font-bold text-accent">₹{amount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-grey dark:text-white/50">Domain</span>
                        <span className="text-sm text-midnight_text dark:text-white">{bookingData.domain}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-grey dark:text-white/50">Name</span>
                        <span className="text-sm text-midnight_text dark:text-white">{bookingData.fullName}</span>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                        📧 Please share your booking details and transaction ID at{" "}
                        <a href="mailto:team@mentorpace.com" className="font-bold underline">team@mentorpace.com</a>
                    </p>
                </div>

                <a
                    href="/"
                    className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300"
                >
                    Return to Home
                </a>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-darklight rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-dark_border">
                <h2 className="text-xl font-bold text-midnight_text dark:text-white mb-6">
                    Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-dark_border">
                        <span className="text-grey dark:text-white/60">Session Type</span>
                        <span className="text-midnight_text dark:text-white font-medium">1:1 Mentorship</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-dark_border">
                        <span className="text-grey dark:text-white/60">Domain</span>
                        <span className="text-midnight_text dark:text-white font-medium">{bookingData.domain}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-dark_border">
                        <span className="text-grey dark:text-white/60">Mentee</span>
                        <span className="text-midnight_text dark:text-white font-medium">{bookingData.fullName}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                        <span className="text-lg font-bold text-midnight_text dark:text-white">Total Amount</span>
                        <span className="text-2xl font-bold text-accent">₹{amount}</span>
                    </div>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="flex gap-4">
                    <button
                        onClick={onBack}
                        className="flex-1 border border-gray-200 dark:border-dark_border text-midnight_text dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                    >
                        ← Back
                    </button>
                    <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="flex-[2] bg-accent text-white py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                🔒 Pay ₹{amount}
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-grey dark:text-white/40">
                <span>🔒 Secured by Razorpay</span>
                <span>•</span>
                <span>256-bit SSL Encryption</span>
            </div>
        </div>
    );
};

export default RazorpayCheckout;
