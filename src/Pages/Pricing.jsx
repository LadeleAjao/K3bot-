import React, { useState, useEffect } from "react";
import { PricingPlan, faq } from "../assets/assets";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] rounded-2xl shadow-lg">
    <h1 className="text-3xl font-bold text-[#A6EC49] mb-4 font-['Druk Wide Bold']">
      Payment Successful!
    </h1>
    <p className="text-lg text-[#00065A] font-avenir">Thank you for your payment.</p>
  </div>
);

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="max-w-3xl mx-auto mt-24 mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#00065A] font-['Druk Wide Bold']">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faq.faqs.map((item, idx) => (
          <div key={idx} className="border border-[#E5E7EB] rounded-2xl bg-white shadow transition">
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-lg md:text-xl font-semibold text-left font-avenir"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-[#00065A]">{item.heading}</span>
              <svg
                className={`w-7 h-7 text-[#00BDFF] transform transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-6 pb-6 text-[#374151] text-base transition-all duration-300 overflow-hidden ${
                openIndex === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <div className="whitespace-pre-line font-avenir">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
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

  if (paymentSuccess) return <PaymentSuccess />;

  return (
    <div className="p-6 py-26 max-w-7xl mx-auto bg-white rounded-3xl">
      {/* Billing Cycle Toggle */}
      <div className="mb-8 flex items-center gap-4 justify-center">
        <span className="font-semibold text-lg text-[#00065A] font-avenir">Billing Cycle:</span>
        <button
          type="button"
          onClick={() => setBillingCycle("monthly")}
          className={`px-4 py-2 rounded-lg font-semibold shadow border transition font-avenir ${
            billingCycle === "monthly"
              ? "bg-[#00BDFF] text-white border-[#00BDFF]"
              : "bg-white text-[#00BDFF] border-[#00BDFF]"
          }`}
        >
          monthly
        </button>
        <button
          type="button"
          onClick={() => setBillingCycle("quarterly")}
          className={`px-4 py-2 rounded-lg font-semibold shadow border transition font-avenir ${
            billingCycle === "quarterly"
              ? "bg-[#00BDFF] text-white border-[#00BDFF]"
              : "bg-white text-[#00BDFF] border-[#00BDFF]"
          }`}
        >
          Quarterly
        </button>
      </div>

      {/* Pricing Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(PricingPlan[billingCycle]).map(([planKey, planData]) => (
          <div
            key={planKey}
            className="border border-gray-200 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 bg-[#F9FAFB] flex flex-col"
          >
            <h2 className="text-2xl font-bold capitalize mb-2 text-[#00BDFF] font-['Druk Wide Bold']">
              {planKey}
            </h2>
            <p className="text-[#00065A] mb-4 text-2xl font-semibold font-avenir">
              ₦{planData.price.toLocaleString()}
              <span className="text-sm text-gray-500 font-normal"> / {billingCycle}</span>
            </p>

            <ul className="space-y-5 mt-4 flex-1">
              {planData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#A6EC49] text-2xl mt-1">
                    {index < 5 ? (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="12" fill="#A6EC49" />
                        <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span>{getIcon(feature.Headings)}</span>
                    )}
                  </span>
                  <div>
                    <div className="font-bold text-[#00065A] text-base font-avenir">{feature.Headings}</div>
                    <div className="text-gray-600 text-sm leading-snug font-avenir">{feature.Wordings}</div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleGetStarted(planKey)}
              className="mt-6 w-full bg-[#A6EC49] text-white py-2 px-4 rounded-lg hover:bg-[#2e4b08ff] transition font-semibold font-avenir"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Carousel responsive={responsive} arrows showDots infinite={false} containerClass="carousel-container" itemClass="px-2">
          {Object.entries(PricingPlan[billingCycle]).map(([planKey, planData]) => (
            <div
              key={planKey}
              className="border border-gray-200 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 bg-[#F9FAFB] mx-2 flex flex-col"
            >
              <h2 className="text-2xl font-bold capitalize mb-2 text-[#00BDFF] font-['Druk Wide Bold']">{planKey}</h2>
              <p className="text-[#00065A] mb-4 text-2xl font-semibold font-avenir">
                ₦{planData.price.toLocaleString()}
                <span className="text-sm text-gray-500 font-normal"> / {billingCycle}</span>
              </p>

              <ul className="space-y-5 mt-4 flex-1">
                {planData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#A6EC49] text-2xl mt-1">
                      {index < 5 ? (
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="#A6EC49" />
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
                      <div className="font-bold text-[#00065A] text-base font-avenir">{feature.Headings}</div>
                      <div className="text-gray-600 text-sm leading-snug font-avenir">{feature.Wordings}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted(planKey)}
                className="mt-6 w-full bg-[#00BDFF] text-white py-2 px-4 rounded-lg hover:bg-[#00065A] transition font-semibold font-avenir"
              >
                Get Started
              </button>
            </div>
          ))}
        </Carousel>
      </div>

      <FAQSection />
    </div>
  );
};

export default Pricing;
