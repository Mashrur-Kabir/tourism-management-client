import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Flight = () => {
    const [selected, setSelected] = useState("One Way"); // Default selected button

    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out" });
    }, []);

    const handleButtonClick = (option) => {
        setSelected(option);
    };

    return (
        <div>
            {/* Button Group */}
            <div
                className="flex justify-center gap-6 mt-4 text-[1rem] text-gray-600"
                data-aos="fade-up"
            >
                {["One Way", "Roundtrip", "Multi city"].map((option) => (
                    <button
                        key={option}
                        onClick={() => handleButtonClick(option)}
                        className={`px-4 py-2 rounded transition-all duration-300 ${
                            selected === option
                                ? "bg-purple-600 text-white"
                                : "bg-transparent hover:text-purple-600"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Input Cards */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
                data-aos="fade-up"
            >
                {/* From */}
                <div
                    className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    <label className="font-semibold mb-2 text-purple-600">From</label>
                    <div className="flex items-center gap-2">
                        <FaPlaneDeparture className="text-purple-600" />
                        <input
                            type="text"
                            defaultValue="New York"
                            className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                        />
                    </div>
                    <input
                        type="text"
                        defaultValue="JFK - John F. Kennedy International"
                        className="text-lg font-rubik text-gray-500 w-full mt-1 bg-transparent focus:outline-none"
                    />
                </div>

                {/* To */}
                <div
                    className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                >
                    <label className="font-semibold mb-2 text-purple-600">To</label>
                    <div className="flex items-center gap-2">
                        <FaPlaneArrival className="text-purple-600" />
                        <input
                            type="text"
                            defaultValue="London"
                            className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                        />
                    </div>
                    <input
                        type="text"
                        defaultValue="LCY - London city airport"
                        className="text-lg font-rubik text-gray-500 w-full mt-1 bg-transparent focus:outline-none"
                    />
                </div>

                {/* Journey Date */}
                <div
                    className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <label className="font-semibold mb-2 text-purple-600">Journey date</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="date"
                            defaultValue="2022-05-05"
                            className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                        />
                    </div>
                    <input
                        type="text"
                        defaultValue="Thursday"
                        className="text-lg font-rubik text-gray-500 w-full mt-1 bg-transparent focus:outline-none"
                    />
                </div>

                {/* Passenger Class */}
                <div
                    className="flex flex-col bg-purple-50 p-4 rounded-lg shadow-md"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                >
                    <label className="font-semibold mb-2 text-purple-600">Passenger, Class</label>
                    <input
                        type="text"
                        defaultValue="0 Passenger"
                        className="bg-transparent font-rubik text-black text-2xl font-bold w-full focus:outline-none"
                    />
                    <input
                        type="text"
                        defaultValue="Business"
                        className="text-lg font-rubik text-gray-500 w-full mt-1 bg-transparent focus:outline-none"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6" data-aos="fade-down">
                <button className="bg-purple-600 font-carme font-medium text-[1rem] text-white py-3 px-6 rounded-lg hover:bg-purple-500">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Flight;
