import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/travel.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-violet-950 text-white p-4">
            <div className="flex items-center">
                <img
                    src={logo}
                    alt="AndTour Logo"
                    className="h-8 w-auto mr-2"
                />
                <h1
                    className="font-semibold font-carme text-2xl flex space-x-1 group"
                    onMouseEnter={(e) => {
                        const letters = e.currentTarget.querySelectorAll("span");
                        letters.forEach((letter, index) => {
                        letter.style.animation = "none"; // Reset animation
                        void letter.offsetWidth; // Trigger reflow to restart animation
                        letter.style.animation = `jump 0.5s ease-in-out forwards ${index * 0.1}s`;
                        });
                    }}
                    >
                    {"Mercury Travels".split("").map((letter, index) => (
                        <span
                        key={index}
                        className="inline-block"
                        style={{ display: letter === " " ? "inline-block" : "inline-block" }}
                        >
                        {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h1>
            </div>

            <ul className="flex gap-5 font-ubuntu text-lg font-semibold">
                <NavLink 
                    to="/" 
                    className="relative group"
                >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
                <NavLink 
                    to="/tspot" 
                    className="relative group"
                >
                    Tourist Spots
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
                <NavLink 
                    to="/addSpot" 
                    className="relative group"
                >
                    Add Spot
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
                <NavLink 
                    to="/myList" 
                    className="relative group"
                >
                    MyList
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
            </ul>

            <div className="flex gap-4 items-center font-ubuntu text-lg font-semibold ">
                <NavLink 
                    to="/login" 
                    className="relative group"
                >
                    Login
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
                <NavLink 
                    to="/register" 
                    className="relative group"
                >
                    Register
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
            </div>
            
        </nav>
    );
};

export default Navbar;