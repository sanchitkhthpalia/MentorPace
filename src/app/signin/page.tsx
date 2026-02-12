"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SignInModal from "@/components/Auth/SignInModal";

const SignInPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-10">
      <SignInModal
        onClose={() => {
          // After successful sign-in or close, send user to home
          router.push("/");
        }}
        onSwitchToSignUp={() => {
          router.push("/signup");
        }}
      />
    </div>
  );
};

export default SignInPage;

