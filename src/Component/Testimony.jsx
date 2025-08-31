import React from "react";
import WhatsApp from "../assets/Whatsapp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Female from "../assets/Profile_F.jpg";
import Male from "../assets/Profile_M.jpg";

// --- BRAND COLORS (replace with your actual brand guide values) ---
const BRAND = {
  primary: "#0052CC", // Brand blue
  secondary: "#00BDFF", // Accent cyan
  accent: "#A6EC49", // Success green
  dark: "#00065A", // Brand dark
  light: "#F9FAFB", // Brand light background
  error: "#FF3B30", // Error red
  font: "'Inter', 'Segoe UI', Arial, sans-serif", // Brand font
  borderRadius: "1rem", // 16px
  shadow: "0 8px 32px 0 rgba(0,82,204,0.10), 0 1.5px 3px 0 rgba(0,0,0,0.05)",
};
// ---------------------------------------------------------------

const testimonials = [
  {
    image: Male,
    name: "Adigun Oreoluwa",
    position: "Web Developer",
    testimonial:
      "As a developer, I value tools that save time and simplify processes. K3Bot does exactly that with seamless automation that integrates effortlessly into my workflow.",
  },
  {
    image:Male ,
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
}

  // {
  //   image: "https://via.placeholder.com/150",
  //   name: "Alice Johnson",
  //   position: "Operations Manager, Demo Ltd.",
  //   testimonial:
  //     "From an operations perspective, K3Bot has cut down repetitive tasks and streamlined communication. It’s boosted our overall efficiency.",
  // },
  // {
  //   image: "https://via.placeholder.com/150",
  //   name: "Bob Brown",
  //   position: "CTO, Tech Solutions",
  //   testimonial:
  //     "As a CTO, integration is always a concern. K3Bot stands out because it fits perfectly into our existing systems without extra hassle.",
  // },
];


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const Testimony = () => {
  return (
    <div
      className="py-12 px-4 md:px-10"
      style={{
        fontFamily: BRAND.font,
        background: `linear-gradient(135deg, ${BRAND.light} 60%, #e6f7ff 100%)`,
        borderRadius: BRAND.borderRadius,
        boxShadow: BRAND.shadow,
      }}
    >
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: BRAND.primary, letterSpacing: ".01em" }}
      >
        What Our Clients Say
      </h2>
      <p
        className="text-center max-w-2xl mx-auto mb-8"
        style={{ color: BRAND.dark }}
      >
        At K3Bot, our success is measured by the satisfaction and growth of the
        businesses we serve. From small startups to established enterprises, our
        clients rely on us to simplify customer engagement and streamline
        communication. Here’s what some of them have to say about working with
        us.
      </p>

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
          itemClass="px-1"
          renderDotsOutside={true}
          customDot={<CustomDot />}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="shadow rounded-lg p-6 flex flex-col items-center text-center mx-1 border"
              style={{
                background: "#fff",
                borderColor: BRAND.secondary,
                borderRadius: BRAND.borderRadius,
                boxShadow: BRAND.shadow,
              }}
            >
              <img
                src={
                  typeof item.image === "string" ? item.image : item.image.src
                }
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4"
                style={{
                  borderColor: BRAND.accent,
                  borderWidth: "4px",
                  borderStyle: "solid",
                }}
              />
              <p className="mb-3" style={{ color: BRAND.dark, fontSize: "1rem" }}>
                {item.testimonial}
              </p>
              <h4
                className="text-lg font-semibold"
                style={{ color: BRAND.primary }}
              >
                {item.name}
              </h4>
              <span className="text-sm" style={{ color: BRAND.secondary }}>
                {item.position}
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${
        active ? "bg-[#A6EC49]" : "bg-gray-300"
      }`}
      onClick={onClick}
    />
  );
};

export default Testimony;