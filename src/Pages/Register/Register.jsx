import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //create user in Auth
        createUser(email, password)
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 to-sky-700">
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
        </div>
    );
};

export default Register;
