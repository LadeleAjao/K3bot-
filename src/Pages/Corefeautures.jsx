import React from "react";
import whatsappImg from "../assets/whatsapp.png";
import k3botw from "../assets/K3botW.png";

// --- BRAND COLORS (replace with your actual brand guide values) ---
const BRAND = {
  primary: "#0052CC", // Brand blue
  secondary: "#00BDFF", // Accent cyan
  accent: "#A6EC49", // Success green
  dark: "#00065A", // Brand dark
  light: "#F9FAFB", // Brand light background
  error: "#FF3B30", // Error red
  font: "'Inter', 'Segoe UI', Arial, sans-serif", // Brand font
  borderRadius: "1rem", // 16px
  shadow: "0 8px 32px 0 rgba(0,82,204,0.10), 0 1.5px 3px 0 rgba(0,0,0,0.05)",
};
// ---------------------------------------------------------------

const Corefeautures = () => (
  <div
    className="py-12 px-4 max-w-6xl mx-auto relative"
    style={{
      fontFamily: BRAND.font,
      background: `linear-gradient(135deg, ${BRAND.light} 60%, #e6f7ff 100%)`,
      borderRadius: BRAND.borderRadius,
      boxShadow: BRAND.shadow,
    }}
  >
    {/* Decorative SVG background */}
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
          "url('data:image/svg+xml;utf8,<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"40\" height=\"40\" fill=\"none\"/><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"%230052CC\"/></svg>') repeat",
        pointerEvents: "none",
        borderRadius: BRAND.borderRadius,
      }}
    />
    <h2
      className="text-3xl md:text-4xl font-extrabold text-center mb-2 relative z-10"
      style={{ color: BRAND.primary, letterSpacing: ".01em" }}
    >
      Benefits of K3Bot
    </h2>
    <p className="text-center mb-10 relative z-10" style={{ color: BRAND.dark }}>
      Automate, monetize, and scale your WhatsApp interactions with
    </p>
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
      {/* Left: Features */}
      <div className="flex-1 space-y-10">
        <div>
          <div className="flex items-center mb-2">
            <span
              className="text-3xl mr-3"
              role="img"
              aria-label="clock"
              style={{ color: BRAND.accent }}
            >
              🕒
            </span>
            <span
              className="text-xl font-bold"
              style={{ color: BRAND.primary }}
            >
              24/7 Auto Replies
            </span>
          </div>
          <p className="ml-10" style={{ color: BRAND.dark }}>
            Respond to frequently asked questions, greetings, and common actions
            automatically—round the clock.
          </p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <span
              className="text-3xl mr-3"
              role="img"
              aria-label="catalog"
              style={{ color: BRAND.accent }}
            >
              💳
            </span>
            <span
              className="text-xl font-bold"
              style={{ color: BRAND.primary }}
            >
              Product & Pricing Catalog
            </span>
          </div>
          <div className="ml-10" style={{ color: BRAND.dark }}>
            Showcase your services or products beautifully inside WhatsApp to
            generate leads.
            <br />
            <ul className="list-disc ml-6 mt-2">
              <li>
                Create a clear user journey with navigable product lists within
                chat
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Right: Phone Image */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
        <img
          src={k3botw}
          alt="WhatsApp UI"
          className="w-[180px] md:w-[200px] rounded-xl shadow-lg"
          style={{
            border: `3px solid ${BRAND.secondary}`,
            background: "#fff",
          }}
        />
      </div>
    </div>
    {/* Cards grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative z-10">
      <div
        className="rounded-xl shadow p-6 flex flex-col border"
        style={{
          background: "#fff",
          borderColor: BRAND.secondary,
          borderRadius: BRAND.borderRadius,
          boxShadow: BRAND.shadow,
        }}
      >
        <div className="flex items-center mb-2">
          <span
            className="text-2xl mr-2"
            role="img"
            aria-label="booking"
            style={{ color: BRAND.accent }}
          >
            🗒️
          </span>
          <span className="text-lg font-bold" style={{ color: BRAND.primary }}>
            Booking & Order Capture
          </span>
        </div>
        <div className="ml-8" style={{ color: BRAND.dark }}>
          Showcase your services or products beautifully inside WhatsApp too.
          <ul className="list-disc ml-6 mt-2">
            <li>Allow customers to request appointments and book slots</li>
            <li>Capture order details, quantities, addresses, and more.</li>
          </ul>
        </div>
      </div>
      <div
        className="rounded-xl shadow p-6 flex flex-col border"
        style={{
          background: "#fff",
          borderColor: BRAND.secondary,
          borderRadius: BRAND.borderRadius,
          boxShadow: BRAND.shadow,
        }}
      >
        <div className="flex items-center mb-2">
          <span
            className="text-2xl mr-2"
            role="img"
            aria-label="order"
            style={{ color: BRAND.accent }}
          >
            🗒️
          </span>
          <span className="text-lg font-bold" style={{ color: BRAND.primary }}>
            Booking & Order Capture
          </span>
        </div>
        <div className="ml-8" style={{ color: BRAND.dark }}>
          K3Bot manages the entire booking and order process, facilitating
          seamless transactions.
          <ul className="list-disc ml-6 mt-2">
            <li>Simplify backend processes without coding</li>
          </ul>
        </div>
      </div>
      <div
        className="rounded-xl shadow p-6 flex flex-col border"
        style={{
          background: "#fff",
          borderColor: BRAND.secondary,
          borderRadius: BRAND.borderRadius,
          boxShadow: BRAND.shadow,
        }}
      >
        <div className="flex items-center mb-2">
          <span
            className="text-2xl mr-2"
            role="img"
            aria-label="sheets"
            style={{ color: BRAND.accent }}
          >
            📄
          </span>
          <span className="text-lg font-bold" style={{ color: BRAND.primary }}>
            Google Sheets Integration
          </span>
        </div>
        <div className="ml-8" style={{ color: BRAND.dark }}>
          Sync customer responses, bookings, and data directly to Google Sheets.
          <ul className="list-disc ml-6 mt-2">
            <li>Simplify backend processes without coding</li>
          </ul>
        </div>
      </div>
      <div
        className="rounded-xl shadow p-6 flex flex-col border"
        style={{
          background: "#fff",
          borderColor: BRAND.secondary,
          borderRadius: BRAND.borderRadius,
          boxShadow: BRAND.shadow,
        }}
      >
        <div className="flex items-center mb-2">
          <span
            className="text-2xl mr-2"
            role="img"
            aria-label="phone"
            style={{ color: BRAND.accent }}
          >
            📱
          </span>
          <span className="text-lg font-bold" style={{ color: BRAND.primary }}>
            No App Needed
          </span>
        </div>
        <div className="ml-8" style={{ color: BRAND.dark }}>
          Engage your audience on WhatsApp without forcing them to download
          additional apps.
          <ul className="list-disc ml-6 mt-2">
            <li>Accept a variety of payment options.</li>
            <li>Close more deals by ...</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Corefeautures;