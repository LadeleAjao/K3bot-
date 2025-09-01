import React from "react";

const BRAND = {
  primary: "#00065A", // 60%
  secondary: "#00BDFF", // 30%
  accent: "#A6EC49", // 10%
  cardBg: "rgba(255,255,255,0.05)",
  borderRadius: "2rem",
  fontHeading: "'Poppins', Arial, sans-serif",
  fontBody: "'Open Sans', Arial, sans-serif",
};

const benefits = [
  {
    icon: "🚀",
    title: "Skyrocket Sales & Conversions",
    desc: "Turn WhatsApp conversations into revenue with targeted campaigns.",
  },
  {
    icon: "⏱️",
    title: "Save Time & Reduce Costs",
    desc: "Automate repetitive tasks and reduce customer service overhead.",
  },
  {
    icon: "💚",
    title: "Build Stronger Customer Relationships",
    desc: "Engage customers where they are most active and responsive.",
  },
  {
    icon: "⚡",
    title: "Easy to Use, No Coding Needed",
    desc: "Intuitive interface that anyone can master in minutes.",
  },
  {
    icon: "✅",
    title: "99.9% Uptime & Reliable Delivery",
    desc: "Enterprise-grade infrastructure ensures your messages reach customers.",
  },
];

const Others = () => (
  <div
    className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 py-16"
    style={{
      background: BRAND.primary,
      fontFamily: BRAND.fontBody,
    }}
  >
    {/* Left: Stat & Description */}
    <div
      className="flex-1 flex flex-col justify-center 
                 items-center text-center mx-auto 
                 md:items-start md:text-left md:mx-0 
                 p-10"
      style={{
        background: BRAND.secondary,
        borderRadius: BRAND.borderRadius,
        marginRight: "0", // no margin on mobile
        minWidth: "320px",
        maxWidth: "420px",
        color: "#fff",
      }}
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-6"
        style={{
          fontFamily: BRAND.fontHeading,
          lineHeight: 1.1,
        }}
      >
        Increase
        <br />
        Customer
        <br />
        Engagement
        <br />
        <span style={{ color: BRAND.accent }}>by 300%</span>
      </h2>
      <p className="text-lg" style={{ opacity: 0.9 }}>
        Join thousands of Nigerian businesses already using K3Bot to transform
        their customer communication
      </p>
    </div>

    {/* Right: Benefits */}
    <div className="flex-1 flex flex-col gap-6 mt-10 md:mt-0">
      {benefits.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-4 mx-auto w-full md:max-w-[650px]"
          style={{
            background: "rgba(255,255,255,0.08)", // slightly stronger glass
            borderRadius: "1rem",
            padding: "1.5rem 2rem", // increased padding for desktop
            border: `1px solid ${BRAND.secondary}33`,
            boxShadow: "0 4px 18px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              background: "#fff",
              borderRadius: "50%",
              width: "46px",
              height: "46px",
              fontSize: "1.5rem",
              color: BRAND.secondary,
              marginRight: "0.5rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            {item.icon}
          </div>
          <div>
            <div
              className="font-bold text-lg"
              style={{ color: "#fff", fontFamily: BRAND.fontHeading }}
            >
              {item.title}
            </div>
            <div className="text-base" style={{ color: "#fff", opacity: 0.85 }}>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Others;
