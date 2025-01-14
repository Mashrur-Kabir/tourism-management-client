import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/travel.png';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been successfully logged out.',
          icon: 'info',
          background: '#f0f0f0',
          color: '#333',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ff6b6b',
          iconColor: '#007BFF',
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: `Error logging out: ${err.message}`,
          icon: 'error',
          background: '#ffe6e6',
          color: '#ff3333',
          confirmButtonText: 'Retry',
          confirmButtonColor: '#d33',
        });
      });
  };

  return (
    <nav className="bg-violet-950 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="AndTour Logo" className="h-8 w-auto mr-2" />
          <div className="group inline-block">
            <h1 className="font-semibold font-carme text-2xl">
              {Array.from("Mercury Travels").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block transform transition-transform group-hover:animate-jump"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links for Larger Screens */}
        <ul className="hidden md:flex gap-5 font-ubuntu text-lg font-semibold">
          <NavLink to="/" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
          </NavLink>
          <NavLink to="/allSpots" className="relative group">
            Tourist Spots
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
          </NavLink>
          <NavLink to="/addSpot" className="relative group">
            Add Spot
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
          </NavLink>
          <NavLink to="/myList" className="relative group">
            MyList
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
          </NavLink>
        </ul>

        <div className="flex gap-4 items-center font-ubuntu text-lg font-semibold ">  
            {user ? 
                <button onClick={handleLogOut} className="relative group">
                    Logout
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </button> : 
                <Link to="/login" className="relative group">
                    Login
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
            }
            <NavLink 
                to="/register" 
                className="relative group"
            >
                Register
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
            </NavLink>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${
          isDropdownOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 bg-violet-800 rounded-lg mt-2 md:hidden`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <NavLink to="/" onClick={() => setIsDropdownOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/allSpots" onClick={() => setIsDropdownOpen(false)}>
            Tourist Spots
          </NavLink>
          <NavLink to="/addSpot" onClick={() => setIsDropdownOpen(false)}>
            Add Spot
          </NavLink>
          <NavLink to="/myList" onClick={() => setIsDropdownOpen(false)}>
            MyList
          </NavLink>
          {user ? (
            <button onClick={handleLogOut} className="text-left">
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setIsDropdownOpen(false)}>
              Login
            </Link>
          )}
          <NavLink to="/register" onClick={() => setIsDropdownOpen(false)}>
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;