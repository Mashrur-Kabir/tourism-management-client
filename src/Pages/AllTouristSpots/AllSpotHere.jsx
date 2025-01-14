import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Assuming Link is from react-router-dom
import AOS from "aos";
import { useEffect } from "react";
const AllSpotHere = ({ spot }) => {

    useEffect(() => {
        AOS.init({ duration: 500, once: true });
      }, []);

    return (
        <div className="pb-10">
            <div
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full"
                data-aos="fade-down"
            >
                {/* Image Section */}
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
                <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-rubik font-semibold text-gray-800">
                        {spot.tourists_spot_name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 font-ubuntu">
                        {spot.location}, {spot.country_name}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-3 font-rubik mb-4">
                        {spot.description}
                    </p>
                </div>

                {/* Footer Section */}
                <div className="p-4 flex justify-between items-center mt-auto">
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
        </div>
    );
};

// Define PropTypes
AllSpotHere.propTypes = {
    spot: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        tourists_spot_name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        country_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        average_cost: PropTypes.number.isRequired,
    }).isRequired,
};

export default AllSpotHere;
