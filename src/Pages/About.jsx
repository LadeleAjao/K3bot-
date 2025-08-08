import React from "react";
import ProfileImg from "../assets/Profile.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-26 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-black">
        About Us
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-700 mb-10">
        Empowering African SMEs with AI automation.
      </p>
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <img
            src={ProfileImg}
            alt="Ladele Ajao"
            className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-xl object-cover shadow-md"
          />
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-1 text-black">
            Meet the Founder
          </h2>
          <p className="font-semibold text-base md:text-lg mb-2 text-black">
            Ladele Ajao &bull; CEO &amp; Founder of K3Bot
          </p>
          <p className="text-gray-900 mb-4 leading-relaxed text-base md:text-lg">
            Ladele Ajao is the visionary founder and CEO of K3Bot, an AI-powered
            automation platform designed to help African businesses streamline
            their operations, scale customer engagement, and grow revenue with
            intelligent, no code tools.
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
          <blockquote className="italic text-lg text-black border-l-4 border-green-600 pl-4 mb-4">
            "My mission is to simplify technology so African businesses can
            scale with confidence."
          </blockquote>
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://linkedin.com/in/ladeleajao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black text-2xl font-bold hover:text-green-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/ladeleajao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-black text-2xl font-bold hover:text-green-700 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
