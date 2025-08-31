import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { Link, useLocation } from "react-router-dom";
import { PricingPlan } from "../assets/assets";

// --- K3BOT BRAND COLORS & STYLES ---
const BRAND = {
  primary: "#00065A", // Navy
  secondary: "#00BDFF", // Cyan
  accent: "#A6EC49", // Green
  light: "#F9FAFB", // Background
  font: "'Avenir', 'Segoe UI', Arial, sans-serif",
  borderRadius: "0.75rem",
  shadow: "0 6px 20px rgba(0, 6, 90, 0.10)",
};

const planKeys = [
  { key: "starter", label: "Starter", audience: "5,000 Audience" },
  { key: "starterPlus", label: "Grow", audience: "20,000 Audience" },
  { key: "premium", label: "Premium", audience: "100,000 Audience" },
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

const billingCycles = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
];

const Signup = () => {
  const location = useLocation();
  const initialPlanKey = location.state?.planKey || "";
  const initialBillingCycle = location.state?.billingCycle || "";

  const [selectedPlanKey, setSelectedPlanKey] = useState(initialPlanKey);
  const [selectedBillingCycle, setSelectedBillingCycle] =
    useState(initialBillingCycle);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    countryCode: "+234",
    plan: initialPlanKey,
    billingCycle: initialBillingCycle,
  });
  const [loading, setLoading] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      plan: selectedPlanKey,
      billingCycle: selectedBillingCycle,
    }));
  }, [selectedPlanKey, selectedBillingCycle]);

  const selectedPlanMeta = planKeys.find((p) => p.key === selectedPlanKey);
  const selectedPlan =
    selectedPlanKey && selectedBillingCycle
      ? PricingPlan[selectedBillingCycle]?.[selectedPlanKey]
      : null;

  const handlePlanBoxClick = (key) => {
    setSelectedPlanKey(key);
  };

  const handlePlanChange = (e) => {
    setSelectedPlanKey(e.target.value);
  };

  const handleBillingCycleChange = (e) => {
    setSelectedBillingCycle(e.target.value);
  };

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

  // Monnify Payment
  const handlePayment = async () => {
    if (!selectedPlanKey || !selectedBillingCycle) {
      alert("Please select a plan and billing cycle first.");
      return;
    }
    setLoading(true);
    try {
      const userDetails = {
        name: formData.name,
        business: formData.business,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
        plan: selectedPlanKey,
        billingCycle: selectedBillingCycle,
        amount: selectedPlan.price,
      };
      localStorage.setItem("signupData", JSON.stringify(userDetails));
      const res = await axios.post(
        `${backendUrl}/api/payment/monnify`,
        userDetails
      );
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

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-4"
      style={{
        background: `linear-gradient(120deg, ${BRAND.light} 60%, #e6f7ff 100%)`,
        fontFamily: BRAND.font,
      }}
    >
      <div
        className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10"
        style={{
          borderRadius: BRAND.borderRadius,
          boxShadow: BRAND.shadow,
        }}
      >
        <Link
          to="/"
          className="block text-center text-2xl font-bold mb-8 text-[#00BDFF] hover:underline"
          style={{ fontFamily: "'Druk Wide', 'Avenir', Arial, sans-serif" }}
        >
          Back to Home
        </Link>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center mb-8">
          {planKeys.map((plan) => (
            <button
              type="button"
              key={plan.key}
              onClick={() => handlePlanBoxClick(plan.key)}
              className={`border px-6 py-4 text-center bg-white flex flex-col items-center transition-all focus:outline-none ${
                selectedPlanKey === plan.key
                  ? "border-[#00BDFF] shadow-lg ring-2 ring-[#A6EC49]"
                  : "border-gray-200"
              }`}
              style={{
                borderRadius: BRAND.borderRadius,
                minWidth: 0,
                fontFamily: "'Druk Wide', 'Avenir', Arial, sans-serif",
              }}
              tabIndex={0}
            >
              <div className="font-bold text-lg sm:text-xl mb-1 text-[#00065A]">
                {plan.label}
              </div>
              <div className="text-gray-600 text-sm mb-1">{plan.audience}</div>
              <div className="text-2xl font-bold mb-1 text-[#00BDFF]">
                {selectedBillingCycle &&
                PricingPlan[selectedBillingCycle]?.[plan.key]
                  ? `₦${PricingPlan[selectedBillingCycle][
                      plan.key
                    ].price.toLocaleString()}`
                  : "--"}
              </div>
            </button>
          ))}
        </div>

        {/* Form */}
        <h2
          className="text-xl sm:text-2xl font-bold text-center mb-4"
          style={{
            color: BRAND.primary,
            fontFamily: "'Druk Wide', 'Avenir', Arial, sans-serif",
          }}
        >
          Get Started{" "}
          {selectedPlanMeta ? `with ${selectedPlanMeta.label} Plan` : ""}
        </h2>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-[#F9FAFB]"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ borderRadius: BRAND.borderRadius }}
          />
          <input
            type="text"
            name="business"
            placeholder="Business Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-[#F9FAFB]"
            value={formData.business}
            onChange={handleInputChange}
            required
            style={{ borderRadius: BRAND.borderRadius }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-[#F9FAFB]"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ borderRadius: BRAND.borderRadius }}
          />
          <div className="flex">
            <select
              className="border border-gray-300 rounded-l-lg px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#00BDFF]"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              style={{
                minWidth: 90,
                borderTopLeftRadius: BRAND.borderRadius,
                borderBottomLeftRadius: BRAND.borderRadius,
              }}
            >
              {countryOptions.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.label} {opt.code !== "other" ? opt.code : ""}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="w-full px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-[#F9FAFB]"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{
                borderTopRightRadius: BRAND.borderRadius,
                borderBottomRightRadius: BRAND.borderRadius,
              }}
            />
          </div>

          {/* Plan Dropdown */}
          <select
            name="plan"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-[#F9FAFB]"
            value={selectedPlanKey}
            onChange={handlePlanChange}
            required
            style={{ borderRadius: BRAND.borderRadius }}
          >
            <option value="" disabled>
              Select a plan
            </option>
            {planKeys.map((plan) => (
              <option key={plan.key} value={plan.key}>
                {plan.label}
                {selectedBillingCycle &&
                PricingPlan[selectedBillingCycle]?.[plan.key]
                  ? ` (₦${PricingPlan[selectedBillingCycle][
                      plan.key
                    ].price.toLocaleString()} ${selectedBillingCycle})`
                  : ""}
              </option>
            ))}
          </select>

          {/* Billing Cycle Dropdown */}
          <select
            name="billingCycle"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-[#F9FAFB]"
            value={selectedBillingCycle}
            onChange={handleBillingCycleChange}
            required
            style={{ borderRadius: BRAND.borderRadius }}
          >
            <option value="" disabled>
              Select billing cycle
            </option>
            {billingCycles.map((cycle) => (
              <option key={cycle.key} value={cycle.key}>
                {cycle.label}
              </option>
            ))}
          </select>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              type="button"
              className="w-full py-3 rounded-lg font-semibold text-white transition"
              onClick={handlePayment}
              disabled={loading || !selectedPlanKey || !selectedBillingCycle}
              style={{
                background: BRAND.accent,
                borderRadius: BRAND.borderRadius,
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.04em",
              }}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.536-3.536A8 8 0 114 12z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                "Pay with Moniepoint"
              )}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-4 text-gray-600 text-sm">
          <span className="mr-2">🔒</span>
          Secure Checkout — your information is safe
        </div>

        {/* Features */}
        <div className="mt-8">
          <h3
            className="text-lg font-bold mb-2 text-center"
            style={{
              color: BRAND.primary,
              fontFamily: "'Druk Wide', 'Avenir', Arial, sans-serif",
            }}
          >
            What You Get with{" "}
            {selectedPlanMeta ? selectedPlanMeta.label : "..."} Plan
          </h3>

          {selectedPlan ? (
            <div className="space-y-2">
              {/* First 5 features always visible */}
              {selectedPlan.features.slice(0, 5).map((f, idx) => (
                <div
                  key={idx}
                  className="border px-4 py-3 rounded-lg text-[#00065A] bg-[#F9FAFB] text-sm font-medium"
                  style={{
                    borderColor: BRAND.accent,
                    borderRadius: BRAND.borderRadius,
                  }}
                >
                  <span className="font-semibold text-[#00BDFF] block">
                    {f.Headings}
                  </span>
                  <span>{f.Wordings}</span>
                </div>
              ))}

              {/* Extra features */}
              {showMoreFeatures &&
                selectedPlan.features.slice(5).map((f, idx) => (
                  <div
                    key={idx + 5}
                    className="border px-4 py-3 rounded-lg text-[#00065A] bg-[#F9FAFB] text-sm font-medium"
                    style={{
                      borderColor: BRAND.accent,
                      borderRadius: BRAND.borderRadius,
                    }}
                  >
                    <span className="font-semibold text-[#00BDFF] block">
                      {f.Headings}
                    </span>
                    <span>{f.Wordings}</span>
                  </div>
                ))}

              {/* Toggle Button */}
              {selectedPlan.features.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowMoreFeatures(!showMoreFeatures)}
                  className="w-full mt-2 py-2 text-sm font-semibold text-[#00BDFF] hover:underline"
                >
                  {showMoreFeatures ? "Show Less ▲" : "Show More ▼"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-6">
              Select a plan and billing cycle to see features
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
