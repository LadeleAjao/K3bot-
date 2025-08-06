import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App"

const countryOptions = [
  { code: "+234", label: "🇳🇬 Nigeria" },
  { code: "+233", label: "🇬🇭 Ghana" },
  { code: "+254", label: "🇰🇪 Kenya" },
  { code: "+27", label: "🇿🇦 South Africa" },
  { code: "+20", label: "🇪🇬 Egypt" },
  { code: "+212", label: "🇲🇦 Morocco" },
  { code: "+250", label: "🇷🇼 Rwanda" },
  { code: "+256", label: "🇺🇬 Uganda" },
  { code: "+255", label: "🇹🇿 Tanzania" },
  { code: "+251", label: "🇪🇹 Ethiopia" },
  { code: "other", label: "🌍 Other" },
];

const Signup = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [countryCode, setCountryCode] = useState("+234");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    countryCode: "+234",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setFormData((prev) => ({
      ...prev,
      phone: e.target.value,
      countryCode: countryCode,
    }));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${backendUrl}/api/signup`, formData);
    alert(res.data.message);
  } catch (err) {
    alert("Failed to store signup data");
    console.error(err);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-green-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-green-700">
          Create Your Account
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Your Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Business Name *
            </label>
            <input
              type="text"
              name="business"
              placeholder="Your business name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.business}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone Number with Country Code (Short List) */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone Number *
            </label>
            <div className="flex">
              <select
                className="border border-gray-300 rounded-l-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                value={countryCode}
                onChange={handleCountryCodeChange}
                style={{ minWidth: 90 }}
              >
                {countryOptions.map(opt => (
                  <option key={opt.code} value={opt.code}>
                    {opt.label} ({opt.code !== "other" ? opt.code : ""})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password *
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mt-1"
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-green-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={!acceptedTerms}
              className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
                acceptedTerms
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;