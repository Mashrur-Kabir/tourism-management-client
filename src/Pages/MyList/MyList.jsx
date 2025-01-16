import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import del from '../../assets/icons/delete.png';
import upd from '../../assets/icons/update.png';
import view from '../../assets/icons/view.png'
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import './MyList.css'

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

    console.log(user.email);

    // Fetch tourist spots for the logged-in user
    useEffect(() => {
        const fetchTouristSpots = async () => {
            if (!user || !user.email) return; // Ensure user and email exist
    
            try {
                const response = await fetch(`http://localhost:3000/oneTopSpots?email=${user.email}`); // hitting data on endpoint
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
        Swal.fire({
            title: "Are you sure you want to delete this?",
            text: "this action is irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!",
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    fetch(`http://localhost:3000/delSpots/${id}`, { 
                    method: "DELETE" 
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Deleted spot:", data);
                    if (data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success",
                          });
                          const remaining = touristSpots.filter((spot) => spot._id !== id);
                          setTouristSpots(remaining);
                    }
                })
                } catch (error) {
                    console.error("Error deleting tourist spot:", error);
                    toast.error("Failed to delete the spot. Please try again.");
                }
            }
        })
    };

    // Update tourist spot (navigate to update page)
    const handleUpdate = (id) => {
        window.location.href = `/updateSpot/${id}`;
    };

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-14 mb-32">
            <h1 className="text-3xl font-rubik font-bold text-violet-700 text-center mb-6">
                {renderAnimatedLetters("My Tourist Spots")}
            </h1>
            {loading || isLoading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : touristSpots.length > 0 ? (
                <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-pink-700 to-purple-700 text-white">
                        <tr className="font-rubik" data-aos="fade-up">
                            <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Location</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Average Cost</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {touristSpots.map((spot, index) => (
                            <tr
                                key={spot._id}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                                } hover:bg-purple-50 transition duration-300`}
                                data-aos="fade-up"
                            >
                                <td className="px-6 font-carme font-bold py-4 text-sm text-gray-700">
                                    {spot.tourists_spot_name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-carme font-bold">
                                    {spot.location}, {spot.country_name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-carme font-bold">
                                    ${spot.average_cost}
                                </td>
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <button
                                        data-tooltip-id="updateTooltip"
                                        data-tooltip-content="Update spot"
                                        onClick={() => handleUpdate(spot._id)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-200 to-slate-400 hover:from-green-600 hover:to-emerald-900 rounded-full mr-2 transition duration-300"
                                    >
                                        <img className="w-5 h-5" src={upd} alt="upd" />
                                    </button>
                                    <button
                                        data-tooltip-id="deleteTooltip"
                                        data-tooltip-content="Delete spot"
                                        onClick={() => handleDelete(spot._id)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-200 to-slate-400 hover:from-red-500 hover:to-pink-900 rounded-full transition duration-300"
                                    >
                                        <img className="w-5 h-5" src={del} alt="del" />
                                    </button>
                                    <Link
                                        data-tooltip-id="viewTooltip"
                                        data-tooltip-content="View details"
                                        to={`/details/${spot._id}`}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-200 to-slate-400 hover:from-yellow-600 hover:to-amber-800 rounded-full transition duration-300"
                                    >
                                        <img className="w-5 h-5" src={view} alt="view" />
                                    </Link>
                                    <Tooltip 
                                        id="updateTooltip" 
                                        className="custom-tooltip" 
                                        place="top" 
                                        effect="solid" 
                                        />
                                    <Tooltip 
                                        id="deleteTooltip" 
                                        className="custom-tooltip" 
                                        place="top" 
                                        effect="solid" 
                                    />
                                    <Tooltip 
                                        id="viewTooltip" 
                                        className="custom-tooltip" 
                                        place="top" 
                                        effect="solid" 
                                    />
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


// tippy.js as an alt for tooltips