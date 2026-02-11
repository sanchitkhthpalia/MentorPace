"use client";

import React, { useState } from "react";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import RazorpayCheckout from "@/components/Payment/RazorpayCheckout";
import Link from "next/link";
import { Icon } from "@iconify/react";

const MENTORSHIP_AMOUNT = 999; // Amount in INR

const BookingPage: React.FC = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        domain: "",
        description: "",
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Auto-fill email when user is available
    React.useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                email: user.email || "",
                fullName: user.displayName || prev.fullName,
            }));
        }
    }, [user]);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.domain.trim()) newErrors.domain = "Please select a domain";
        if (!formData.description.trim()) newErrors.description = "Please describe your requirement";
        if (!agreedToTerms) newErrors.terms = "You must agree to the terms & conditions";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setShowPayment(true);
        }
    };

    const domains = [
        "Software Engineering",
        "MBA",
        "App Development",
        "Product Management",
        "Creative Design / UX-UI",
        "Human Resources",
        "Data Science / AI-ML",
        "Other",
    ];

    return (
        <ProtectedRoute>
            <main className="bg-background transition-colors min-h-screen pb-20">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/[0.02] -z-1" />
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="font-bold text-accent text-xs uppercase tracking-widest">Reserve Your Spot</span>
                        </div>
                        <h1 className="text-primary text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                            Book a Mentorship <span className="text-accent underline decoration-accent/30 underline-offset-8">Session</span>
                        </h1>
                        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            Connect with an experienced mentor for personalized career guidance tailored to your goals.
                        </p>
                    </div>
                </section>

                <section className="pb-24">
                    <div className="container mx-auto max-w-3xl px-4">
                        {/* Important Notice */}
                        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/50 rounded-3xl p-6 md:p-8 mb-12 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">
                                    <Icon icon="ph:warning-circle-bold" className="text-2xl text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-200">
                                    Please Read Carefully
                                </h3>
                            </div>
                            <div className="space-y-4 text-orange-800/80 dark:text-orange-300/80 text-base leading-relaxed font-medium">
                                <p>
                                    Session scheduling & mentor allocation happen post-payment. Our team will contact you via email to coordinate a time that works for everyone.
                                </p>
                                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
                                    <p className="font-bold text-red-600 dark:text-red-400 mb-1">
                                        Non-Refundable Policy
                                    </p>
                                    <p className="text-sm">Payments are final and cannot be cancelled or refunded once completed.</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm pt-2">
                                    <span>Need help? Contact us:</span>
                                    <a href="mailto:team@mentorpace.com" className="font-bold text-accent hover:underline decoration-accent/30">team@mentorpace.com</a>
                                </div>
                            </div>
                        </div>

                        {!showPayment ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border-default shadow-xl shadow-primary/5 transition-all">
                                    <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                        <Icon icon="ph:user-circle-bold" className="text-accent text-3xl" />
                                        Your Details
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/80 ml-1">
                                                Full Name <span className="text-red-500 font-black">*</span>
                                            </label>
                                            <div className="relative group">
                                                <Icon icon="ph:user-bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent transition-colors" />
                                                <input
                                                    type="text"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    placeholder="John Doe"
                                                    className={`w-full bg-background rounded-2xl border ${errors.fullName ? 'border-red-400 ring-4 ring-red-400/5' : 'border-border-default group-focus-within:border-accent'} pl-12 pr-4 py-4 text-primary outline-none transition-all group-focus-within:ring-4 group-focus-within:ring-accent/5`}
                                                />
                                            </div>
                                            {errors.fullName && <p className="text-red-500 text-xs font-bold ml-1">{errors.fullName}</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/80 ml-1">
                                                Email Address
                                            </label>
                                            <div className="relative group">
                                                <Icon icon="ph:envelope-simple-bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-50" />
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    readOnly
                                                    className="w-full bg-background/50 rounded-2xl border border-border-default pl-12 pr-4 py-4 text-primary font-medium opacity-60 cursor-not-allowed"
                                                />
                                            </div>
                                            <p className="text-[10px] uppercase font-black tracking-widest text-secondary ml-1">Verified Account Email</p>
                                        </div>

                                        {/* Domain */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-bold text-primary/80 ml-1">
                                                Mentorship Domain <span className="text-red-500 font-black">*</span>
                                            </label>
                                            <div className="relative group">
                                                <Icon icon="ph:briefcase-bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent transition-colors" />
                                                <select
                                                    value={formData.domain}
                                                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                                    className={`w-full bg-background appearance-none rounded-2xl border ${errors.domain ? 'border-red-400 ring-4 ring-red-400/5' : 'border-border-default group-focus-within:border-accent'} pl-12 pr-10 py-4 text-primary outline-none transition-all group-focus-within:ring-4 group-focus-within:ring-accent/5`}
                                                >
                                                    <option value="">Select your area of interest</option>
                                                    {domains.map((d) => (
                                                        <option key={d} value={d}>{d}</option>
                                                    ))}
                                                </select>
                                                <Icon icon="ph:caret-down-bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
                                            </div>
                                            {errors.domain && <p className="text-red-500 text-xs font-bold ml-1">{errors.domain}</p>}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-8 space-y-2">
                                        <label className="text-sm font-bold text-primary/80 ml-1">
                                            Describe Your Requirement <span className="text-red-500 font-black">*</span>
                                        </label>
                                        <div className="relative group">
                                            <Icon icon="ph:chat-centered-text-bold" className="absolute left-4 top-5 text-secondary group-focus-within:text-accent transition-colors" />
                                            <textarea
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                placeholder="Tell us about your career goals, challenges, and what kind of guidance you're looking for..."
                                                rows={5}
                                                className={`w-full bg-background rounded-2xl border ${errors.description ? 'border-red-400 ring-4 ring-red-400/5' : 'border-border-default group-focus-within:border-accent'} pl-12 pr-4 py-4 text-primary outline-none transition-all group-focus-within:ring-4 group-focus-within:ring-accent/5 resize-none`}
                                            />
                                        </div>
                                        {errors.description && <p className="text-red-500 text-xs font-bold ml-1">{errors.description}</p>}
                                    </div>
                                </div>

                                {/* Pricing Card */}
                                <div className="bg-accent rounded-[2rem] p-8 md:p-10 text-white shadow-2xl shadow-accent/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
                                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="text-center md:text-left">
                                            <h3 className="text-2xl font-black mb-2">1:1 Mentorship Session</h3>
                                            <p className="text-white/80 font-medium">30–45 min intensive session with a verified expert mentor</p>
                                        </div>
                                        <div className="text-center md:text-right shrink-0">
                                            <div className="text-5xl font-black mb-1">₹{MENTORSHIP_AMOUNT}</div>
                                            <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Inclusive of all taxes</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-card transition-colors cursor-pointer group">
                                        <div className="mt-1 relative flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                checked={agreedToTerms}
                                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                className="peer appearance-none w-6 h-6 border-2 border-border-default rounded-lg checked:bg-accent checked:border-accent transition-all cursor-pointer"
                                            />
                                            <Icon icon="ph:check-bold" className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none text-sm" />
                                        </div>
                                        <label htmlFor="terms" className="text-sm text-secondary font-medium leading-relaxed cursor-pointer select-none">
                                            I agree to the{" "}
                                            <Link href="/terms-and-conditions" className="text-accent font-bold hover:underline" target="_blank">
                                                Terms & Conditions
                                            </Link>
                                            , and I understand the <span className="text-red-500 font-bold">non-refundable payment policy</span>.
                                        </label>
                                    </div>
                                    {errors.terms && <p className="text-red-500 text-xs font-bold ml-11">{errors.terms}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-accent text-white py-6 rounded-2xl font-black text-xl hover:bg-accent/90 transition-all active:scale-[0.98] shadow-2xl shadow-accent/30 flex items-center justify-center gap-3"
                                >
                                    Confirm & Pay ₹{MENTORSHIP_AMOUNT}
                                    <Icon icon="ph:arrow-right-bold" />
                                </button>
                            </form>
                        ) : (
                            <div className="animate-modal-in">
                                <RazorpayCheckout
                                    amount={MENTORSHIP_AMOUNT}
                                    bookingData={formData}
                                    onBack={() => setShowPayment(false)}
                                />
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </ProtectedRoute>
    );
};

export default BookingPage;
