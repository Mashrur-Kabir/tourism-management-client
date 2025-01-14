import { useState } from "react";
import Swal from "sweetalert2";

const AddTourSpot = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API logic here to save data
    fetch('http://localhost:3000/tourSpots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
        if (data.insertedId) {
          // Success Alert
          Swal.fire({
            title: "Success!",
            text: "Spot added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          // Error Alert
          Swal.fire({
            title: "Error!",
            text: "Failed to add spot. Please try again.",
            icon: "error",
            confirmButtonText: "Retry",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please check your connection.",
          icon: "error",
          confirmButtonText: "Close",
        });
      })
      .finally(() => {
        // Clear the form fields no matter the outcome
        setFormData({
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
      });
};

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-violet-700 mb-6">
          Add Tourist Spot
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

          {/* Tourists Spot Name */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">
              Tourist Spot Name
            </label>
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

          {/* Description */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">
              Short Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a short description"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Average Cost */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">
              Average Cost (in USD)
            </label>
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

          {/* Seasonality */}
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

          {/* Travel Time */}
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

          {/* Total Visitors Per Year */}
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

          {/* User Email */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">User Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block font-semibold font-carme text-gray-600">User Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-violet-700 text-white font-semibold rounded-lg hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Add Tourist Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTourSpot;
