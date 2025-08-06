import React from "react";
import WhatsApp from "../assets/Whatsapp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    image: WhatsApp,
    name: "John Doe",
    position: "CEO, Example Corp",
    testimonial:
      "K3Bot has transformed our customer engagement. The automation features are incredibly effective and easy to use.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    position: "Marketing Director, Sample Inc.",
    testimonial:
      "With K3Bot, we’ve seen a significant increase in our sales and customer satisfaction. It’s a game changer.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    position: "Operations Manager, Demo Ltd.",
    testimonial:
      "The ease of use and powerful features of K3Bot have made our operations much smoother and efficient.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Bob Brown",
    position: "CTO, Tech Solutions",
    testimonial:
      "K3Bot’s integration capabilities are top-notch. It fits perfectly into our existing tech stack.",
  },
  {
    image: WhatsApp,
    name: "John Doe",
    position: "CEO, Example Corp",
    testimonial:
      "K3Bot has transformed our customer engagement. The automation features are incredibly effective and easy to use.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    position: "Marketing Director, Sample Inc.",
    testimonial:
      "With K3Bot, we’ve seen a significant increase in our sales and customer satisfaction. It’s a game changer.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    position: "Operations Manager, Demo Ltd.",
    testimonial:
      "The ease of use and powerful features of K3Bot have made our operations much smoother and efficient.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Bob Brown",
    position: "CTO, Tech Solutions",
    testimonial:
      "K3Bot’s integration capabilities are top-notch. It fits perfectly into our existing tech stack.",
  },
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
    <div className="bg-white py-12 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
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
              className="bg-gray-100 shadow rounded-lg p-4 flex flex-col items-center text-center mx-1"
            >
              <img
                src={
                  typeof item.image === "string" ? item.image : item.image.src
                }
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 text-sm mb-3">{item.testimonial}</p>
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.position}</span>
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full bg-gray-300 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${
        active ? "bg-indigo-600" : "bg-gray-300"
      }`}
      onClick={onClick}
    />
  );
};

export default Testimony;
