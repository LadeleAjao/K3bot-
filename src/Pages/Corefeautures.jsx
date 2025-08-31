import React from "react";
import k3botw from "../assets/K3botW.png";

// --- K3BOT BRAND COLORS & STYLES ---
const BRAND = {
  primary: "#00065A", // Navy
  secondary: "#00BDFF", // Cyan
  accent: "#A6EC49", // Green
  light: "#F9FAFB", // Light background
  fontBody: "'Open Sans', Arial, sans-serif",
  fontHeading: "'Druk Wide', 'Open Sans', Arial, sans-serif",
  borderRadius: "1rem", // 16px
  shadow: "0 8px 32px rgba(0,6,90,0.08), 0 1.5px 3px rgba(0,0,0,0.05)",
};

const Corefeatures = () => (
  <div
    className="py-16 px-6 max-w-6xl mx-auto relative"
    style={{
      fontFamily: BRAND.fontBody,
      background: `linear-gradient(135deg, ${BRAND.light} 60%, #e6f7ff 100%)`,
      borderRadius: BRAND.borderRadius,
      boxShadow: BRAND.shadow,
    }}
  >
    {/* Decorative grid background */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.07,
        background:
          "url('data:image/svg+xml;utf8,<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"%2300065A\"/></svg>') repeat",
        pointerEvents: "none",
        borderRadius: BRAND.borderRadius,
      }}
    />

    {/* Heading */}
    <h2
      className="text-3xl md:text-4xl font-extrabold text-center mb-3 relative z-10"
      style={{
        color: BRAND.primary,
        fontFamily: BRAND.fontHeading,
        letterSpacing: ".01em",
      }}
    >
      Benefits of K3Bot
    </h2>
    <p
      className="text-center mb-12 relative z-10"
      style={{ color: BRAND.primary, fontSize: "1.1rem" }}
    >
      Automate, monetize, and scale your WhatsApp interactions
    </p>

    {/* Top row: features + phone image */}
    <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
      {/* Left Features */}
      <div className="flex-1 space-y-10">
        <div>
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-3" style={{ color: BRAND.accent }}>
              🕒
            </span>
            <span
              className="text-xl font-bold"
              style={{ color: BRAND.primary, fontFamily: BRAND.fontHeading }}
            >
              24/7 Auto Replies
            </span>
          </div>
          <p className="ml-10" style={{ color: BRAND.primary }}>
            Respond to FAQs, greetings, and common actions automatically—
            round the clock.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-3" style={{ color: BRAND.accent }}>
              💳
            </span>
            <span
              className="text-xl font-bold"
              style={{ color: BRAND.primary, fontFamily: BRAND.fontHeading }}
            >
              Product & Pricing Catalog
            </span>
          </div>
          <div className="ml-10" style={{ color: BRAND.primary }}>
            Showcase your services or products beautifully inside WhatsApp.
            <ul className="list-disc ml-6 mt-2">
              <li>Create a clear user journey with navigable product lists</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={k3botw}
          alt="K3Bot WhatsApp Demo"
          className="w-[200px] rounded-xl shadow-lg"
          style={{
            border: `3px solid ${BRAND.secondary}`,
            background: "#fff",
          }}
        />
      </div>
    </div>

    {/* Grid of feature cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative z-10">
      {[
        {
          icon: "🗒️",
          title: "Booking & Order Capture",
          desc: "Allow customers to request appointments and capture order details directly in chat.",
          list: [
            "Request appointments & slots",
            "Capture order quantities, addresses, and more",
          ],
        },
        {
          icon: "🛒",
          title: "Seamless Transactions",
          desc: "K3Bot manages the entire booking and order process, enabling smooth sales.",
          list: ["Simplify backend processes without coding"],
        },
        {
          icon: "📄",
          title: "Google Sheets Integration",
          desc: "Sync responses, bookings, and customer data directly into Google Sheets.",
          list: ["Automate workflows with zero coding"],
        },
        {
          icon: "📱",
          title: "No App Needed",
          desc: "Engage your audience on WhatsApp without forcing downloads.",
          list: [
            "Accept a variety of payment options",
            "Close more deals directly in chat",
          ],
        },
      ].map((card, i) => (
        <div
          key={i}
          className="p-6 flex flex-col"
          style={{
            background: "#fff",
            border: `1.5px solid ${BRAND.secondary}`,
            borderRadius: BRAND.borderRadius,
            boxShadow: BRAND.shadow,
          }}
        >
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2" style={{ color: BRAND.accent }}>
              {card.icon}
            </span>
            <span
              className="text-lg font-bold"
              style={{ color: BRAND.primary, fontFamily: BRAND.fontHeading }}
            >
              {card.title}
            </span>
          </div>
          <div className="ml-8" style={{ color: BRAND.primary }}>
            {card.desc}
            <ul className="list-disc ml-6 mt-2">
              {card.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Corefeatures;
