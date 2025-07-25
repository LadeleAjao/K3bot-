import React, { useState } from "react";
import LOGO from "../assets/K3BOT.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMobileClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo*/}
        <div className="flex items-center space-x-3">
          <img src={LOGO} className="h-12 w-auto" alt="K3Bot Logo" />
          <h1 className="text-3xl font-bold text-green-700">K3Bot</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-10">
          {["Features", "Use Cases", "Pricing"].map((item) => (
            <li key={item}>
              <a
                className="text-gray-800 hover:text-green-600 font-semibold text-[20px] transition duration-200"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-200 text-lg font-semibold"
              href="#getstarted"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white shadow space-y-5">
          {["Features", "Use Cases", "Pricing"].map((item) => (
            <a
              key={item}
              className="block text-[18px] font-semibold text-gray-800 hover:text-green-600 transition"
              href={`#${item.toLowerCase()}`}
              onClick={handleMobileClick}
            >
              {item}
            </a>
          ))}
          <a
            className="inline-block bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition text-base font-semibold"
            href="#get-started"
            onClick={handleMobileClick}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
