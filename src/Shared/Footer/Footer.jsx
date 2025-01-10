import logo from '../../assets/icons/travel.png'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-violet-950 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section - Logo and Contact Info */}
                <div className='font-rubik'>
                    <div className="flex items-center mb-4">
                        <img
                            src={logo}
                            alt="AndTour Logo"
                            className="h-8 w-auto mr-2"
                        />
                        <h1 className="font-semibold font-carme text-2xl">Mercury Travels</h1>
                    </div>
                    <p className="mb-2 text-gray-300">Need any help?</p>
                    <p className="text-yellow-500 font-bold mb-4">
                        Call Us: <span>(888) 1234 5678</span>
                    </p>
                    <address className="not-italic text-gray-300">
                        Love Street, Muscat, Oman<br />
                        example@trisog.com
                    </address>
                    <div className="flex gap-4 mt-4 text-gray-400">
                        <FaFacebook className="text-xl hover:text-white" />
                        <FaXTwitter className="text-xl ml-4 hover:text-white" />
                        <FaLinkedin className="text-xl ml-4 hover:text-white" />
                    </div>
                </div>

                {/* Middle Section - Links */}
                <div>
                    <h3 className="text-xl font-carme font-bold mb-2">Company</h3>
                    <ul className="text-gray-300 space-y-2 font-rubik">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white">Travel Guides</a></li>
                        <li><a href="#" className="hover:text-white">Data Policy</a></li>
                    </ul>
                </div>

                {/* Right Section - Newsletter */}
                <div>
                    <h3 className="text-xl font-bold mb-2 font-carme">Sign up Newsletter</h3>
                    <form className="flex flex-col gap-4 font-rubik">
                        <input
                            type="email"
                            placeholder="Enter email..."
                            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                    <p className="text-gray-300 mt-4 text-sm">© 2024 Trisog All Right Reserved</p>
                </div>
            </div>

        </footer>

    );
};

export default Footer;