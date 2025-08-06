import React, { useState, useEffect } from "react";
import { PricingPlan } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// PaymentSuccess component
const PaymentSuccess = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
    <p className="text-lg">Thank you for your payment.</p>
  </div>
);

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("annually");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    industry: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    // Show payment success if redirected to /payment-success
    if (window.location.pathname === "/payment-success") {
      setPaymentSuccess(true);
    }
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleGetStarted = (planKey, planData) => {
    setSelectedPlan({ ...planData, name: planKey });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // SECURE: Only backend initiates payment and returns payment link
  const storeUserData = async (gateway) => {
    const userDetails = {
      name: formData.name,
      business: formData.business,
      email: formData.email,
      industry: formData.industry,
      plan: selectedPlan.name,
      billingCycle,
      price: selectedPlan.price,
      paymentMethod: gateway.toLowerCase(),
    };

    try {
      const res = await axios.post(`${backendUrl}/api/pay`, userDetails);
      if (res.data?.link) {
        window.location.href = res.data.link;
      } else {
        alert("Payment link not received.");
      }
    } catch (err) {
      console.error("Payment Error:", err.response?.data || err.message);
      alert("Failed to initiate payment.");
    } finally {
      setShowModal(false);
    }
  };

  const getIcon = (heading) => {
    const text = heading.toLowerCase();
    if (text.includes("audience")) return "👥";
    if (text.includes("user")) return "👤";
    if (text.includes("broadcast")) return "📣";
    if (text.includes("chatflow")) return "🤖";
    if (text.includes("campaign")) return "📩";
    if (text.includes("inbox")) return "💬";
    if (text.includes("catalog")) return "🛍️";
    if (text.includes("call")) return "📞";
    if (text.includes("integration")) return "🔗";
    if (text.includes("charge")) return "💰";
    return "✅";
  };

  // Show payment success message if paymentSuccess is true
  if (paymentSuccess) {
    return <PaymentSuccess />;
  }

  return (
    <div className="p-4 py-[100px] max-w-7xl mx-auto">
      {/* Billing Cycle Toggle */}
      <div className="mb-6 flex items-center gap-4">
        <span className="font-semibold text-lg">Billing Cycle:</span>
        <button
          type="button"
          onClick={() => setBillingCycle("annually")}
          className={`px-4 py-2 rounded font-semibold shadow border transition ${
            billingCycle === "annually"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          Annually
        </button>
        <button
          type="button"
          onClick={() => setBillingCycle("quarterly")}
          className={`px-4 py-2 rounded font-semibold shadow border transition ${
            billingCycle === "quarterly"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          Quarterly
        </button>
      </div>

      {/* Big screen: grid, Small screen: carousel */}
      <div>
        {/* Big screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(PricingPlan[billingCycle]).map(
            ([planKey, planData]) => (
              <div
                key={planKey}
                className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300 bg-white"
              >
                <h2 className="text-2xl font-bold capitalize mb-2 text-blue-700">
                  {planKey}
                </h2>
                <p className="text-gray-800 mb-4 text-2xl font-semibold">
                  ₦{planData.price.toLocaleString()}
                  <span className="text-sm text-gray-500 font-normal">
                    {" "}
                    / {billingCycle}
                  </span>
                </p>

                <ul className="space-y-5 mt-4">
                  {planData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 text-2xl mt-1">
                        {index < 5 ? (
                          // Green check SVG for first five features
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="12" fill="#22c55e"/>
                            <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          // Emoji for the rest
                          <span>{getIcon(feature.Headings)}</span>
                        )}
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 text-base">{feature.Headings}</div>
                        <div className="text-gray-600 text-sm leading-snug">{feature.Wordings}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleGetStarted(planKey, planData)}
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Get Started
                </button>
              </div>
            )
          )}
        </div>
        {/* Small screens */}
        <div className="block md:hidden">
          <Carousel
            responsive={responsive}
            arrows
            showDots
            infinite={false}
            containerClass="carousel-container"
            itemClass="px-2"
          >
            {Object.entries(PricingPlan[billingCycle]).map(
              ([planKey, planData]) => (
                <div
                  key={planKey}
                  className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300 bg-white mx-2"
                >
                  <h2 className="text-2xl font-bold capitalize mb-2 text-blue-700">
                    {planKey}
                  </h2>
                  <p className="text-gray-800 mb-4 text-2xl font-semibold">
                    ₦{planData.price.toLocaleString()}
                    <span className="text-sm text-gray-500 font-normal">
                      {" "}
                      / {billingCycle}
                    </span>
                  </p>

                  <ul className="space-y-5 mt-4">
                    {planData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-500 text-2xl mt-1">
                          {index < 5 ? (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="12" fill="#22c55e"/>
                              <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <span>{getIcon(feature.Headings)}</span>
                          )}
                        </span>
                        <div>
                          <div className="font-bold text-gray-900 text-base">{feature.Headings}</div>
                          <div className="text-gray-600 text-sm leading-snug">{feature.Wordings}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleGetStarted(planKey, planData)}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Get Started
                  </button>
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>

      {showModal && selectedPlan && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gradient-to-br from-blue-100 via-white to-green-100 bg-opacity-90">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-700 text-center">
              Get Started with {selectedPlan.name}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-400"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="business"
                placeholder="Business Name"
                className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-400"
                value={formData.business}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-400"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                value={`₦${selectedPlan.price}`}
                readOnly
                className="w-full border border-blue-100 p-2 rounded bg-gray-50"
              />
              <input
                type="text"
                value={`${selectedPlan.name} (${billingCycle})`}
                readOnly
                className="w-full border border-blue-100 p-2 rounded bg-gray-50"
              />

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-400 bg-white"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Choose an industry
                  </option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="education">Education</option>
                  <option value="finance">Finance</option>
                  <option value="health">Health</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* End Dropdown */}

              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold"
                  onClick={() => storeUserData("opay")}
                >
                  Pay with Opay
                </button>
                <button
                  type="button"
                  className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 font-semibold"
                  onClick={() => storeUserData("flutterwave")}
                >
                  Pay with Flutterwave
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full mt-2 text-red-600 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;