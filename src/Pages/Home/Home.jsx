import { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import bgp from "../../assets/bg-img/pexels-pixabay-50594.jpg";
import Flight from "./Flight";
import Tour from "./Tour";
import Hotel from "./Hotel";
import cameraLady from '../../assets/bg-img/whyUs.jpg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLoaderData } from "react-router-dom";
import TopSpots from "./TopSpots/TopSpots";
import comp1 from '../../assets/icons/comp1.jpg';
import comp2 from '../../assets/icons/comp2.jpg';
import comp3 from '../../assets/icons/comp3.jpg';
import comp4 from '../../assets/icons/comp4.jpg';
import workAni from '../../assets/animation/workAni.json'
import Lottie from "lottie-react";

const Home = () => {
    const spots = useLoaderData();
    console.log("Loaded spots:", spots);

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
        AOS.init({ duration: 400, easing: "ease-in-out" });
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

            <section id="why-choose-us" className="relative mt-[25rem] mb-48 z-10">
                <div className="flex gap-5 items-center justify-center md:justify-between max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                    {/* Image and Experience Badge */}
                    <div
                        className="relative flex items-center justify-center mb-8 md:mb-0"
                        data-aos="fade-right"  // Apply AOS animation for fade-in from right
                        data-aos-duration="1000"  // Longer duration for a smoother effect
                        data-aos-offset="300"    // Trigger a little earlier
                        data-aos-easing="ease-in-out" // Smoother easing
                    >
                        <img
                            src={cameraLady}
                            alt="Traveler"
                            className="w-full max-w-md rounded-md shadow-lg"
                        />
                        <div
                            className="absolute bottom-4 left-4 bg-purple-900 text-white px-4 py-3 rounded-md text-center font-rubik hover:bg-gradient-to-r hover:from-purple-900 hover:to-pink-900 hover:text-white transition-all duration-500 ease-in-out"
                            data-aos="fade-up"  // Apply AOS animation for upward fade-in
                            data-aos-duration="500"  // Duration for the animation
                            data-aos-delay="200"  // Slight delay for smoothness
                        >
                            <span className="text-4xl md:text-5xl">10+</span>
                            <br />
                            <span className="text-sm">Years of Experience</span>
                        </div>
                    </div>

                    {/* Why Choose Us Content */}
                    <div
                        className="max-w-md text-center md:text-left"
                        data-aos="fade-left"  // AOS animation for fade-in from left
                        data-aos-duration="1000"  // Longer duration for smoothness
                        data-aos-delay="400"  // Optional delay for smooth transition
                        data-aos-easing="ease-in-out" // Smoother easing for the content
                    >
                        <h2 className="text-violet-900 text-lg uppercase font-medium mb-2">Why Choose Us?</h2>
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
                        <button className="ml-1.5 mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-500 transition-all duration-500">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <section className="mt-40 mb-48">
                <h1 className="text-4xl font-carme font-bold text-center text-violet-700 mb-6">
                    {["Top", "Destinations"].map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block">
                        {Array.from(word).map((letter, letterIndex) => (
                            <span
                            key={letterIndex}
                            className="inline-block"
                            data-aos="fade-right"
                            data-aos-delay={`${(wordIndex * 100) + (letterIndex * 100)}`}
                            >
                            {letter}
                            </span>
                        ))}
                        &nbsp; {/* Add a space between words */}
                        </span>
                    ))}
                </h1>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-5">
                    {spots && spots.length > 0 ? (
                        spots.slice(0, 6).map((spot) => (  // Slice the first 6 spots
                            <TopSpots
                                key={spot._id}
                                spot={spot}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 text-rubik text-3xl col-span-full">
                            No spots found :(
                        </p>
                    )}
                </div>
            </section>

            <section id="trusted-partners" className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2
                    className="text-4xl font-carme font-bold text-violet-900 mb-8"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    >
                    Our Trusted Partners
                    </h2>
                    <p
                    className="text-gray-700 mb-12 leading-relaxed text-lg font-rubik"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="200"
                    >
                    We collaborate with the best in the industry to ensure your travel experience is exceptional. Here are some of our trusted partners who help make your trips memorable.
                    </p>
                    <div className="flex items-center gap-5">
                        <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        >

                            {/* Partner Logos */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src={comp1} alt="Partner 1" className="w-full h-auto" />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src={comp2} alt="Partner 2" className="w-full h-auto" />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src={comp3} alt="Partner 3" className="w-full h-auto" />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src={comp4} alt="Partner 4" className="w-full h-auto" />
                            </div>
    
                        </div>
                        {/* Lottie Animation */}
                        <div className="col-span-full flex items-center justify-center mt-8"
                             data-aos="fade-left"
                             data-aos-duration="1100"
                        >
                            <Lottie
                            animationData={workAni}
                            loop={true}
                            style={{ width: 250, height: 250 }}
                            />
                        </div>
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
