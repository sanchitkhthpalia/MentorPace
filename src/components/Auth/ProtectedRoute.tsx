"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import SigninModal from "@/components/Auth/SignInModal";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();
    const [showSignIn, setShowSignIn] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            setShowSignIn(true);
        }
    }, [user, loading]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen dark:bg-darkmode">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <>
                <div className="flex items-center justify-center min-h-screen dark:bg-darkmode">
                    <div className="text-center max-w-md mx-auto px-6">
                        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-midnight_text dark:text-white mb-3">
                            Login Required
                        </h2>
                        <p className="text-grey dark:text-white/60 mb-6">
                            You need to sign in to access this page. Please log in to continue.
                        </p>
                        <button
                            onClick={() => setShowSignIn(true)}
                            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
                {showSignIn && (
                    <SigninModal onClose={() => setShowSignIn(false)} />
                )}
            </>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
