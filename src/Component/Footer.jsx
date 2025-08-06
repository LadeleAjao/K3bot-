import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white">K3Bot</h2>
          <p className="mt-3 text-sm leading-6">
            K3Bot is an intelligent WhatsApp automation platform built for African businesses.
            From sales to support, we help you grow faster, engage smarter, and sell more.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-green-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-green-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-green-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-green-400" />
            </a>
            <a href="mailto:info@k3bot.com">
              <Mail className="w-5 h-5 hover:text-green-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/careers" className="hover:text-green-400">Careers</a></li>
            <li><a href="/blog" className="hover:text-green-400">Blog</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/retail" className="hover:text-green-400">Retail</a></li>
            <li><a href="/education" className="hover:text-green-400">Education</a></li>
            <li><a href="/logistics" className="hover:text-green-400">Logistics</a></li>
            <li><a href="/api" className="hover:text-green-400">Developer API</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:text-green-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-green-400">Privacy Policy</a></li>
            <li><a href="/security" className="hover:text-green-400">Security</a></li>
            <li><a href="/compliance" className="hover:text-green-400">Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          Subscribe to our newsletter for updates, offers, and industry insights.
        </p>
        <form className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-md w-full md:w-64 text-gray-900"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} K3Bot. All rights reserved.
        </p>
        <p className="mt-1">
          Built with  for Africa’s digital future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
