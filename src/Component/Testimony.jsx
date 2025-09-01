import React from "react";
import WhatsApp from "../assets/Whatsapp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Female from "../assets/Profile_F.jpg";
import Male from "../assets/Profile_M.jpg";

const BRAND = {
  primary: "#0052CC",
  secondary: "#00BDFF",
  accent: "#A6EC49",
  dark: "#00065A",
  light: "#F9FAFB",
  font: "'Inter', 'Segoe UI', Arial, sans-serif",
  borderRadius: "1.25rem",
  shadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const testimonials = [
  {
    image: Male,
    name: "Adigun Oreoluwa",
    position: "Web Developer",
    testimonial:
      "As a developer, I value tools that save time and simplify processes. K3Bot does exactly that with seamless automation that integrates effortlessly into my workflow.",
  },
  {
    image: Male,
    name: "Masskay",
    position: "Real estate manager, Site manager",
    testimonial:
      "Managing client communications in real estate can be overwhelming. K3Bot makes it easy to stay responsive, and that has helped us close deals faster.",
  },
  {
    image: Female,
    name: "Alao Tomilola",
    position: "CEO, Speedtouch LMT",
    testimonial:
      "For an e-commerce brand like ours, speed and customer engagement are everything. K3Bot ensures we respond instantly and keep customers happy.",
  },
  {
    image: Female,
    name: "DressTee",
    position: "CEO, DressTee",
    testimonial:
      "For a fashion brand like ours, speed and customer engagement are everything. K3Bot ensures we respond instantly and keep customers happy.",
  },
  {
    image: Male,
    name: "Adebayo",
    position: "CEO, Example Corp",
    testimonial:
      "K3Bot has streamlined how our business interacts with customers. It’s efficient, reliable, and has quickly become an essential tool for growth.",
  },
  {
    image: Male,
    name: "Olaitan's Farm",
    position: "Farm Manager",
    testimonial:
      "Running a farm means staying connected with customers and distributors. K3Bot helps us share updates, manage orders, and keep our community engaged with ease.",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 639, min: 0 }, items: 1 },
};

const Testimony = () => {
  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{
        fontFamily: BRAND.font,
        background: `radial-gradient(circle at top left, ${BRAND.accent}20, transparent 40%),
                     radial-gradient(circle at bottom right, ${BRAND.secondary}20, transparent 40%),
                     ${BRAND.light}`,
      }}
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: BRAND.primary }}
        >
          What Our Clients Say
        </h2>
        <p
          className="text-lg opacity-90"
          style={{ color: BRAND.dark }}
        >
          At K3Bot, our success is measured by the satisfaction and growth of the
          businesses we serve. From startups to enterprises, our clients rely on
          us to simplify engagement and streamline communication.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          showDots
          arrows={false}
          autoPlaySpeed={4000}
          keyBoardControl
          draggable
          containerClass="carousel-container"
          itemClass="px-3"
          renderDotsOutside
          customDot={<CustomDot />}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                borderRadius: BRAND.borderRadius,
                boxShadow: BRAND.shadow,
                border: `1px solid ${BRAND.secondary}30`,
                minHeight: "340px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4"
                style={{
                  borderColor: BRAND.accent,
                }}
              />
              <p
                className="mb-4 text-base leading-relaxed"
                style={{ color: BRAND.dark }}
              >
                {item.testimonial}
              </p>
              <h4
                className="text-lg font-semibold"
                style={{ color: BRAND.primary }}
              >
                {item.name}
              </h4>
              <span
                className="text-sm mt-1"
                style={{ color: BRAND.secondary }}
              >
                {item.position}
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

/* Custom Dots */
const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer transition-all ${
        active ? "bg-[#A6EC49] scale-110" : "bg-gray-300"
      }`}
      onClick={onClick}
    />
  );
};

export default Testimony;
