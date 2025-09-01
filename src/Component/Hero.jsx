import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import ChatboxAnimation from "../assets/Chatbox.json";
import { FaCheckCircle } from "react-icons/fa";
import { backendUrl } from "../App";
// Import images from assets
import HospitalImg from "../assets/Hospital.png";
import PillsImg from "../assets/Pills.png";
import PharmacyImg from "../assets/FirstAid.png";
import PlaneImg from "../assets/Plane.png";

// Simple African country code list (can be expanded)
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
      const res = await fetch(`${backendUrl}/api/demo/demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <div className="relative font-sans py-16 md:py-0 bg-gradient-to-br from-[#F9FAFB] to-[#e6f7ff]">
      {/* HERO Section */}
      <section
        id="hero-section"
        className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-32 lg:px-56 transition-all duration-300 ${
          showModal ? "blur-md scale-105 pointer-events-none select-none" : ""
        }`}
        aria-hidden={showModal ? "true" : "false"}
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-10">
          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-center gap-2">
            <h1 className="text-[22px] font-extrabold text-[#00BDFF] leading-tight w-1/2 drop-shadow-lg">
              Everything You Need to Automate WhatsApp
            </h1>
            <Lottie
              animationData={ChatboxAnimation}
              className="h-[120px] w-auto object-contain block"
            />
          </div>
          {/* Desktop Header */}
          <div className="hidden md:block">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#001B44] leading-tight ">
              Everything You Need to Automate{" "}
              <span className="text-[#A6EC49]">WhatsApp</span>
            </h1>
          </div>
          {/* Description & CTA */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-lg md:text-2xl lg:text-3xl text-[#374151] font-medium max-w-2xl mx-auto md:mx-0">
              Simple setup. Zero code.{" "}
              <span className="text-[#A6EC49] font-semibold">
                Powerful features
              </span>{" "}
              to scale your business communication.
            </h2>
            <div className="flex justify-center md:justify-start">
              <button
                className="text-white md:text-[30px] font-bold px-8 py-4 md:px-12 md:py-6 rounded-2xl bg-[#A6EC49] border-0 hover:bg-[#2e4b08ff] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00BDFF]/30"
                onClick={() => setShowModal(true)}
              >
                Get a Free Demo
              </button>
            </div>
          </div>
          {/* Feature List */}
          <div className="mt-6 space-y-3 text-left">
            <div className="flex flex-wrap gap-3">
              <p className="flex items-center text-[#00065A] text-base md:text-lg mr-4">
                <FaCheckCircle className="text-[#A6EC49] mr-2" /> Used by 200+
                Nigerian SMEs
              </p>
              <p className="flex items-center text-[#00065A] text-base md:text-lg mr-4">
                <FaCheckCircle className="text-[#A6EC49] mr-2" /> GDPR & WhatsApp
                Policy Compliant
              </p>
              <p className="flex items-center text-[#00065A] text-base md:text-lg">
                <FaCheckCircle className="text-[#A6EC49] mr-2" /> Supports
                Paystack, Flutterwave & More
              </p>
            </div>
          </div>
          {/* Mobile Icons */}
          <div className="flex md:hidden justify-center gap-3 mt-6">
            <img src={HospitalImg} alt="Hospital" className="mobile-img object-contain" />
            <img src={PillsImg} alt="Pills" className="mobile-img object-contain" />
            <img src={PharmacyImg} alt="Pharmacy" className="mobile-img object-contain" />
            <img src={PlaneImg} alt="Plane" className="mobile-img object-contain" />
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
          {/* Desktop Icons */}
          <div className="mt-10 hidden md:grid grid-cols-4 gap-8 text-center">
            <img src={HospitalImg} alt="Hospital" className="h-14 w-14 mx-auto object-contain" />
            <img src={PillsImg} alt="Pills" className="h-14 w-14 mx-auto object-contain" />
            <img src={PharmacyImg} alt="Pharmacy" className="h-14 w-14 mx-auto object-contain" />
            <img src={PlaneImg} alt="Plane" className="h-14 w-14 mx-auto object-contain" />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <>
          {/* Dim overlay */}
          <div
            className="fixed inset-0 z-40 bg-[#00065A]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
            aria-label="Close modal"
            tabIndex={-1}
          ></div>

          {/* Glassmorphism Modal */}
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
                <div className="mt-4 text-red-600 text-center font-semibold">{errorMsg}</div>
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
          @media (max-width: 767px) {
            #hero-section {
              min-height: 100dvh !important;
              padding-top: 2rem !important;
              padding-bottom: 0 !important;
            }
            .mobile-img {
              height: 56px !important;
              width: 56px !important;
            }
          }
          @media (min-width: 768px) {
            #hero-section {
              -height: 100vh !important;
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
