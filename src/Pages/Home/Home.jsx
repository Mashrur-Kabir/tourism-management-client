import { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import bgp from "../../assets/bg-img/pexels-asadphoto-1450340.jpg";
import Flight from "./Flight";
import Tour from "./Tour";
import Hotel from "./Hotel";

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

    return (
        <section className="relative">
            {/* Background Image */}
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgp})`,
                }}
            >
                {/* Top Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl font-rubik md:text-7xl font-bold mb-4">
                        Explore the world together
                    </h1>
                    <p className="text-lg md:text-2xl mb-32 font-ubuntu font-medium">
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
    );
};

export default Home;
