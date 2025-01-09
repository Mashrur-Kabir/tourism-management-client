import logo from '../../assets/icons/travel.png'
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-violet-700 text-white p-4">
            <div className="flex items-center">
                <img
                src={logo}
                alt="AndTour Logo"
                className="h-8 w-auto mr-2"
                />
                <h1 className="font-semibold font-carme text-2xl">Mercury Travels</h1>
            </div>
            <ul className="flex gap-4 font-ubuntu text-lg font-semibold">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#tours" className="hover:underline">Tours</a></li>
                <li><a href="#flights" className="hover:underline">Flights</a></li>
                <li><a href="#hotel" className="hover:underline">Hotel</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
            <div className="flex gap-4 items-center font-ubuntu text-lg font-semibold ">
                <a href="#login" className="hover:underline">Login</a>
                <a href="#signup" className="hover:underline">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;