import React from "react";
import whatsappImg from "../assets/whatsapp.png";
import k3botw from "../assets/K3botW.png";
const Corefeautures = () => (
  <div className="bg-white py-7 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-green-700">
      Benefits of K3Bot
    </h2>
    <p className="text-center text-gray-600 mb-10">
      Automate, monetize, and scale your WhatsApp interactions with
    </p>
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      {/* Left: Features */}
      <div className="flex-1 space-y-10">
        <div>
          <div className="flex items-center mb-2">
            <span
              className="text-green-600 text-3xl mr-3"
              role="img"
              aria-label="clock"
            >
              🕒
            </span>
            <span className="text-xl font-bold text-green-700">
              24/7 Auto Replies
            </span>
          </div>
          <p className="text-gray-700 ml-10">
            Respond to frequently asked questions, greetings, and common actions
            automatically—round the clock.
          </p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <span
              className="text-green-600 text-3xl mr-3"
              role="img"
              aria-label="catalog"
            >
              💳
            </span>
            <span className="text-xl font-bold text-green-700">
              Product & Pricing Catalog
            </span>
          </div>
          <div className="text-gray-700 ml-10">
            Showcase your services or products beautifully inside WhatsApp to
            generate leads.
            <br />
            <ul className="list-disc ml-6 mt-2">
              <li>
                Create a clear user journey with navigable product lists within
                chat
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Right: Phone Image */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
        <img
          src={k3botw}
          alt="WhatsApp UI"
          className="w-[180px] md:w-[200px] rounded-xl shadow-lg"
        />
      </div>
    </div>
    {/* Cards grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-green-100">
        <div className="flex items-center mb-2">
          <span
            className="text-green-600 text-2xl mr-2"
            role="img"
            aria-label="booking"
          >
            🗒️
          </span>
          <span className="text-lg font-bold text-green-700">
            Booking & Order Capture
          </span>
        </div>
        <div className="text-gray-700 ml-8">
          Showcase your services or products beautifully inside WhatsApp too.
          <ul className="list-disc ml-6 mt-2">
            <li>Allow customers to request appointments and book slots</li>
            <li>Capture order details, quantities, addresses, and more.</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-green-100">
        <div className="flex items-center mb-2">
          <span
            className="text-green-600 text-2xl mr-2"
            role="img"
            aria-label="order"
          >
            🗒️
          </span>
          <span className="text-lg font-bold text-green-700">
            Booking & Order Capture
          </span>
        </div>
        <div className="text-gray-700 ml-8">
          K3Bot manages the entire booking and order process, facilitating
          seamless transactions.
          <ul className="list-disc ml-6 mt-2">
            <li>Simplify backend processes without coding</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-green-100">
        <div className="flex items-center mb-2">
          <span
            className="text-green-600 text-2xl mr-2"
            role="img"
            aria-label="sheets"
          >
            📄
          </span>
          <span className="text-lg font-bold text-green-700">
            Google Sheets Integration
          </span>
        </div>
        <div className="text-gray-700 ml-8">
          Sync customer responses, bookings, and data directly to Google Sheets.
          <ul className="list-disc ml-6 mt-2">
            <li>Simplify backend processes without coding</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-green-100">
        <div className="flex items-center mb-2">
          <span
            className="text-green-600 text-2xl mr-2"
            role="img"
            aria-label="phone"
          >
            📱
          </span>
          <span className="text-lg font-bold text-green-700">
            No App Needed
          </span>
        </div>
        <div className="text-gray-700 ml-8">
          Engage your audience on WhatsApp without forcing them to download
          additional apps.
          <ul className="list-disc ml-6 mt-2">
            <li>Accept a variety of payment options.</li>
            <li>Close more deals by ...</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Corefeautures;