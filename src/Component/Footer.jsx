import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// --- K3BOT BRAND COLORS & STYLES ---
const BRAND = {
  primary: "#00065A", // Navy
  secondary: "#00BDFF", // Cyan
  accent: "#A6EC49", // Green
  dark: "#00123D", // Darker navy for icons/bg
  fontBody: "'Open Sans', Arial, sans-serif",
  fontHeading: "'Druk Wide', 'Open Sans', Arial, sans-serif",
};

const Footer = () => {
  return (
    <footer
      className="px-6 py-12 shadow-lg"
      style={{
        background: BRAND.primary,
        color: "#d1d5db", // Tailwind's gray-300
        fontFamily: BRAND.fontBody,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Brand */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2
            className="text-3xl font-extrabold tracking-tight"
            style={{
              color: BRAND.secondary,
              fontFamily: BRAND.fontHeading,
            }}
          >
            K3Bot
          </h2>
          <p className="mt-3 text-base leading-7 max-w-xs font-light">
            K3Bot is an intelligent WhatsApp automation platform built for African
            businesses.
            <br />
            From sales to support, we help you grow faster, engage smarter, and sell
            more.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579826976713", label: "Facebook" },
              { Icon: Twitter, href: "https://x.com/k3bot_ai", label: "Twitter" },
              { Icon: Instagram, href: "https://www.instagram.com/k3botofficial/", label: "Instagram" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/k3bot/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:k3botservice@gmail.com", label: "Mail" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-2 transition-colors duration-200"
                style={{
                  background: BRAND.dark,
                  color: "#fff",
                }}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col sm:flex-row justify-center md:justify-end gap-12">
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                color: "#fff",
                fontFamily: BRAND.fontHeading,
              }}
            >
              Company
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  to="/about"
                  className="transition-colors duration-200"
                  style={{ color: "#d1d5db" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = BRAND.secondary)}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  // href="https://blog.k3bot.com/"
                  to="/blog"
                  className="transition-colors duration-200"
                  style={{ color: "#d1d5db" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = BRAND.secondary)}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors duration-200"
                  style={{ color: "#d1d5db" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = BRAND.secondary)}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="my-8"
        style={{ borderTop: `1px solid ${BRAND.dark}` }}
      ></div>

      {/* Bottom note */}
      <div className="mt-8 text-center text-xs" style={{ color: "#9ca3af" }}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: BRAND.accent, fontWeight: "bold" }}>K3Bot</span>. All
          rights reserved.
        </p>
        <p className="mt-1 font-medium" style={{ color: "#9ca3af" }}>
          Built for Africa’s digital future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
