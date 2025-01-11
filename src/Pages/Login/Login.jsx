import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopper, setShowPopper] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
        // Add your login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600">
            <div className="relative w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
            <h2
                className="text-3xl font-bold text-center text-gray-900 relative hover:cursor-pointer"
                onMouseEnter={() => setShowPopper(true)}
                onMouseLeave={() => setShowPopper(false)}
            >
                <span className="relative z-10">Welcome Back</span>

                {/* Party Popper Icons */}
                {showPopper && (
                    <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                        {/* Left Party Popper */}
                        <div className="flex gap-2 animate-popper-left">
                            🎉 🎊
                        </div>
                        {/* Right Party Popper */}
                        <div className="flex gap-2 animate-popper-right">
                            🎊 🎉
                        </div>
                    </div>
                )}
            </h2>

                <p className="text-sm font-rubik text-center text-gray-600">
                    Please login to your account
                </p>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
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
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-rubik font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm font-rubik text-center text-gray-600">
                    Don&apos;t have an account?{" "}
                    <NavLink
                        to="/register"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign Up
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
