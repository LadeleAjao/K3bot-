import React, { useState } from "react";

const BRAND = {
  primary: "#00065A", // 60%
  secondary: "#00BDFF", // 30%
  accent: "#A6EC49", // 10%
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4" style={{ color: BRAND.primary }}>
          Contact Us
        </h2>
        <p className="text-lg mb-12" style={{ color: BRAND.secondary }}>
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form
            className="shadow-lg rounded-2xl p-8 md:w-2/3 text-left"
            style={{ backgroundColor: "#ffffff", border: `2px solid ${BRAND.accent}` }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: BRAND.primary }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none"
                  style={{ borderColor: BRAND.secondary, backgroundColor: "#F9FAFB" }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: BRAND.primary }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none"
                  style={{ borderColor: BRAND.secondary, backgroundColor: "#F9FAFB" }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: BRAND.primary }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none"
                  style={{ borderColor: BRAND.secondary, backgroundColor: "#F9FAFB" }}
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: BRAND.primary }}>
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Enter your country"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none"
                  style={{ borderColor: BRAND.secondary, backgroundColor: "#F9FAFB" }}
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1" style={{ color: BRAND.primary }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none"
                style={{ borderColor: BRAND.secondary, backgroundColor: "#F9FAFB" }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full font-semibold py-3 rounded-lg transition duration-300"
              style={{
                backgroundColor: BRAND.primary,
                color: "#ffffff",
                border: `2px solid ${BRAND.primary}`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = BRAND.secondary;
                e.currentTarget.style.borderColor = BRAND.secondary;
                e.currentTarget.style.color = "#00065A";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = BRAND.primary;
                e.currentTarget.style.borderColor = BRAND.primary;
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="md:w-1/3 text-left space-y-4">
            <h3 className="text-xl font-semibold" style={{ color: BRAND.primary }}>
              Contact Info
            </h3>
            <p className="text-sm" style={{ color: BRAND.secondary }}>
              Phone: <a href="tel:+2348022662256">+2348022662256</a>
            </p>
            <p className="text-sm" style={{ color: BRAND.secondary }}>
              Address: 7, Oluyoro Street, off Awolowo Avenue, Old Bodija, Ibadan
            </p>
            <p className="text-sm" style={{ color: BRAND.accent }}>
              We’ll get back to you within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
