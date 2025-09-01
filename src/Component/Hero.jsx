import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import ChatboxAnimation from "../assets/Chatbox.json";
import { FaCheckCircle } from "react-icons/fa";
import { backendUrl } from "../App";

const countryCodes = [
  { code: "+234", name: "Nigeria" },
  { code: "+254", name: "Kenya" },
  { code: "+233", name: "Ghana" },
  { code: "+27", name: "South Africa" },
  { code: "+225", name: "Ivory Coast" },
  { code: "+256", name: "Uganda" },
  { code: "+237", name: "Cameroon" },
  { code: "+250", name: "Rwanda" },
  { code: "+255", name: "Tanzania" },
  { code: "+212", name: "Morocco" },
];

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+234",
  });
  const [processing, setProcessing] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef();

  const handleInputChange = (e) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const handleCountryCodeChange = (e) => {
    setDemoForm({ ...demoForm, countryCode: e.target.value });
  };

  const validate = (email) => /^[^@]+@[^@]+\.[^@]{2,4}$/.test(email);

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
      const res = await fetch(`${backendUrl}/api/demo/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...demoForm,
          phone: `${demoForm.countryCode}${demoForm.phone}`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(`Welcome email sent to ${demoForm.email} successfully!`);
        setDemoForm({ name: "", email: "", phone: "", countryCode: "+234" });
      } else {
        setErrorMsg(data.message || "Failed to send welcome email.");
      }
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="relative font-sans py-16 md:py-0 overflow-hidden bg-gradient-to-br from-[#F9FAFB] to-[#e6f7ff] min-h-[100vh]">
      {/* HERO Section */}
      <section
        id="hero-section"
        className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-32 lg:px-56 transition-all duration-300 ${
          showModal ? "blur-md scale-105 pointer-events-none select-none" : ""
        }`}
        aria-hidden={showModal ? "true" : "false"}
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-center gap-4">
            <h1 className="text-[27px] font-extrabold text-[#00065A] leading-tight w-1/2 drop-shadow">
              No.1 Nigeria WhatsApp Automation Platform
            </h1>
            <Lottie
              animationData={ChatboxAnimation}
              className="h-[120px] w-auto object-contain block"
            />
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex flex-row items-center gap-4 md:gap-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#00065A] leading-tight drop-shadow">
              No.1 Nigeria WhatsApp <br />
              <span className="text-[#13D26B] bg-gradient-to-r from-[#13D26B] to-[#FFD600] bg-clip-text text-transparent">
                Automation
              </span>{" "}
              <span className="text-[#FFD600] bg-gradient-to-r from-[#FFD600] to-[#13D26B] bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-[#374151] text-lg md:text-xl font-medium max-w-2xl">
            Live Broadcasting, WhatsApp Marketing, and Product Catalog. Scale
            your business, engage customers, and drive sales directly on
            WhatsApp—the app they use every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 bg-[#A6EC49] text-[#00065A] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#00BDFF] hover:text-white transition"
              onClick={() => setShowModal(true)}
            >
              Start Your Free Trial
            </button>
            <button
              className="flex-1 bg-transparent text-[#00065A] font-bold px-6 py-3 rounded-lg border-2 border-[#00BDFF] hover:bg-[#00BDFF] hover:text-white transition"
              onClick={() => setShowModal(true)}
            >
              Watch a Demo
            </button>
          </div>

          {/* Feature List */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white border-l-4 border-[#A6EC49] px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#00BDFF] text-xl flex-shrink-0" />
              <span className="text-[#00065A] font-semibold text-base md:text-lg">
                24/7 Automation
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white border-l-4 border-[#A6EC49] px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#00BDFF] text-xl flex-shrink-0" />
              <span className="text-[#00065A] font-semibold text-base md:text-lg">
                Real-time Analytics
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white border-l-4 border-[#A6EC49] px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FaCheckCircle className="text-[#00BDFF] text-xl flex-shrink-0" />
              <span className="text-[#00065A] font-semibold text-base md:text-lg">
                98% Open Rate!
              </span>
            </div>
          </div>
        </div>

        {/* Right Side (Desktop Lottie) */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 hidden md:flex justify-center">
          <Lottie
            animationData={ChatboxAnimation}
            className="max-h-[650px] lg:max-h-[750px] w-auto object-contain"
          />
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[#00065A]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
            aria-label="Close modal"
            tabIndex={-1}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="relative bg-white/90 backdrop-blur-2xl border-2 border-[#00BDFF] shadow-2xl rounded-3xl p-8 sm:p-12 w-100 max-w-xs sm:max-w-md flex flex-col items-center animate-pop-up"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(0,6,90,0.18), 0 1.5px 3px 0 rgba(0,0,0,0.05)",
                maxHeight: "90vh",
                minHeight: "auto",
                overflowY: "auto",
              }}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-4 right-5 text-3xl text-[#00065A] hover:text-[#00BDFF] focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
                tabIndex={0}
              >
                &times;
              </button>
              <h2 className="text-3xl font-extrabold mb-6 text-center text-[#00065A] drop-shadow">
                Get a Free Demo
              </h2>
              <form
                ref={formRef}
                onSubmit={handleDemoSubmit}
                className="space-y-5 w-full"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-[#00BDFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-white text-[#001B44] font-medium"
                  value={demoForm.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border-2 border-[#00BDFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-white text-[#001B44] font-medium"
                  value={demoForm.email}
                  onChange={handleInputChange}
                  required
                />
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={demoForm.countryCode}
                    onChange={handleCountryCodeChange}
                    className="px-2 py-3 border-2 border-[#00BDFF] rounded-lg bg-white text-[#00065A] focus:outline-none font-medium"
                    required
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border-2 border-[#00BDFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDFF] bg-white text-[#001B44] font-medium"
                    value={demoForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold bg-[#A6EC49] text-[#00065A] hover:bg-[#00BDFF] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#00BDFF]/40"
                  disabled={processing}
                >
                  {processing ? "Processing..." : "Process"}
                </button>
              </form>
              {successMsg && (
                <div className="mt-4 text-[#3B7C0F] text-center font-semibold">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="mt-4 text-red-600 text-center font-semibold">
                  {errorMsg}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <style>
        {`
          @keyframes pop-up {
            0% { transform: scale(0.8) translateY(40px); opacity: 0; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-pop-up {
            animation: pop-up 0.4s cubic-bezier(.22,1,.36,1) both;
          }

          /* Mobile responsiveness (from second Hero) */
          @media (max-width: 767px) {
            #hero-section {
              max-height: 100vh !important;
              padding-top: 2rem !important;
              padding-bottom: 0 !important;
            }
          }

          @media (min-width: 768px) {
            #hero-section {
              -max-height: 100vh !important;
              padding-top: 8rem !important;
              padding-bottom: 8rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
