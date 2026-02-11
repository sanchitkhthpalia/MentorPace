"use client";

import React, { useState } from "react";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Icon } from "@iconify/react";

const SupportPage: React.FC = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        subject: "",
        category: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [ticketId, setTicketId] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.subject.trim() || !formData.category || !formData.description.trim()) {
            setError("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const docRef = await addDoc(collection(db, "supportTickets"), {
                userId: user?.uid || "",
                email: user?.email || "",
                displayName: user?.displayName || "",
                subject: formData.subject.trim(),
                category: formData.category,
                description: formData.description.trim(),
                status: "open",
                createdAt: serverTimestamp(),
            });

            setTicketId(docRef.id);
            setSubmitted(true);
        } catch (err) {
            console.error("Error submitting ticket:", err);
            setError("Failed to submit ticket. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleNewTicket = () => {
        setFormData({ subject: "", category: "", description: "" });
        setSubmitted(false);
        setTicketId("");
        setError("");
    };

    return (
        <ProtectedRoute>
            <main className="bg-background transition-colors min-h-screen pb-20">
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/[0.02] -z-1" />
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="font-bold text-accent text-xs uppercase tracking-widest">Support Center</span>
                        </div>
                        <h1 className="text-primary text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                            How can we <span className="text-accent underline decoration-accent/30 underline-offset-8">help</span> you?
                        </h1>
                        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            Need assistance with your booking or have a general query? Raise a ticket and our team will assist you promptly.
                        </p>
                    </div>
                </section>

                <section className="pb-24">
                    <div className="container mx-auto max-w-2xl px-4">
                        {submitted ? (
                            /* Success State */
                            <div className="bg-card rounded-[2.5rem] p-10 md:p-16 border border-border-default shadow-2xl shadow-primary/5 text-center animate-modal-in">
                                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Icon icon="ph:check-circle-bold" className="text-5xl text-green-500" />
                                </div>
                                <h2 className="text-3xl font-black text-primary mb-4 tracking-tight">
                                    Ticket Submitted!
                                </h2>
                                <p className="text-secondary font-medium mb-10 leading-relaxed">
                                    Your request has been received. Our support team typically responds within 24-48 hours.
                                </p>

                                <div className="bg-background/50 border border-border-default rounded-2xl p-6 mb-10">
                                    <p className="text-[10px] uppercase font-black tracking-widest text-secondary mb-2">Ticket Reference ID</p>
                                    <code className="text-xl font-black text-accent block tracking-wider">
                                        {ticketId}
                                    </code>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={handleNewTicket}
                                        className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Icon icon="ph:plus-bold" />
                                        Submit Another Ticket
                                    </button>
                                    <p className="text-sm text-secondary font-medium">
                                        Urgent? Email us at <a href="mailto:team@mentorpace.com" className="text-accent font-bold">team@mentorpace.com</a>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            /* Ticket Form */
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border-default shadow-xl shadow-primary/5">
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-bold text-primary mb-2">New Support Request</h2>
                                        <p className="text-secondary font-medium">Please provide details about your issue below.</p>
                                    </div>

                                    {error && (
                                        <div className="mb-8 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-3">
                                            <Icon icon="ph:warning-circle-bold" className="text-xl shrink-0" />
                                            {error}
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        {/* Subject */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/80 ml-1">
                                                Subject <span className="text-red-500 font-black">*</span>
                                            </label>
                                            <div className="relative group">
                                                <Icon icon="ph:text-t-bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent transition-colors" />
                                                <input
                                                    type="text"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    placeholder="e.g., Booking Issue, Payment Query"
                                                    className="w-full bg-background rounded-2xl border border-border-default group-focus-within:border-accent pl-12 pr-4 py-4 text-primary outline-none transition-all group-focus-within:ring-4 group-focus-within:ring-accent/5"
                                                />
                                            </div>
                                        </div>

                                        {/* Category */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/80 ml-1">
                                                Category <span className="text-red-500 font-black">*</span>
                                            </label>
                                            <div className="relative group">
                                                <Icon icon="ph:tag-bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent transition-colors" />
                                                <select
                                                    value={formData.category}
                                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                    className="w-full bg-background appearance-none rounded-2xl border border-border-default group-focus-within:border-accent pl-12 pr-10 py-4 text-primary outline-none transition-all group-focus-within:ring-4 group-focus-within:ring-accent/5"
                                                >
                                                    <option value="">Select a category</option>
                                                    <option value="Booking">Booking</option>
                                                    <option value="Payment">Payment</option>
                                                    <option value="General">General Inquiry</option>
                                                    <option value="Account">Account Access</option>
                                                </select>
                                                <Icon icon="ph:caret-down-bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary/80 ml-1">
                                                Description <span className="text-red-500 font-black">*</span>
                                            </label>
                                            <div className="relative group">
                                                <Icon icon="ph:chat-centered-text-bold" className="absolute left-4 top-5 text-secondary group-focus-within:text-accent transition-colors" />
                                                <textarea
                                                    value={formData.description}
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    placeholder="Detailed description of your problem..."
                                                    rows={6}
                                                    className="w-full bg-background rounded-2xl border border-border-default group-focus-within:border-accent pl-12 pr-4 py-4 text-primary outline-none transition-all group-focus-within:ring-4 group-focus-within:ring-accent/5 resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* User Info Bar */}
                                    <div className="mt-10 flex items-center gap-4 p-5 bg-primary/[0.03] rounded-2xl border border-border-default">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                            <Icon icon="ph:user-bold" className="text-2xl text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black tracking-widest text-secondary">Submitting as</p>
                                            <p className="text-sm font-bold text-primary">{user?.displayName || user?.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-accent text-white py-6 rounded-2xl font-black text-xl hover:bg-accent/90 transition-all active:scale-[0.98] shadow-2xl shadow-accent/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Ticket</span>
                                            <Icon icon="ph:paper-plane-right-bold" className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <div className="text-center space-y-2">
                                    <p className="text-secondary font-medium text-sm">
                                        We typically respond within 1 business day.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </section>
            </main>
        </ProtectedRoute>
    );
};

export default SupportPage;
