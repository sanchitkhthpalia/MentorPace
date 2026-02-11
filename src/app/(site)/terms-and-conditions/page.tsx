import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions - MentorPace",
    description: "Read the terms and conditions for using MentorPace mentorship services, including payment policy, session scheduling, and user conduct rules.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="dark:bg-darkmode">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-20 md:py-28">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using MentorPace services.
                    </p>
                    <p className="text-white/50 text-sm mt-4">
                        Last updated: February 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="space-y-12">
                        {/* 1. Non-Refundable Payment Policy */}
                        <div className="group">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">1</span>
                                <h2 className="text-2xl font-bold text-midnight_text dark:text-white pt-1">
                                    Non-Refundable Payment Policy
                                </h2>
                            </div>
                            <div className="ml-14 space-y-3 text-grey dark:text-white/70 leading-relaxed">
                                <p>
                                    All payments made on MentorPace are <strong className="text-midnight_text dark:text-white">non-refundable</strong> and <strong className="text-midnight_text dark:text-white">cannot be canceled</strong> once the transaction is completed.
                                </p>
                                <p>
                                    By completing a payment, you acknowledge and agree that the transaction is final. No refunds, partial refunds, or credits will be issued under any circumstances, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li>Change of mind after payment</li>
                                    <li>Inability to attend the scheduled session</li>
                                    <li>Dissatisfaction with the mentorship session</li>
                                    <li>Technical issues on the user&apos;s end</li>
                                </ul>
                                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-4 mt-4">
                                    <p className="text-amber-800 dark:text-amber-400 text-sm font-medium">
                                        ⚠️ Please ensure you have reviewed all details before making a payment. MentorPace is not liable for any losses arising from completed transactions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Session Scheduling Terms */}
                        <div className="group">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">2</span>
                                <h2 className="text-2xl font-bold text-midnight_text dark:text-white pt-1">
                                    Session Scheduling Terms
                                </h2>
                            </div>
                            <div className="ml-14 space-y-3 text-grey dark:text-white/70 leading-relaxed">
                                <p>
                                    Session scheduling and mentor allocation will be completed <strong className="text-midnight_text dark:text-white">after payment</strong> is confirmed. Our team will contact you to discuss and finalize the date and time based on mutual availability.
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li>Sessions are scheduled within 3-5 business days of payment confirmation</li>
                                    <li>MentorPace reserves the right to assign mentors based on expertise and availability</li>
                                    <li>Rescheduling requests must be made at least 24 hours in advance</li>
                                    <li>No-shows without prior communication may result in forfeiture of the session</li>
                                    <li>Session duration and format (audio/video call) will be communicated during scheduling</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Platform Liability Limitation */}
                        <div className="group">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">3</span>
                                <h2 className="text-2xl font-bold text-midnight_text dark:text-white pt-1">
                                    Platform Liability Limitation
                                </h2>
                            </div>
                            <div className="ml-14 space-y-3 text-grey dark:text-white/70 leading-relaxed">
                                <p>
                                    MentorPace acts as a <strong className="text-midnight_text dark:text-white">facilitation platform</strong> connecting mentees with mentors. We do not guarantee specific outcomes from mentorship sessions.
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li>MentorPace is not liable for any career decisions made based on mentorship advice</li>
                                    <li>Advice and guidance provided by mentors represent their personal professional opinions</li>
                                    <li>MentorPace does not guarantee job placements, salary negotiations, or admission results</li>
                                    <li>The platform is not responsible for technical issues during sessions caused by third-party services</li>
                                    <li>Users are solely responsible for implementing any advice received during sessions</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. User Conduct Rules */}
                        <div className="group">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">4</span>
                                <h2 className="text-2xl font-bold text-midnight_text dark:text-white pt-1">
                                    User Conduct Rules
                                </h2>
                            </div>
                            <div className="ml-14 space-y-3 text-grey dark:text-white/70 leading-relaxed">
                                <p>
                                    By using MentorPace, you agree to maintain <strong className="text-midnight_text dark:text-white">professional and respectful conduct</strong> at all times. Violations may result in account termination.
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li>Users must not engage in abusive, offensive, or harassing behavior toward mentors or staff</li>
                                    <li>Recording sessions without prior consent from both parties is strictly prohibited</li>
                                    <li>Sharing confidential information disclosed during sessions is not permitted</li>
                                    <li>Users must not misrepresent their qualifications or intentions</li>
                                    <li>Any attempt to bypass the platform for direct mentor engagement is a violation</li>
                                    <li>Spam, fraudulent activity, or misuse of the platform will lead to immediate bans</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Payment & Cancellation Disclaimer */}
                        <div className="group">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">5</span>
                                <h2 className="text-2xl font-bold text-midnight_text dark:text-white pt-1">
                                    Payment & Cancellation Disclaimer
                                </h2>
                            </div>
                            <div className="ml-14 space-y-3 text-grey dark:text-white/70 leading-relaxed">
                                <p>
                                    All payments are processed securely through our authorized payment gateway partners. By proceeding with payment, you agree to the following:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li>Payments are processed in Indian Rupees (INR)</li>
                                    <li>Transaction processing fees, if any, are borne by the user</li>
                                    <li>Payment confirmation is sent to the registered email address</li>
                                    <li>In case of payment failure, the amount will be refunded to the original payment method within 5-7 business days</li>
                                    <li>MentorPace reserves the right to modify pricing without prior notice</li>
                                </ul>
                                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-xl p-4 mt-4">
                                    <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                                        🚫 Cancellations are not permitted once payment is made. Please review your booking details carefully before proceeding.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Contact Information */}
                        <div className="group">
                            <div className="flex items-start gap-4 mb-4">
                                <span className="bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">6</span>
                                <h2 className="text-2xl font-bold text-midnight_text dark:text-white pt-1">
                                    Contact & Grievances
                                </h2>
                            </div>
                            <div className="ml-14 space-y-3 text-grey dark:text-white/70 leading-relaxed">
                                <p>
                                    For any questions, concerns, or disputes regarding these terms, please contact us at:
                                </p>
                                <div className="bg-section dark:bg-white/5 rounded-xl p-6 mt-2">
                                    <p className="font-semibold text-midnight_text dark:text-white mb-1">MentorPace Support Team</p>
                                    <p>📧 Email: <a href="mailto:team@mentorpace.com" className="text-accent hover:underline">team@mentorpace.com</a></p>
                                    <p className="text-sm mt-3 text-grey dark:text-white/50">
                                        We aim to respond to all queries within 24–48 business hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
