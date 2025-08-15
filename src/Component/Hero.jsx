import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import ChatboxAnimation from "../assets/Chatbox.json";
import { FaCheckCircle, FaHospital, FaPills } from "react-icons/fa";
import { MdLocalPharmacy, MdFlight } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [processing, setProcessing] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef();

  const handleInputChange = (e) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const validate = (email) => {
    const regex = /^[^@]+@[^@]+\.[^@]{2,4}$/;
    return regex.test(email);
  };

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSuccessMsg("");
    setErrorMsg("");

    if (!validate(demoForm.email)) {
      setErrorMsg("Please enter a valid email address.");
      setProcessing(false);
      return;
    }

    try {
      await emailjs.send(
        "service_cli4c8k",
        "template_ptql1iv",
        {
          to_email: demoForm.email,
          from_name: demoForm.name,
          phone: demoForm.phone,
          reply_to: demoForm.email,
        },
        "2wiLQzKa6T7OvVkwU"
      );

      setSuccessMsg(`Welcome email sent to ${demoForm.email} successfully!`);
      setDemoForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setErrorMsg("Failed to send welcome email.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="relative">
      {/* HERO Section */}
      <section
        className={`w-full bg-[#F9FAFB] flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-32 lg:px-48 pt-20 md:pt-24 pb-16 md:py-24 overflow-hidden transition-all duration-300 ${
          showModal ? "blur-lg scale-105" : ""
        }`}
        style={{
          minHeight: "70vh",
        }}
        aria-hidden={showModal ? "true" : "false"}
        id="hero-section"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-8 md:space-y-10">
          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-center gap-2">
            <h1 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight w-1/2">
              Everything You Need to Automate WhatsApp
            </h1>
            <Lottie
              animationData={ChatboxAnimation}
              className="h-[110px] sm:h-[140px] w-auto object-contain block"
            />
          </div>
          {/* Desktop Header */}
          <div className="hidden md:block">
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
              Everything You Need to Automate WhatsApp
            </h1>
          </div>
          {/* Description & CTA */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-2xl mx-auto md:mx-0">
              Simple setup. Zero code. Powerful features to scale your business
              communication.
            </h2>
            <div className="flex justify-center md:justify-start">
              <button
                className="text-white text-[16px] md:text-[20px] font-semibold px-6 py-3 md:px-10 md:py-5 rounded-xl bg-green-600 border border-green-600 shadow-[6px_6px_12px_#a7f3d0,-6px_-6px_12px_#ffffff] hover:bg-green-700 hover:border-green-700 transition-all duration-300"
                onClick={() => setShowModal(true)}
              >
                Get a free demo
              </button>
            </div>
          </div>
          {/* Feature List */}
          <div className="mt-4 md:mt-6 space-y-2 md:space-y-4 text-left">
            <div className="flex flex-wrap gap-2 md:gap-0">
              <p className="flex items-center text-gray-800 text-base md:text-lg mr-4">
                <FaCheckCircle className="text-green-600 mr-2" /> Used by 200+
                Nigerian SMEs
              </p>
              <p className="flex items-center text-gray-800 text-base md:text-lg mr-4">
                <FaCheckCircle className="text-green-600 mr-2" /> GDPR &
                WhatsApp Policy Compliant
              </p>
              <p className="flex items-center text-gray-800 text-base md:text-lg">
                <FaCheckCircle className="text-green-600 mr-2" /> Supports
                Paystack, Flutterwave & More
              </p>
            </div>
          </div>
          {/* Mobile Icons */}
          <div className="flex md:hidden justify-center gap-2 mt-4 text-[26px] text-black">
            <FaHospital />
            <FaPills />
            <MdLocalPharmacy />
            <MdFlight />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
          {/* Animation */}
          <div className="hidden md:flex justify-center">
            <Lottie
              animationData={ChatboxAnimation}
              className="max-h-[650px] lg:max-h-[750px] w-auto object-contain"
            />
          </div>
          {/* Desktop Icons */}
          <div className="mt-8 hidden md:grid grid-cols-4 gap-6 text-center text-[40px] md:text-[50px] text-black">
            <FaHospital />
            <FaPills />
            <MdLocalPharmacy />
            <MdFlight />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <>
          {/* Dim overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Glassmorphism Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="relative bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-md flex flex-col items-center animate-pop-up"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 3px 0 rgba(0,0,0,0.05)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <button
                className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-white drop-shadow">
                Get a Free Demo
              </h2>
              <form
                ref={formRef}
                onSubmit={handleDemoSubmit}
                className="space-y-4 w-full"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/70"
                  value={demoForm.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/70"
                  value={demoForm.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/70"
                  value={demoForm.phone}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition"
                  disabled={processing}
                >
                  {processing ? "Processing..." : "Process"}
                </button>
              </form>
              {successMsg && (
                <div className="mt-4 text-green-600 text-center">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="mt-4 text-red-600 text-center">{errorMsg}</div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Animations & Responsive Height */}
      <style>
        {`
          @keyframes pop-up {
            0% { transform: scale(0.8) translateY(40px); opacity: 0; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-pop-up {
            animation: pop-up 0.4s cubic-bezier(.22,1,.36,1) both;
          }
          /* Responsive hero height: 70vh for mobile, 100vh for md+ */
          @media (min-width: 768px) {
            #hero-section {
              min-height: 100vh !important;
              padding-bottom: 6rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
