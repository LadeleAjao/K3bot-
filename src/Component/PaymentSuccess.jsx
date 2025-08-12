import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
    <div className="max-w-md w-full text-center">
      <div className="mb-6">
        <svg
          className="mx-auto mb-4"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="32" fill="#22c55e" />
          <path
            d="M20 34l8 8 16-16"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for your payment. Your subscription is now active.
        </p>
      </div>
      <Link
        to="/"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
      >
        Go to Home
      </Link>
      <div className="mt-4">
        <Link
          to="/dashboard"
          className="text-blue-600 hover:underline font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  </div>
);

export default PaymentSuccess;
