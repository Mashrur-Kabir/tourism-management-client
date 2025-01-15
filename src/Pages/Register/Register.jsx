import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // data collection from form
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //create user in Auth
        createUser(email, password)
        .then((result) => {
            console.log("User created successfully", result.user);
            //send user data to server
            const users = {name, email}
            return fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(users),
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("User data sent to server:", data);
            form.reset();
            if(data.insertedId) {
                // Success Alert
                Swal.fire({
                    title: "Success!",
                    text: "User created successfully!",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                } else {
                // Error Alert
                Swal.fire({
                    title: "Error!",
                    text: data.message,
                    icon: "error",
                    confirmButtonText: "Try Again",
                }).then(() => {
                    setIsLoading(true); // Set the loader to true after clicking OK
                    setTimeout(() => {
                        navigate('/login');
                    }, 1500); // Delay for 1.5 seconds to show the loader
                });
            }
        })
        .catch((err) => {
            console.error("Error creating user:", err);
            form.reset();
            Swal.fire({
                title: "Error!",
                text: "Failed to create user. Please try again.",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 to-sky-700">
            {isLoading ? (
                // Show loader during navigation
                <div className="flex items-center justify-center min-h-screen">
                    <ClipLoader color="#4CAF50" size={60} />
                </div>
            ) : (
            
            <div className="relative w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-900">Create an Account</h2>
                <p className="text-sm font-rubik text-center text-gray-600">
                    Join us by creating a new account
                </p>
                <form className="space-y-6" onSubmit={handleRegister}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="Create a password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-rubik font-medium text-white bg-sky-700 rounded-lg hover:bg-sky-500 focus:ring-4 focus:ring-green-300 focus:outline-none"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm font-rubik text-center text-gray-600">
                    Already have an account?{" "}
                    <NavLink
                        to="/login"
                        className="font-medium text-sky-700 hover:underline"
                    >
                        Login
                    </NavLink>
                </p>
            </div>
        
            )}
        </div>
    );
};

export default Register;
