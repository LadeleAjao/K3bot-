import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00065A] text-gray-300 px-6 py-12 shadow-lg font-avenir">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Brand */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-[#00BDFF] tracking-tight font-['Druk Wide Bold']">
            K3Bot
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-300 max-w-xs font-light">
            K3Bot is an intelligent WhatsApp automation platform built for African businesses.
            <br />
            From sales to support, we help you grow faster, engage smarter, and sell more.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#00123D] rounded-full p-2 hover:bg-[#00BDFF] hover:text-white transition-colors duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-[#00123D] rounded-full p-2 hover:bg-[#00BDFF] hover:text-white transition-colors duration-200"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-[#00123D] rounded-full p-2 hover:bg-[#00BDFF] hover:text-white transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-[#00123D] rounded-full p-2 hover:bg-[#00BDFF] hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@k3bot.com"
              aria-label="Mail"
              className="bg-[#00123D] rounded-full p-2 hover:bg-[#00BDFF] hover:text-white transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col sm:flex-row justify-center md:justify-end gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-['Druk Wide Bold']">
              Company
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#00BDFF] transition-colors duration-200 font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.k3bot.com/"
                  className="hover:text-[#00BDFF] transition-colors duration-200 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#00BDFF] transition-colors duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#001B44] my-8"></div>

      <div className="mt-8 text-center text-xs text-gray-400 font-avenir">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-[#A6EC49]">K3Bot</span>. All rights reserved.
        </p>
        <p className="mt-1 font-medium text-gray-400">
          Built for Africa’s digital future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
