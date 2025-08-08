import React from "react";
import Lottie from "lottie-react";
import ChatboxAnimation from "../assets/Chatbox.json";
import { FaCheckCircle, FaHospital, FaPills } from "react-icons/fa";
import { MdLocalPharmacy, MdFlight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-32 lg:px-48 py-24 overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-10">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-center gap-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-black leading-tight w-1/2">
            Everything You Need to Automate WhatsApp
          </h1>
          <Lottie
            animationData={ChatboxAnimation}
            className="h-[150px] sm:h-[180px] w-auto object-contain block"
          />
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block">
          <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
            Everything You Need to Automate WhatsApp
          </h1>
        </div>

        {/* Description & CTA */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-2xl mx-auto md:mx-0">
            Simple setup. Zero code. Powerful features to scale your business
            communication.
          </h2>
          <div className="flex justify-center md:justify-start">
            <button className="text-white text-[16px] md:text-[20px] font-semibold px-6 py-3 md:px-10 md:py-5 rounded-xl bg-green-600 border border-green-600 shadow-[6px_6px_12px_#a7f3d0,-6px_-6px_12px_#ffffff] hover:bg-green-700 hover:border-green-700 transition-all duration-300">
              Get a free demo
            </button>
          </div>
        </div>

        {/* Feature List */}
        <div className="mt-6 space-y-4 text-left">
          <p className="flex items-center text-gray-800 text-base md:text-lg">
            <FaCheckCircle className="text-green-600 mr-2" /> Used by 200+
            Nigerian SMEs
          </p>
          <p className="flex items-center text-gray-800 text-base md:text-lg">
            <FaCheckCircle className="text-green-600 mr-2" /> GDPR & WhatsApp
            Policy Compliant
          </p>
          <p className="flex items-center text-gray-800 text-base md:text-lg">
            <FaCheckCircle className="text-green-600 mr-2" /> Supports Paystack,
            Flutterwave & More
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
        {/* Animation */}
        <div className="hidden md:flex justify-center">
          <Lottie
            animationData={ChatboxAnimation}
            className="max-h-[650px] lg:max-h-[750px] w-auto object-contain"
          />
        </div>

        {/* Icons */}
        <div className="mt-10 grid grid-cols-4 gap-6 text-center text-[30px] sm:text-[40px] md:text-[50px] text-black">
          <FaHospital />
          <FaPills />
          <MdLocalPharmacy />
          <MdFlight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
