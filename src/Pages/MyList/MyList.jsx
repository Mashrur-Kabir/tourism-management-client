import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";

const MyList = () => {
    const { user, loading } = useContext(AuthContext); // Get logged-in user info from context
    const [touristSpots, setTouristSpots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

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

    // Fetch tourist spots for the logged-in user
    useEffect(() => {
        const fetchTouristSpots = async () => {
            if (!user) return;

            try {
                const response = await fetch(`http://localhost:3000/topSpots?email=${user.email}`);
                const data = await response.json();
                setTouristSpots(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching tourist spots:", error);
                toast.error("Failed to fetch tourist spots. Please try again.");
                setIsLoading(false);
            }
        };

        fetchTouristSpots();
    }, [user]);

    // Delete tourist spot
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this spot?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`/api/tourist-spots/${id}`, { method: "DELETE" });
            if (response.ok) {
                setTouristSpots(touristSpots.filter((spot) => spot._id !== id));
                toast.success("Tourist spot deleted successfully.");
            } else {
                toast.error("Failed to delete the spot. Please try again.");
            }
        } catch (error) {
            console.error("Error deleting tourist spot:", error);
            toast.error("Failed to delete the spot. Please try again.");
        }
    };

    // Update tourist spot (navigate to update page)
    const handleUpdate = (id) => {
        window.location.href = `/update-tourist-spot/${id}`;
    };

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-14">
            <h1 className="text-3xl font-rubik font-bold text-violet-700 text-center mb-6">
                {renderAnimatedLetters("My Tourist Spots")}
            </h1>
            {loading || isLoading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : touristSpots.length > 0 ? (
                <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-pink-700 to-purple-700 text-white">
                        <tr className="font-rubik"
                            data-aos="fade-up"
                        >
                            <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Location</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Average Cost</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {touristSpots.map((spot, index) => (
                            <tr
                                key={spot._id}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                                } hover:bg-purple-50 transition duration-300`}
                                data-aos="fade-up"
                            >
                                <td className="px-6 font-carme font-bold py-4 text-sm text-gray-700">
                                    {spot.tourists_spot_name} {/* Correct field for name */}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-carme font-bold">
                                    {spot.location}, {spot.country_name} {/* Correct fields for location and country */}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-carme font-bold">
                                    ${spot.average_cost} {/* Correct field for average cost */}
                                </td>
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <button
                                        onClick={() => handleUpdate(spot._id)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-800 rounded-full mr-2 transition duration-300"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(spot._id)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-500 hover:to-pink-800 rounded-full transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-600 text-center mt-8">You haven&apos;t added any tourist spots yet.</p>
            )}
        </div>
    );
};

export default MyList;


