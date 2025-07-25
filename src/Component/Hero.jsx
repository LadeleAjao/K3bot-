import React from "react";

const Hero = () => {
  return (
    <div className="py-20 bg-[#F9FAFB] h-[100vh] w-full flex justify-around items-center ">
      <div className="flex bg-green h-1/2  w-1/2 flex-col items-start space-y-5 p-3">
        <h1 className="text-6xl font-bold text-black">
          Everything You Need to Automate WhatsAppp
        </h1>
        <h2 className=" text-2xl font-medium text-black">
          Simple setup Zero code. Powerful features to scale your business
          communication
        </h2>
        <button className="text-white text-[20px] font-semibold px-8 py-4 rounded-lg bg-green-600 border border-green-600 shadow-[8px_8px_16px_#a7f3d0,-8px_-8px_16px_#ffffff] hover:bg-green-700 hover:border-green-700 active:shadow-[4px_4px_10px_#a7f3d0,-4px_-4px_10px_#ffffff] transition-all duration-300">
          Get a free demo
        </button>
      </div>
      <div className="flex w-1/2  bg-yellow-800 p-3 h-1/2 flex-col items-start space-y-5">
        <h1></h1>
      </div>
    </div>
  );
};

export default Hero;
