import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { Link } from "react-router-dom";

const plans = [
  { name: "Starter", price: 1500, label: "Starter (₦1500 annually)", audience: "5,000 Audience" },
  { name: "Grow", price: 3000, label: "Grow (₦3000 annually)", audience: "20,000 Audience" },
  { name: "Premium", price: 7000, label: "Premium (₦7000 annually)", audience: "100,000 Audience" },
];

const countryOptions = [
  { code: "+234", label: "🇳🇬 Nigeria" },
  { code: "+233", label: "🇬🇭 Ghana" },
  { code: "+254", label: "🇰🇪 Kenya" },
  { code: "+27", label: "🇿🇦 South Africa" },
  { code: "+20", label: "🇪🇬 Egypt" },
  { code: "+212", label: "🇲🇦 Morocco" },
  { code: "+250", label: "🇷🇼 Rwanda" },
  { code: "+256", label: "🇺🇬 Uganda" },
  { code: "+255", label: "🇹🇿 Tanzania" },
  { code: "+251", label: "🇪🇹 Ethiopia" },
  { code: "other", label: "🌍 Other" },
];

const features = [
  "24/7 Auto Replies — Instant responses to customers",
  "Product & Pricing Catalog inside WhatsApp",
  "Google Sheets Integration — Real-time data sync",
  "Booking & Order Capture — No extra app needed",
];

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    countryCode: "+234",
    plan: plans[0].name,
    price: plans[0].price,
  });
  const [loading, setLoading] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
    }));
  };

  const handlePlanChange = (e) => {
    const selected = plans.find((p) => p.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      plan: selected.name,
      price: selected.price,
    }));
  };

  const handlePayment = async (paymentMethod) => {
    setLoading(true);
    try {
      const userDetails = {
        ...formData,
        paymentMethod: paymentMethod.toLowerCase(),
      };
      const res = await axios.post(`${backendUrl}/api/pay`, userDetails);
      if (res.data?.link) {
        window.location.href = res.data.link;
      } else {
        alert("Payment link not received.");
      }
    } catch (err) {
      alert("Failed to initiate payment.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Get selected plan for form heading and highlight
  const selectedPlan = plans.find((p) => p.name === formData.plan);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8 px-2">
      <div className="w-full max-w-lg mx-auto">
        <Link to="/" className="block text-center text-2xl font-bold mb-6 hover:underline">
          Back to Home
        </Link>
        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-xl px-6 py-4 text-center bg-white flex flex-col items-center transition-all ${
                selectedPlan.name === plan.name
                  ? "border-green-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <div className="font-bold text-lg sm:text-xl mb-1">{plan.name}</div>
              <div className="text-gray-700 text-sm mb-1">{plan.audience}</div>
              <div className="text-2xl font-bold mb-1">
                ₦{plan.price.toLocaleString()}
              </div>
              <div className="text-gray-500 text-sm">annually</div>
            </div>
          ))}
        </div>
        {/* Form */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Get Started with {selectedPlan.label.split(" ")[0]} Plan
        </h2>
        <form className="space-y-3" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="business"
            placeholder="Business Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.business}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="flex">
            <select
              className="border border-gray-300 rounded-l-lg px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              style={{ minWidth: 90 }}
            >
              {countryOptions.map(opt => (
                <option key={opt.code} value={opt.code}>
                  {opt.label} {opt.code !== "other" ? opt.code : ""}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="w-full px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <select
            name="plan"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.plan}
            onChange={handlePlanChange}
          >
            {plans.map((plan) => (
              <option key={plan.name} value={plan.name}>
                {plan.label}
              </option>
            ))}
          </select>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              type="button"
              className="w-full sm:w-1/2 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition"
              onClick={() => handlePayment("opay")}
              disabled={loading}
            >
              Pay with Opay
            </button>
            <button
              type="button"
              className="w-full sm:w-1/2 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
              onClick={() => handlePayment("flutterwave")}
              disabled={loading}
            >
              Pay with Flutterwave
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-4 text-gray-600 text-sm">
          <span className="mr-2">🔒</span>
          Secure Checkout — your information is safe
        </div>
        {/* Features Dropdown */}
        <div className="mt-8">
          <button
            className="w-full flex justify-between items-center px-4 py-3 border border-green-400 rounded-lg font-bold text-green-700 bg-green-50 focus:outline-none"
            onClick={() => setFeaturesOpen((open) => !open)}
            aria-expanded={featuresOpen}
          >
            <span>What You Get with K3Bot</span>
            <span>{featuresOpen ? "▲" : "▼"}</span>
          </button>
          {featuresOpen && (
            <ul className="space-y-1 text-green-700 font-medium text-base mt-3 px-2 pb-2">
              {features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;