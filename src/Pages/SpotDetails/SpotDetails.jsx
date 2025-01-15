import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SpotDetails = () => {
  const spot = useLoaderData(); // Access the data loaded by the loader

  // Initialize AOS for animations
  AOS.init({
    duration: 900,
    once: true,
  });

  // Helper function to render letters with staggered animation
  const renderAnimatedLetters = (text) =>
    text.split("").map((letter, index) => (
      <span
        key={index}
        className="inline-block"
        data-aos="fade-right"
        data-aos-delay={`${index * 100}`} // Stagger animation with delay
      >
        {letter === " " ? "\u00A0" : letter} {/* Keep spaces visible */}
      </span>
    ));

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Spot Name */}
      <h1 className="text-3xl font-rubik font-bold text-violet-700 text-center mb-6">
        {renderAnimatedLetters(spot.tourists_spot_name)}
      </h1>

      {/* Spot Image */}
      <img
        src={spot.image}
        alt={spot.tourists_spot_name}
        className="w-full h-96 object-cover rounded-lg mt-4"
        data-aos="zoom-in"
      />

      {/* Spot Description */}
      <p className="text-gray-600 text-lg mt-6 font-ubuntu" data-aos="fade-up">
        {spot.description}
      </p>

      {/* Spot Location */}
      <p className="text-gray-700 text-md mt-4 font-rubik" data-aos="fade-up">
        <span className="font-medium">Location:</span> {spot.location},{" "}
        {spot.country_name}
      </p>

      {/* Average Cost and Book Now Button */}
      <div className="flex justify-start gap-5 items-center mt-4">
        {/* Average Cost */}
        <p
          className="text-violet-600 text-xl font-medium"
          data-aos="fade-up"
        >
          Average Cost: ${spot.average_cost}
        </p>

        {/* Book Now Button */}
        <button
          data-aos="fade-up"
          className="relative inline-block px-8 py-3 font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-800 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out">
            Book Now
          </span>
          <span className="absolute inset-0 w-full h-full border-2 border-transparent rounded-lg transition-all duration-300 ease-out"></span>
          <span className="absolute inset-0 w-full h-full rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 ease-out"></span>
        </button>
      </div>

      {/* New Information */}
      <div className="mt-6" data-aos="fade-up">
        <p className="text-gray-700 text-md mt-4 font-rubik">
          <span className="font-medium">Seasonality:</span> {spot.seasonality}
        </p>
        <p className="text-gray-700 text-md mt-4 font-rubik">
          <span className="font-medium">Travel Time:</span> {spot.travel_time}
        </p>
        <p className="text-gray-700 text-md mt-4 font-rubik">
          <span className="font-medium">Average Visitors Per Year:</span>{" "}
          {spot.total_visitors.toLocaleString()}
        </p>
      </div>

      {/* User Name */}
      <p className="text-gray-500 text-md mt-6 text-right font-ubuntu italic">
        Added by {spot.user_name}
      </p>
    </div>
  );
};

export default SpotDetails;
