import React, { useState } from "react";
import LOGO from "../assets/K3BOT.png"; 
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const BRAND = {
  primary: "#00065A", 
  secondary: "#00BDFF",
  accent: "#A6EC49", 
  light: "#F9FAFB", 
  fontBody: "'Open Sans', Arial, sans-serif",
  fontHeading: "'Druk Wide', 'Open Sans', Arial, sans-serif",
  borderRadius: "0.75rem",
  hoverbg: "#2e4b08ff",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuClasses = isOpen
    ? "fixed inset-0 z-50 flex flex-col animate-slide-in-left"
    : "hidden";

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full"
      style={{
        background: `linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.primary} 100%)`,
        fontFamily: BRAND.fontBody,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Go to Home">
          <img src={LOGO} className="h-10 w-auto" alt="K3Bot Logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/usecase"
              className="px-4 py-2 uppercase transition"
              style={{
                color: "#fff",
                fontFamily: BRAND.fontHeading,
                fontWeight: 700,
                borderRadius: BRAND.borderRadius,
              }}
            >
              Use Cases
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="px-4 py-2 uppercase transition"
              style={{
                color: "#fff",
                fontFamily: BRAND.fontHeading,
                fontWeight: 700,
                borderRadius: BRAND.borderRadius,
              }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="px-7 py-2 uppercase font-bold transition"
              style={{
                background: BRAND.accent,
                color: BRAND.primary,
                fontFamily: BRAND.fontHeading,
                borderRadius: BRAND.borderRadius,
              }}
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          style={{ color: "#fff" }}
          onClick={toggleMenu}
          aria-label="Open menu"
        >
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
                <img src={LOGO} className="h-10 w-auto" alt="K3Bot Logo" />
              </Link>
              <button
                onClick={toggleMenu}
                style={{ color: "#fff" }}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center mt-8 mb-10">
              <Link
                to="/signup"
                className="w-10/12 max-w-xs py-3 uppercase font-bold text-center transition"
                onClick={toggleMenu}
                style={{
                  background: BRAND.accent,
                  color: BRAND.primary,
                  fontFamily: BRAND.fontHeading,
                  borderRadius: BRAND.borderRadius,
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-3 px-6">
              <li>
                <Link
                  to="/usecase"
                  className="block py-4 px-4 uppercase transition"
                  onClick={toggleMenu}
                  style={{
                    color: "#fff",
                    fontFamily: BRAND.fontHeading,
                  }}
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-4 px-4 uppercase transition"
                  onClick={toggleMenu}
                  style={{
                    color: "#fff",
                    fontFamily: BRAND.fontHeading,
                  }}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Animation & Hover Styling */}
      <style>
        {`
          @keyframes slide-in-left {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.35s cubic-bezier(.4,0,.2,1);
          }

          /* Hover states aligned with brand */
          nav a:hover {
            color: ${BRAND.hoverbg} !important;
          }
          nav a[href="/signup"]:hover {
            background: ${BRAND.hoverbg} !important;
            color: #fff !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
