import React from "react";
import ProfileImg from "../assets/Profile.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const BRAND = {
  primary: "#00065A", // Dark navy
  cyan: "#00BDFF", // Accent cyan
  green: "#A6EC49", // Success green
  light: "#F9FAFB", // Neutral light
  font: "'Avenir', 'Segoe UI', Arial, sans-serif",
  shadow: "0 6px 20px rgba(0, 6, 90, 0.15)",
};

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-6"
      style={{ backgroundColor: BRAND.light, fontFamily: BRAND.font }}
    >
      {/* Page Title */}
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-3 tracking-wide uppercase"
        style={{ color: BRAND.primary }}
      >
        About Us
      </h1>
      <p
        className="text-center text-lg md:text-xl mb-12 max-w-2xl"
        style={{ color: BRAND.primary }}
      >
        Empowering African SMEs with{" "}
        <span style={{ color: BRAND.cyan, fontWeight: "700" }}>AI automation</span>.
      </p>

      {/* Content Wrapper */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-12 md:gap-20">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={ProfileImg}
            alt="Ladele Ajao"
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-2xl object-cover"
            style={{ boxShadow: BRAND.shadow }}
          />
        </div>

        {/* Founder Info */}
        <div className="flex-1">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2 uppercase tracking-wide"
            style={{ color: BRAND.primary }}
          >
            Meet the Founder
          </h2>
          <p
            className="font-semibold text-base md:text-lg mb-4"
            style={{ color: BRAND.cyan }}
          >
            Ladele Ajao &bull; CEO &amp; Founder of K3Bot
          </p>

          <p
            className="mb-6 leading-relaxed text-base md:text-lg"
            style={{ color: "#222" }}
          >
            Ladele Ajao is the visionary founder and CEO of K3Bot, an
            AI-powered automation platform designed to help African businesses
            streamline their operations, scale customer engagement, and grow
            revenue with intelligent, no code tools.
            <br />
            <br />
            Originally from Oyo State, Nigeria, and now based in Australia,
            Ladele brings a global perspective to local problems. With a solid
            background in IT support, infrastructure, and business systems, he
            has spent over a decade helping organisations adopt technology that
            drives real-world impact.
            <br />
            <br />
            Through K3Bot, Ladele is on a mission to make automation accessible
            for Nigerian SMEs starting with WhatsApp automation and expanding
            into broader business tools. His platform supports industries such
            as retail, healthcare, logistics, real estate, and education.
            <br />
            <br />
            Beyond K3Bot, Ladele is the host of The Oyo Playbook, a content
            platform and podcast where he shares insights on entrepreneurship,
            artificial intelligence, and innovation from an African perspective.
            He is deeply passionate about building sustainable, smart businesses
            that empower people and communities.
            <br />
            <br />
            Ladele isn’t just building software—he’s building a movement for
            digital transformation in Africa.
          </p>

          {/* Quote */}
          <blockquote
            className="italic text-lg border-l-4 pl-4 mb-6"
            style={{ borderColor: BRAND.green, color: BRAND.primary }}
          >
            "My mission is to simplify technology so African businesses can
            scale with confidence."
          </blockquote>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ladele-ajao/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-3xl transition transform hover:scale-110"
              style={{ color: BRAND.primary }}
            >
              <FaLinkedin />
            </a>
            {/* <a
              href="https://twitter.com/ladeleajao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-3xl transition transform hover:scale-110"
              style={{ color: BRAND.primary }}
            >
              <FaTwitter />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
