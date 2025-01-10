import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hotel = () => {
    const [category, setCategory] = useState("Luxury");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Example hotel categories
    const categories = ["Luxury", "Budget", "Family", "Business", "Resort"];

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setDropdownOpen(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            easing: "ease-in-out", // Animation easing
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                data-aos="fade-up"
            >
                {/* Category with Custom Dropdown */}
                <div
                    className="relative flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="zoom-in"
                >
                    <label className="font-semibold mb-2 text-purple-600">Category</label>
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="flex justify-between items-center bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                    >
                        {category}
                        <FaChevronDown
                            className={`text-purple-600 transition-transform duration-300 ${
                                isDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    {isDropdownOpen && (
                        <ul
                            className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out"
                            data-aos="fade-down"
                        >
                            {categories.map((cat, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleCategorySelect(cat)}
                                    className="cursor-pointer px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Check-In Date */}
                <div
                    className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="fade-right"
                >
                    <label className="font-semibold mb-2 text-purple-600">Check-In</label>
                    <input
                        type="date"
                        defaultValue="2022-06-01"
                        className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                    />
                </div>

                {/* Check-Out Date */}
                <div
                    className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="fade-left"
                >
                    <label className="font-semibold mb-2 text-purple-600">Check-Out</label>
                    <input
                        type="date"
                        defaultValue="2022-06-05"
                        className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div
                className="flex justify-center mt-6"
                data-aos="fade-down"
            >
                <button className="bg-purple-600 font-carme font-medium text-[1rem] text-white py-3 px-6 rounded-lg hover:bg-purple-500">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Hotel;
