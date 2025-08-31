import React, { useState } from "react";
import LOGO from "../assets/K3BOT.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// --- K3BOT BRAND COLORS & STYLES ---
const BRAND = {
  primary: "#00065A", // Dark navy (core)
  secondary: "#00BDFF", // Cyan accent
  accent: "#A6EC49", // Success green
  light: "#F9FAFB", // Neutral background
  font: "'Avenir', 'Segoe UI', Arial, sans-serif",
  borderRadius: "0.75rem",
  shadow: "0 6px 20px rgba(0, 6, 90, 0.15)",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuClasses = isOpen
    ? "fixed inset-0 z-50 flex flex-col animate-slide-in-left"
    : "hidden";

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full shadow-sm"
      style={{
        background: `linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.secondary} 100%)`,
        fontFamily: BRAND.font,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Go to Home">
          <img src={LOGO} className="h-9 w-auto" alt="K3Bot Logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/usecase"
              className="font-semibold text-base px-4 py-2 tracking-wide uppercase transition"
              style={{ color: "#fff", borderRadius: BRAND.borderRadius }}
            >
              Use Cases
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="font-semibold text-base px-4 py-2 tracking-wide uppercase transition"
              style={{ color: "#fff", borderRadius: BRAND.borderRadius }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="px-6 py-2 rounded-lg font-bold text-sm uppercase shadow-md transition"
              style={{
                background: BRAND.accent,
                color: BRAND.primary,
                letterSpacing: "0.05em",
                borderRadius: BRAND.borderRadius,
                boxShadow: BRAND.shadow,
              }}
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" style={{ color: "#fff" }} onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${mobileMenuClasses} md:hidden`}
        style={{
          minHeight: "100vh",
          background: `linear-gradient(120deg, ${BRAND.primary} 0%, ${BRAND.secondary} 100%)`,
        }}
      >
        {isOpen && (
          <div className="flex flex-col h-full w-full">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-6">
              <Link to="/" aria-label="Go to Home">
                <img src={LOGO} className="h-9 w-auto" alt="K3Bot Logo" />
              </Link>
              <button onClick={toggleMenu} style={{ color: "#fff" }}>
                <X size={32} />
              </button>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center mt-6 mb-8">
              <Link
                to="/signup"
                className="w-10/12 max-w-xs py-3 rounded-lg font-bold text-sm uppercase text-center shadow"
                onClick={toggleMenu}
                style={{
                  background: BRAND.accent,
                  color: BRAND.primary,
                  letterSpacing: "0.05em",
                  borderRadius: BRAND.borderRadius,
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-2 px-6">
              <li>
                <Link
                  to="/usecase"
                  className="block py-4 px-4 rounded-lg font-semibold uppercase transition"
                  onClick={toggleMenu}
                  style={{
                    color: "#fff",
                    background: "rgba(0,0,0,0.15)",
                  }}
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-4 px-4 rounded-lg font-semibold uppercase transition"
                  onClick={toggleMenu}
                  style={{
                    color: "#fff",
                    background: "rgba(0,0,0,0.15)",
                  }}
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Footer Info */}
            <div
              className="mt-auto px-6 pb-6 pt-4 text-xs border-t"
              style={{ color: "#e0e0e0", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <div>
                Privacy information: We and our partners use cookies to improve
                your experience.
              </div>
              <div className="flex items-center justify-between mt-2">
                <a href="#" className="underline" style={{ color: "#fff" }}>
                  Privacy Policy
                </a>
                <button
                  className="px-4 py-1 rounded-full font-bold text-xs"
                  style={{ background: "#fff", color: BRAND.primary }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes slide-in-left {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.35s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
