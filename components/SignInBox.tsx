"use client";
import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignInBox = () => {
  const [currentView] = useState("signin"); // 'signin' or 'signup'
  // Removed toggleView as it's not used

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      {currentView === "signin" ? (
        <>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-gray-600">
            Sign in/Sign up to your SplitTrip account
          </p>

          <div className="mt-8">
            <button
              className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              onClick={() => signIn("google", { redirectTo: "/" })}
            >
              <Image
                src="/api/placeholder/20/20"
                alt="Google Logo"
                width={20}
                height={20}
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium">Continue with Google</span>
            </button>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">
              or sign in with email
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <SignInForm />
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
          <p className="mt-2 text-gray-600">
            Join SplitTrip to start splitting expenses
          </p>

          <div className="mt-8">
            <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Image
                src="/api/placeholder/20/20"
                alt="Google Logo"
                width={20}
                height={20}
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium">Sign up with Google</span>
            </button>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">
              or sign up with email
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <SignInForm />
        </>
      )}
    </div>
  );
};

export default SignInBox;
