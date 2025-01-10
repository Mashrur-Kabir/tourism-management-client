import { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import bgp from "../../assets/bg-img/pexels-asadphoto-1450340.jpg";
import Flight from "./Flight";
import Tour from "./Tour";
import Hotel from "./Hotel";
import cameraLady from '../../assets/bg-img/pexels-haleyve-2087391.jpg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    const [selectedTab, setSelectedTab] = useState("Flight");

    const renderContent = () => {
        switch (selectedTab) {
            case "Flight":
                return <Flight />;
            case "Tour":
                return <Tour></Tour>;
            case "Hotel":
                return <Hotel></Hotel>;
            default:
                return null;
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-in-out" });
    }, []);

    return (
        <div id="top">
            <section className="relative">
                {/* Background Image */}
                <div
                    className="w-full h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgp})`,
                    }}
                    data-aos="fade-in"  // Apply AOS animation to the whole section
                    data-aos-duration="500" // Set animation duration
                >
                    {/* Top Overlay Content */}
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
                        <h1
                            className="text-4xl font-rubik md:text-7xl font-bold mb-4"
                            data-aos="fade-up"  // Apply AOS animation to the heading
                            data-aos-duration="700"  // Set duration for heading
                            data-aos-delay="100"  // Optional delay for the heading
                        >
                            Explore the world together
                        </h1>
                        <p
                            className="text-lg md:text-2xl mb-32 font-ubuntu font-medium"
                            data-aos="fade-up"  // Apply AOS animation to the paragraph
                            data-aos-duration="900"  // Set duration for paragraph
                            data-aos-delay="300"  // Optional delay for the paragraph
                        >
                            Find awesome flights, hotel tours, car, and packages
                        </p>
                    </div>
                </div>

                {/* Card Overlay Content */}
                <div className="absolute w-full max-w-6xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full">
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg relative">
                        {/* Tabs */}
                        <div className="absolute -top-8 left-1/2 font-ubuntu font-medium transform -translate-x-1/2 w-max">
                            <div className="bg-white rounded-full shadow-md px-4 py-2 flex gap-4 text-sm md:text-base">
                                <button
                                    onClick={() => setSelectedTab("Flight")}
                                    className={`hover:bg-purple-600 hover:text-white px-6 py-2 rounded-full flex items-center gap-2 ${
                                        selectedTab === "Flight" ? "bg-purple-600 text-amber-300" : ""
                                    }`}
                                >
                                    <IoAirplane /> Flights
                                </button>
                                <button
                                    onClick={() => setSelectedTab("Tour")}
                                    className={`hover:bg-purple-600 hover:text-white px-6 py-2 rounded-full flex items-center gap-2 ${
                                        selectedTab === "Tour" ? "bg-purple-600 text-amber-300" : ""
                                    }`}
                                >
                                    <MdTravelExplore /> Tours
                                </button>
                                <button
                                    onClick={() => setSelectedTab("Hotel")}
                                    className={`hover:bg-purple-600 hover:text-white px-6 py-2 rounded-full flex items-center gap-2 ${
                                        selectedTab === "Hotel" ? "bg-purple-600 text-amber-300" : ""
                                    }`}
                                >
                                    <FaHotel /> Hotels
                                </button>
                            </div>
                        </div>

                        {/* Render Selected Tab Content */}
                        {renderContent()}
                    </div>
                </div>
            </section>

            <section id="why-choose-us" className="relative mt-80 mb-48 z-10">
                <div className="flex gap-4 items-center justify-center md:justify-between max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                    {/* Image and Experience Badge */}
                    <div
                        className="relative flex items-center justify-center mb-8 md:mb-0"
                        data-aos="fade-left"  // AOS animation for left to right fade-in
                        data-aos-duration="1200"  // Duration of the animation
                        data-aos-offset="200"    // Offset to trigger animation a little earlier
                    >
                        <img
                            src={cameraLady}
                            alt="Traveler"
                            className="w-full max-w-md rounded-md"
                        />
                        <div
                            className="absolute bottom-4 left-4 bg-purple-900 text-white px-4 py-3 rounded-md text-center font-rubik hover:bg-gradient-to-r hover:from-purple-900 hover:to-pink-900 hover:text-white transition-all duration-500 ease-in-out"
                            style={{
                                transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
                            }}
                            data-aos="fade-up"  // AOS animation for upward fade-in
                            data-aos-duration="1000"  // Duration for the animation
                        >
                            <span className="text-4xl md:text-5xl">10+</span>
                            <br />
                            <span className="text-sm">Years of Experience</span>
                        </div>
                    </div>

                    {/* Why Choose Us Content */}
                    <div
                        className="max-w-md text-center md:text-left"
                        data-aos="fade-right"  // AOS animation for right to left fade-in
                        data-aos-duration="1200"  // Duration of the animation
                        data-aos-offset="200"    // Offset to trigger animation a little earlier
                    >
                        <h2 className="text-violet-900 text-lg uppercase font-medium mb-2">Why Choose Us</h2>
                        <h3 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4 font-carme">
                            Plan Your Trip with Mercury
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed font-rubik">
                            Holistically optimize proactive strategic theme areas rather than effective manufactured products create.
                        </p>

                        {/* Features List */}
                        <ul className="grid grid-cols-2 gap-2 text-gray-800 text-sm font-medium font-ubuntu">
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Travel Plan
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Cheap Rates
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Hand-picked Tour
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Private Guide
                            </li>
                        </ul>

                        {/* Contact Button */}
                        <button className="ml-1.5 mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-500 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Back to Top Button */}
            <div className="fixed bottom-4 right-4 bg-gray-700 p-3 rounded-full text-white cursor-pointer hover:bg-yellow-500 transition">
                <a href="#top"><i className="fas fa-arrow-up"></i></a>
            </div>
        </div>
    );
};

export default Home;
