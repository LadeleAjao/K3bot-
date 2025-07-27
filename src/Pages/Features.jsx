import React, { useState } from "react";
import {
  FaClock,
  FaListAlt,
  FaShoppingCart,
  FaGoogle,
  FaMobileAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import whatsappImg from "../assets/Whatsapp.png"; 

const featuresData = [
  {
    icon: <FaClock className="text-green-600 text-2xl md:text-3xl" />,
    title: "24/7 Auto Replies",
    desc: "Instantly respond to FAQs, greetings, and inquiries.",
  },
  {
    icon: <FaListAlt className="text-green-600 text-2xl md:text-3xl" />,
    title: "Product & Pricing Catalog",
    desc: "Showcase services or products inside WhatsApp.",
  },
  {
    icon: <FaShoppingCart className="text-green-600 text-2xl md:text-3xl" />,
    title: "Booking & Order Capture",
    desc: "Schedule appointments and process orders.",
  },
  {
    icon: <FaGoogle className="text-green-600 text-2xl md:text-3xl" />,
    title: "Google Sheets Integration",
    desc: "Sync responses and data in real-time.",
  },
  {
    icon: <FaMobileAlt className="text-green-600 text-2xl md:text-3xl" />,
    title: "No App Needed",
    desc: "Customers never need to download anything.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-green-600 text-2xl md:text-3xl" />,
    title: "Payment & Receipt Automation",
    desc: "Accept payments and auto send receipts.",
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="features"
      className="w-full bg-gradient-to-b from-white to-green-100 py-8 md:py-12"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-700 mb-8">
          Core Features
        </h2>

        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between gap-8 h-[70vh]">
          {/* Left */}
          <div className="w-1/2 grid grid-cols-2 gap-6 h-full">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-green-200 p-5 rounded-lg text-center shadow-sm flex flex-col items-center justify-center"
              >
                {feature.icon}
                <h3 className="text-lg font-semibold text-green-700 mt-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-1/2 flex justify-center h-full">
            <img
              src={whatsappImg}
              alt="WhatsApp"
              className="max-h-full max-w-[350px] object-contain"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-row gap-4 items-start justify-between mt-4">
          {/* Left */}
          <div className="w-1/2 space-y-3">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                onClick={() => toggleFeature(index)}
                className="cursor-pointer bg-white border border-green-300 rounded-md px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <h3 className="font-semibold text-green-800 text-sm">
                    {feature.title}
                  </h3>
                </div>
                {activeIndex === index && (
                  <p className="text-xs text-gray-600 mt-2">{feature.desc}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-1/2 flex justify-center">
            <img
              src={whatsappImg}
              alt="WhatsApp"
              className="w-full max-w-[160px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;