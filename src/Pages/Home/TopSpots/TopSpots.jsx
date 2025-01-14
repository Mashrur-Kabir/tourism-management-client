import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import './TopSpots.css'

const TopSpots = ({ spot }) => {
    
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  return (
    <div
        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col"
        data-aos="fade-down"
        >
        <div className="relative overflow-hidden rounded-t-lg group">
            <img
            src={spot.image}
            alt={spot.tourists_spot_name}
            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            {/* Shiny effect */}
            <div className="absolute inset-0 z-10">
            <div className="shiny-effect"></div>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1">
            <h3 className="text-lg font-rubik font-semibold text-gray-800">
            {spot.tourists_spot_name}
            </h3>
            <p className="text-sm text-gray-500 mb-5 font-ubuntu">
            {spot.location}, {spot.country_name}
            </p>
            <p className="text-gray-700 text-sm line-clamp-3 font-rubik">
            {spot.description}
            </p>
        </div>

        {/* Footer Section */}
        <div className="p-4 flex justify-between items-center">
            <span className="text-xl font-rubik font-medium text-violet-600">
            ${spot.average_cost}
            </span>
            <Link
            to={`/details/${spot._id}`}
            className="px-4 py-2 bg-purple-600 font-rubik text-white text-sm font-medium rounded-lg hover:bg-purple-800 transition"
            >
            View Details
            </Link>
        </div>
    </div>

  );
};

TopSpots.propTypes = {
  spot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tourists_spot_name: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    average_cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      image: PropTypes.string,
      tourists_spot_name: PropTypes.string,
    })
  ),
  setSpots: PropTypes.func,
};

export default TopSpots;
