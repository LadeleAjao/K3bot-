import React from "react";
import Lottie from "lottie-react";
import ChatboxAnimation from "../assets/Chatbox.json";

const Hero = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col md:flex-row items-center justify- px-6 md:px-32 lg:px-48 py-24 overflow-hidden">
      
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-10">
        
        {/* Mobile View*/}
        <div className="flex md:hidden items-center justify-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight w-1/2">
            Everything You Need to Automate WhatsApp
          </h1>
          <Lottie
            animationData={ChatboxAnimation}
            className="h-[150px] sm:h-[180px] w-auto object-contain block"
          />
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
            Everything You Need to Automate WhatsApp
          </h1>
        </div>

        {/* Description & CTA  */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-2xl mx-auto md:mx-0">
            Simple setup. Zero code. Powerful features to scale your business communication.
          </h2>
          <div className="flex justify-center md:justify-start">
            <button className="text-white text-[16px] md:text-[20px] font-semibold px-6 py-3 md:px-10 md:py-5 rounded-xl bg-green-600 border border-green-600 shadow-[6px_6px_12px_#a7f3d0,-6px_-6px_12px_#ffffff] hover:bg-green-700 hover:border-green-700 transition-all duration-300">
              Get a free demo
            </button>
          </div>
        </div>
      </div>

      {/* Right Side  */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 hidden md:flex justify-center">
        <Lottie
          animationData={ChatboxAnimation}
          className="max-h-[650px] lg:max-h-[750px] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
