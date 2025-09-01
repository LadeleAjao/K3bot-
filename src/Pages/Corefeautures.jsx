import React from "react";
import { FaComments, FaBolt, FaShieldAlt, FaChartLine } from "react-icons/fa";

const BRAND = {
  primary: "#00065A",   // 60%
  secondary: "#00BDFF", // 30%
  accent: "#A6EC49",    // 10%
  light: "#F9FAFB",
  fontHeading: "'Poppins', sans-serif",
  fontBody: "'Open Sans', sans-serif",
  borderRadius: "1.25rem",
  shadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
};

const Corefeatures = () => {
  const features = [
    {
      icon: <FaComments />,
      title: "Smart Chat Automation",
      desc: "Engage your customers with instant, intelligent responses that save time and increase satisfaction.",
      color: BRAND.primary,
    },
    {
      icon: <FaBolt />,
      title: "Fast Setup",
      desc: "Get your WhatsApp automation running in minutes with our seamless onboarding process.",
      color: BRAND.secondary,
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      desc: "Built with enterprise-grade security, ensuring your business and customer data are always protected.",
      color: BRAND.primary,
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      desc: "Track performance and customer engagement with powerful insights at your fingertips.",
      color: BRAND.accent,
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{
        background: `linear-gradient(135deg, ${BRAND.light} 60%, ${BRAND.secondary}20 40%)`,
        fontFamily: BRAND.fontBody,
      }}
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            color: BRAND.primary,
            fontFamily: BRAND.fontHeading,
          }}
        >
          Powerful Features for Growing Businesses
        </h2>
        <p
          className="text-lg"
          style={{
            color: BRAND.primary,
            opacity: 0.8,
          }}
        >
          Our tools are designed to streamline communication and supercharge
          customer engagement.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((card, i) => (
          <div
            key={i}
            className="p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            style={{
              background: BRAND.light,
              borderRadius: BRAND.borderRadius,
              boxShadow: BRAND.shadow,
              minHeight: "260px",
              justifyContent: "center",
            }}
          >
            <div
              className="mb-4 flex items-center justify-center"
              style={{
                background: `${card.color}15`, // soft tint of the card color
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                marginBottom: "1rem",
              }}
            >
              <span className="text-3xl" style={{ color: card.color }}>
                {card.icon}
              </span>
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{
                color: card.color,
                fontFamily: BRAND.fontHeading,
              }}
            >
              {card.title}
            </h3>
            <p className="text-base" style={{ color: BRAND.primary }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Corefeatures;
