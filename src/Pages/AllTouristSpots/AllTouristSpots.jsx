import { useLoaderData } from "react-router-dom";
import AllSpotHere from "./AllSpotHere";
import AOS from "aos";
import { useEffect, useState } from "react";

const AllTouristSpots = () => {
    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    const allSpots = useLoaderData();
    const [sortedSpots, setSortedSpots] = useState(allSpots || []);
    const [sortOrder, setSortOrder] = useState("ascending");

    useEffect(() => {
        if (allSpots && allSpots.length > 0) {
            const sorted = [...allSpots].sort((a, b) =>
                sortOrder === "ascending"
                    ? a.average_cost - b.average_cost
                    : b.average_cost - a.average_cost
            );
            setSortedSpots(sorted);
        }
    }, [allSpots, sortOrder]);

    return (
        <div>
            {/* Page Header */}
            <h1 className="text-4xl mt-10 font-carme font-bold text-center text-violet-700 mb-6">
                {["Top", "Destinations"].map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block">
                        {Array.from(word).map((letter, letterIndex) => (
                            <span
                                key={letterIndex}
                                className="inline-block"
                                data-aos="fade-right"
                                data-aos-delay={`${wordIndex * 100 + letterIndex * 100}`}
                            >
                                {letter}
                            </span>
                        ))}
                        &nbsp; {/* Add a space between words */}
                    </span>
                ))}
            </h1>

            {/* Sort Dropdown */}
            <div className="mb-5 text-center">
                <select
                    id="sort"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 font-rubik border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-600 focus:border-violet-600"
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            {/* Spots Listing */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-5">
                {sortedSpots && sortedSpots.length > 0 ? (
                    sortedSpots.map((spot) => <AllSpotHere key={spot._id} spot={spot} />)
                ) : (
                    <p className="text-center text-gray-500 font-rubik text-3xl col-span-full">
                        No spots found :(
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllTouristSpots;
