import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import './Login.css'
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import google from '../../assets/icons/google.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopper, setShowPopper] = useState(false);

    const { logIn, signInWithGoogle } = useContext(AuthContext);

    /* success swal */
    const handleSuccessSwal = () => {
        // SweetAlert for successful login
        Swal.fire({
            icon:'success',
            title: 'Sign-In Successful',
            text: 'Welcome back! You are now logged in.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#4CAF50',
        });
        // Navigate after successful login
        //navigate(location?.state ? location.state : '/');
    }

    /* failed swal */
    const handleFailedSwal = (errorMessage) => {
        // SweetAlert for failed login
        Swal.fire({
            icon: 'error',
            title: 'Sign-In Failed',
            text: errorMessage,
            confirmButtonText: 'OK',
            confirmButtonColor: '#F44336',
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        //login
        logIn(email, password)
        .then((res) => {
            console.log('Logged in successfully', res.user);
            handleSuccessSwal();
        })
        .catch((error) => {
            console.error("Error during login:", error);

            let errorMessage = "An error occurred during login.";

            // Handling specific Firebase error codes
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No user found. Please make sure to register';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password. Please try again.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'Too many failed login attempts. Try again later.';
                    break;
                default:
                    errorMessage = 'Login failed. Please check your credentials.';
            }
            handleFailedSwal(errorMessage);
        });
        // Clear input fields
        e.currentTarget.reset();
    };

    /* google login */
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(res =>{
            console.log("Login successful!");
            console.log(res.user);
            handleSuccessSwal();
        })
        .catch(err => {
            let errorMessage = "An error occurred during login.";

            console.error("Error occurred: " + err.message);
            handleFailedSwal(errorMessage);
        })
    }

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

                {/* Social Login Buttons */}
                <div className='flex items-center justify-center mt-4 font-poppins gap-3'>
                    <p className="font-rubik text-gray-700">or, login with</p>
                    <button
                        onClick={handleGoogleSignIn}
                        type="submit"
                        className="w-1/4 flex justify-center py-2 px-3 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-400 hover:text-white active:scale-95"
                        >
                        <img className="h-6 w-6" src={google} alt="" />
                    </button>
                </div>

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
