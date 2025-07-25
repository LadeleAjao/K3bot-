import React from "react";
import {
  FaClock,
  FaListAlt,
  FaShoppingCart,
  FaGoogle,
  FaMobileAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaClock className="text-green-600 text-3xl mb-2" />,
    title: "24/7 Auto Replies",
    desc: "Instantly respond to FAQs, greetings, and inquiries.",
  },
  {
    icon: <FaListAlt className="text-green-600 text-3xl mb-2" />,
    title: "Product & Pricing Catalog",
    desc: "Showcase services or products inside WhatsApp.",
  },
  {
    icon: <FaShoppingCart className="text-green-600 text-3xl mb-2" />,
    title: "Booking & Order Capture",
    desc: "Schedule appointments and process orders.",
  },
  {
    icon: <FaGoogle className="text-green-600 text-3xl mb-2" />,
    title: "Google Sheets Integration",
    desc: "Sync responses and data in real-time.",
  },
  {
    icon: <FaMobileAlt className="text-green-600 text-3xl mb-2" />,
    title: "No App Needed",
    desc: "Customers never need to download anything.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-green-600 text-3xl mb-2" />,
    title: "Payment & Receipt Automation",
    desc: "Accept payments and auto-send receipts.",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-gradient-to-b from-white to-green-100 m-0">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-700 pt-8 pb-6">
          Core Features
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 pb-10">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="w-[48%] sm:w-[45%] md:w-[30%] bg-white border border-green-200 p-4 rounded-lg text-center shadow-sm"
            >
              {feature.icon}
              <h3 className="text-sm md:text-lg font-semibold text-green-700 mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
