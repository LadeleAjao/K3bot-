import React, { useState } from "react";
import LOGO from "../assets/K3BOT.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation classes for mobile menu (slide from left)
  const mobileMenuClasses = isOpen
    ? "fixed inset-0 z-50 bg-white flex flex-col animate-slide-in-left"
    : "hidden";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={LOGO} className="h-9 w-auto" alt="K3Bot Logo" />
          </Link>
          <span className="text-2xl font-bold text-green-700 tracking-tight">
            K3Bot
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/usecase"
              className="text-gray-900 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded transition duration-200"
              style={{ letterSpacing: ".01em" }}
            >
              Usecase
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-gray-900 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded transition duration-200"
              style={{ letterSpacing: ".01em" }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold text-lg shadow transition"
              style={{ letterSpacing: ".01em" }}
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${mobileMenuClasses} md:hidden transition-all duration-300`}
        style={{
          minHeight: "100vh",
          top: 0,
          left: 0,
          width: "100vw",
        }}
      >
        {isOpen && (
          <div className="flex flex-col h-full w-full">
            {/* Top bar with logo and close */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <div className="flex items-center space-x-2">
                <img src={LOGO} className="h-9 w-auto" alt="K3Bot Logo" />
                <span className="text-2xl font-bold text-green-700">K3Bot</span>
              </div>
              <button onClick={toggleMenu} className="text-gray-800">
                <X size={32} />
              </button>
            </div>
            {/* Get Started Button */}
            <div className="flex flex-col items-center mt-6 mb-8">
              <Link
                to="/signup"
                className="w-11/12 max-w-xs bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-bold shadow text-center tracking-wide"
                onClick={toggleMenu}
                style={{ letterSpacing: "0.05em" }}
              >
                Get Started
              </Link>
            </div>
            {/* Nav Links */}
            <ul className="flex flex-col gap-2 px-6">
              <li>
                <Link
                  to="/usecase"
                  className="block w-full py-4 px-4 rounded-lg text-lg font-semibold text-gray-900 hover:bg-green-50 transition"
                  onClick={toggleMenu}
                >
                  Usecase
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block w-full py-4 px-4 rounded-lg text-lg font-semibold text-gray-900 hover:bg-green-50 transition"
                  onClick={toggleMenu}
                >
                  Pricing
                </Link>
              </li>
            </ul>
            {/* Spacer */}
            <div className="flex-1" />
            {/* Privacy Info */}
            <div className="px-6 pb-6 pt-4 text-xs text-gray-500 border-t border-gray-100">
              <div>
                Privacy information: We and our partners are using technologies
                like cookies and processing personal data in order to provide
                our services and improve your experience.
              </div>
              <div className="flex items-center justify-between mt-2">
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                <button className="bg-gray-200 px-4 py-1 rounded-full text-gray-700 font-semibold text-xs">
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation keyframes */}
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
