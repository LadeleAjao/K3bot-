import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { Link, useLocation } from "react-router-dom";
import { PricingPlan } from "../assets/assets";

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
  { key: "annually", label: "Annually" },
  { key: "quarterly", label: "Quarterly" },
];

const Signup = () => {
  const location = useLocation();
  const initialPlanKey = location.state?.planKey || "";
  const initialBillingCycle = location.state?.billingCycle || "";

  const [selectedPlanKey, setSelectedPlanKey] = useState(initialPlanKey);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState(initialBillingCycle);
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
  const [featureOpenIndexes, setFeatureOpenIndexes] = useState([]);

  // Update formData when plan or billing cycle changes
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
    setFeatureOpenIndexes([]);
  };

  const handlePlanChange = (e) => {
    setSelectedPlanKey(e.target.value);
    setFeatureOpenIndexes([]);
  };

  const handleBillingCycleChange = (e) => {
    setSelectedBillingCycle(e.target.value);
    setFeatureOpenIndexes([]);
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

  const handleFeatureToggle = (idx) => {
    setFeatureOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handlePayment = async (paymentMethod) => {
    if (!selectedPlanKey || !selectedBillingCycle) {
      alert("Please select a plan and billing cycle first.");
      return;
    }
    setLoading(true);
    try {
      const userDetails = {
        ...formData,
        plan: selectedPlanKey,
        billingCycle: selectedBillingCycle,
        price: selectedPlan.price,
        countryCode: formData.countryCode,
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-26 px-4">
      <div className="w-full max-w-lg mx-auto">
        <Link to="/" className="block text-center text-2xl font-bold mb-6 hover:underline">
          Back to Home
        </Link>
        {/* Plans */}
        <div className="grid grid-cols-3 gap-6 justify-center mb-8 overflow-x-auto">
          {planKeys.map((plan) => (
            <button
              type="button"
              key={plan.key}
              onClick={() => handlePlanBoxClick(plan.key)}
              className={`border rounded-xl px-6 py-4 text-center bg-white flex flex-col items-center transition-all focus:outline-none ${
                selectedPlanKey === plan.key
                  ? "border-green-500 shadow-lg ring-2 ring-green-200"
                  : "border-gray-200"
              }`}
              tabIndex={0}
              style={{ minWidth: 0 }}
            >
              <div className="font-bold text-lg sm:text-xl mb-1">{plan.label}</div>
              <div className="text-gray-700 text-sm mb-1">{plan.audience}</div>
              <div className="text-2xl font-bold mb-1">
                {selectedBillingCycle && PricingPlan[selectedBillingCycle]?.[plan.key]
                  ? `₦${PricingPlan[selectedBillingCycle][plan.key].price.toLocaleString()}`
                  : "--"}
              </div>
            </button>
          ))}
        </div>
        {/* Form */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Get Started {selectedPlanMeta ? `with ${selectedPlanMeta.label} Plan` : ""}
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
          {/* Plan Dropdown */}
          <select
            name="plan"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={selectedPlanKey}
            onChange={handlePlanChange}
            required
          >
            <option value="" disabled>
              Select a plan
            </option>
            {planKeys.map((plan) => (
              <option key={plan.key} value={plan.key}>
                {plan.label}
                {selectedBillingCycle && PricingPlan[selectedBillingCycle]?.[plan.key]
                  ? ` (₦${PricingPlan[selectedBillingCycle][plan.key].price.toLocaleString()} ${selectedBillingCycle})`
                  : ""}
              </option>
            ))}
          </select>
          {/* Billing Cycle Dropdown (in form only) */}
          <select
            name="billingCycle"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={selectedBillingCycle}
            onChange={handleBillingCycleChange}
            required
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
              className="w-full sm:w-1/2 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition"
              onClick={() => handlePayment("opay")}
              disabled={loading || !selectedPlanKey || !selectedBillingCycle}
            >
              Pay with Opay
            </button>
            <button
              type="button"
              className="w-full sm:w-1/2 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
              onClick={() => handlePayment("flutterwave")}
              disabled={loading || !selectedPlanKey || !selectedBillingCycle}
            >
              Pay with Flutterwave
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-4 text-gray-600 text-sm">
          <span className="mr-2">🔒</span>
          Secure Checkout — your information is safe
        </div>
        {/* Features Accordion */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2 text-center text-green-700">
            What You Get with {selectedPlanMeta ? selectedPlanMeta.label : "..."} Plan
          </h3>
          {selectedPlan ? (
            <div className="space-y-2">
              {selectedPlan.features.map((f, idx) => (
                <div key={idx} className="border border-green-200 rounded-lg">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center px-4 py-3 font-semibold text-green-800 bg-green-50 rounded-lg focus:outline-none transition"
                    onClick={() => handleFeatureToggle(idx)}
                  >
                    <span>{f.Headings}</span>
                    <span className="ml-2">{featureOpenIndexes.includes(idx) ? "▲" : "▼"}</span>
                  </button>
                  {featureOpenIndexes.includes(idx) && (
                    <div className="px-4 pb-3 text-green-900 text-sm bg-white rounded-b-lg animate-fade-in">
                      {f.Wordings}
                    </div>
                  )}
                </div>
              ))}
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