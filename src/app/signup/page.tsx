"use client";

import React from "react";
import SignUpModal from "@/components/Auth/SignUpModal";

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-10">
      {/* Render the same visual as the modal, but as a normal page */}
      <SignUpModal
        onClose={() => {
          // Dedicated page: no overlay to close back to, so leave as no-op.
        }}
        onSwitchToSignIn={() => {
          window.location.href = "/signin";
        }}
      />
    </div>
  );
};

export default SignUpPage;

