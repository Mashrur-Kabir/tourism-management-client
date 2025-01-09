import { useState } from "react";
import { FaMapMarkedAlt, FaStar, FaUtensils, FaClock, FaChevronDown } from "react-icons/fa";

const Tour = () => {
    const [destination, setDestination] = useState("");
    const [rating, setRating] = useState(4);
    const [foodPreference, setFoodPreference] = useState("Vegetarian");
    const [visitTime, setVisitTime] = useState("Moderate");
    const [isFoodDropdownOpen, setFoodDropdownOpen] = useState(false);
    const [isVisitTimeDropdownOpen, setVisitTimeDropdownOpen] = useState(false);

    // Dropdown options
    const foodOptions = ["Vegetarian", "Non-Vegetarian", "Vegan"];
    const visitTimeOptions = ["Low (off-season)", "Moderate", "High (peak season)"];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {/* Destination */}
                <div className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md">
                    <label className="font-semibold mb-2 text-purple-600">Touring Spot</label>
                    <div className="relative">
                        <div className="flex items-center text-2xl">
                            <input
                                type="text"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                placeholder="Set a place"
                                className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                            />
                            <FaMapMarkedAlt className="ml-2" />
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md">
                    <label className="font-semibold mb-2 text-purple-600">Rating</label>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer text-2xl ${
                                    star <= rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>
                </div>

                {/* Food Preference Dropdown */}
                <div className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md">
                    <label className="font-semibold mb-2 text-purple-600">Food Preference</label>
                    <div className="relative flex items-center gap-3">
                        <button
                            onClick={() => setFoodDropdownOpen(!isFoodDropdownOpen)}
                            className="flex justify-between items-center bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                        >
                            {foodPreference}
                            <FaChevronDown
                                className={`text-purple-600 transition-transform duration-300 ${
                                    isFoodDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        <FaUtensils className="text-xl"></FaUtensils>
                        {isFoodDropdownOpen && (
                            <ul className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out">
                                {foodOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setFoodPreference(option);
                                            setFoodDropdownOpen(false);
                                        }}
                                        className="cursor-pointer px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Time of Visit Dropdown */}
                <div className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md">
                    <label className="font-semibold mb-2 text-purple-600">Time of Visit</label>
                    <div className="relative flex items-center gap-3">
                        <button
                            onClick={() => setVisitTimeDropdownOpen(!isVisitTimeDropdownOpen)}
                            className="flex justify-between items-center bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                        >
                            {visitTime}
                            <FaChevronDown
                                className={`text-purple-600 transition-transform duration-300 ${
                                    isVisitTimeDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        <FaClock className="text-xl"></FaClock>
                        {isVisitTimeDropdownOpen && (
                            <ul className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out">
                                {visitTimeOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setVisitTime(option);
                                            setVisitTimeDropdownOpen(false);
                                        }}
                                        className="cursor-pointer px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
                <button className="bg-purple-600 font-carme font-medium text-[1rem] text-white py-3 px-6 rounded-lg hover:bg-purple-500">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Tour;
