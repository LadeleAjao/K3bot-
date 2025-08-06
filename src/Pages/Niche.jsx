import React from "react";

const useCases = [
  {
    icon: (
      <span role="img" aria-label="Marketing" className="text-5xl text-green-600">📣</span>
    ),
    title: "Automated Marketing",
    desc: "Run drip campaigns, broadcast offers, and follow-up with leads on WhatsApp.",
    link: "#",
  },
  {
    icon: (
      <span role="img" aria-label="Lead Capture" className="text-5xl text-green-600">🩺</span>
    ),
    title: "Lead Capture",
    desc: "Capture, qualify, and book leads without juggling calls, emails, and spreadsheets.",
    link: "#",
  },
  {
    icon: (
      <span role="img" aria-label="eCommerce" className="text-5xl text-green-600">🛒</span>
    ),
    title: "eCommerce Sales",
    desc: "Let customers view products, place orders and get support directly on WhatsApp.",
    link: "#",
  },
  {
    icon: (
      <span role="img" aria-label="Booking" className="text-5xl text-green-600">📅</span>
    ),
    title: "Appointment Booking",
    desc: "Schedule meetings, send reminders, collect payments, and gather feedback, all from WhatsApp.",
    link: "#",
  },
];

const Niche = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 pt-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4">K3Bot Use Cases</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore how businesses like yours supercharge WhatsApp with K3Bot.
        </p>
        <button className="px-6 py-2 border border-green-600 rounded-lg text-green-700 font-semibold hover:bg-green-50 transition">
          Discover More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {useCases.map((uc, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4">{uc.icon}</div>
            <h2 className="text-xl font-bold mb-2">{uc.title}</h2>
            <p className="text-gray-600 mb-2">{uc.desc}</p>
            <a href={uc.link} className="text-green-600 font-semibold hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Niche;