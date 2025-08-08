import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Brand */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            K3Bot
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-400 max-w-xs">
            K3Bot is an intelligent WhatsApp automation platform built for
            African businesses.
            <br />
            From sales to support, we help you grow faster, engage smarter, and
            sell more.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 hover:text-green-400 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 hover:text-green-400 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 hover:text-green-400 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 hover:text-green-400 transition" />
            </a>
            <a href="mailto:info@k3bot.com" aria-label="Mail">
              <Mail className="w-6 h-6 hover:text-green-400 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col sm:flex-row justify-center md:justify-end gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/about" className="hover:text-green-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      <div className="mt-8 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-green-400">K3Bot</span>. All rights
          reserved.
        </p>
        <p className="mt-1">Built for Africa’s digital future.</p>
      </div>
    </footer>
  );
};

export default Footer;
