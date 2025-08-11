import React, { useState, useEffect } from "react";
import { PricingPlan, faq } from "../assets/assets";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold text-green-600 mb-4">
      Payment Successful!
    </h1>
    <p className="text-lg">Thank you for your payment.</p>
  </div>
);

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-3xl mx-auto mt-24 mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faq.faqs.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-2xl bg-white shadow transition"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-lg md:text-xl font-semibold text-left focus:outline-none transition group"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-gray-900">{item.heading}</span>
              <svg
                className={`w-7 h-7 text-gray-500 transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`px-6 pb-6 text-gray-700 text-base transition-all duration-300 overflow-hidden ${
                openIndex === idx
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "max-height, opacity",
              }}
            >
              <div className="whitespace-pre-line">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("annually");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/payment-success") {
      setPaymentSuccess(true);
    }
  }, []);

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

  const handleGetStarted = (planKey) => {
    navigate("/signup", { state: { planKey, billingCycle } });
  };

  if (paymentSuccess) {
    return <PaymentSuccess />;
  }

  return (
    <div className="p-4 py-26 max-w-7xl mx-auto">
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
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="12" fill="#22c55e" />
                            <path
                              d="M7 13l3 3 7-7"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <span>{getIcon(feature.Headings)}</span>
                        )}
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 text-base">
                          {feature.Headings}
                        </div>
                        <div className="text-gray-600 text-sm leading-snug">
                          {feature.Wordings}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleGetStarted(planKey)}
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
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="12" fill="#22c55e" />
                              <path
                                d="M7 13l3 3 7-7"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <span>{getIcon(feature.Headings)}</span>
                          )}
                        </span>
                        <div>
                          <div className="font-bold text-gray-900 text-base">
                            {feature.Headings}
                          </div>
                          <div className="text-gray-600 text-sm leading-snug">
                            {feature.Wordings}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleGetStarted(planKey)}
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
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Pricing;
