import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams(); // Get spot ID from URL parameters (in Routes.jsx)
  const navigate = useNavigate(); // For navigation after update
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_name: "",
    location: "",
    description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    total_visitors: "",
    user_email: "",
    user_name: "",
  });

  // Fetch existing data for the tourist spot
  useEffect(() => {
    const fetchSpotData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/topSpots/${id}`);
        const data = await response.json();
        setFormData(data); // Pre-fill the form with existing data
      } catch (error) {
        console.error("Error fetching spot data:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to load spot data. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchSpotData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data Submitted:", formData);

    fetch(`http://localhost:3000/updateSpot/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Spot updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => navigate("/myList")); // Redirect to the list page
        } else {
          Swal.fire({
            title: "No Changes Made",
            text: "The spot was not updated.",
            icon: "info",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating spot:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to update spot. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-violet-700 mb-6">
          Update Tourist Spot
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image URL */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Tourist Spot Name */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">Tourist Spot Name</label>
            <input
              type="text"
              name="tourists_spot_name"
              value={formData.tourists_spot_name}
              onChange={handleChange}
              placeholder="Enter tourist spot name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Country Name */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">Country Name</label>
            <input
              type="text"
              name="country_name"
              value={formData.country_name}
              onChange={handleChange}
              placeholder="Enter country name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Other Fields */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold font-carme text-gray-600">Average Cost</label>
            <input
              type="number"
              name="average_cost"
              value={formData.average_cost}
              onChange={handleChange}
              placeholder="Enter average cost"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold font-carme text-gray-600">Seasonality</label>
            <select
              name="seasonality"
              value={formData.seasonality}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            >
              <option value="" disabled>
                Select a season
              </option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="All-Year">All-Year</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold font-carme text-gray-600">Travel Time</label>
            <input
              type="text"
              name="travel_time"
              value={formData.travel_time}
              onChange={handleChange}
              placeholder="e.g., 7 days"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          
          <div>
            <label className="block font-semibold font-carme text-gray-600">
              Total Visitors Per Year
            </label>
            <input
              type="number"
              name="total_visitors"
              value={formData.total_visitors}
              onChange={handleChange}
              placeholder="e.g., 10000"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          >
            Update Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
