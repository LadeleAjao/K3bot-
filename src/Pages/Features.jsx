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
    icon: <FaClock className="text-[#A6EC49] text-2xl md:text-3xl" />,
    title: "24/7 Auto Replies",
    desc: "Instantly respond to FAQs, greetings, and inquiries.",
  },
  {
    icon: <FaListAlt className="text-[#A6EC49] text-2xl md:text-3xl" />,
    title: "Product & Pricing Catalog",
    desc: "Showcase services or products inside WhatsApp.",
  },
  {
    icon: <FaShoppingCart className="text-[#A6EC49] text-2xl md:text-3xl" />,
    title: "Booking & Order Capture",
    desc: "Schedule appointments and process orders.",
  },
  {
    icon: <FaGoogle className="text-[#A6EC49] text-2xl md:text-3xl" />,
    title: "Google Sheets Integration",
    desc: "Sync responses and data in real-time.",
  },
  {
    icon: <FaMobileAlt className="text-[#A6EC49] text-2xl md:text-3xl" />,
    title: "No App Needed",
    desc: "Customers never need to download anything.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-[#A6EC49] text-2xl md:text-3xl" />,
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
      className="w-full relative py-16 md:py-24 font-avenir overflow-hidden bg-[#00065A]"
    >
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-10 w-full z-10">
        <h2 className="text-3xl md:text-5xl font-['Druk Wide Bold'] font-bold text-center text-white mb-12">
          Core Features
        </h2>

        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between gap-10 h-[70vh]">
          {/* Left */}
          <div className="w-1/2 grid grid-cols-2 gap-6 h-full">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-[#00BDFF] p-6 rounded-xl text-center 
                           hover:-translate-y-1 transition-transform duration-300 flex flex-col 
                           items-center justify-center shadow-sm"
              >
                {feature.icon}
                <h3 className="text-lg font-['Druk Wide Bold'] text-[#00065A] mt-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-1/2 flex justify-center h-full">
            <img
              src={whatsappImg}
              alt="WhatsApp"
              className="max-h-full max-w-[380px] object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-row gap-4 items-start justify-between mt-6">
          {/* Left */}
          <div className="w-1/2 space-y-4">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                onClick={() => toggleFeature(index)}
                className="cursor-pointer bg-white border border-[#00BDFF] rounded-lg 
                           px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <h3 className="font-['Druk Wide Bold'] text-[#00065A] text-sm">
                    {feature.title}
                  </h3>
                </div>
                {activeIndex === index && (
                  <p className="text-xs text-gray-700 mt-2">{feature.desc}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-1/2 flex justify-center">
            <img
              src={whatsappImg}
              alt="WhatsApp"
              className="w-full max-w-[160px] object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
