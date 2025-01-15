import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-9xl font-extrabold tracking-wider text-red-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        className="mt-4 text-2xl font-bold font-rubik"
      >
        Oops! Page not found.
      </motion.h2>

      <motion.p
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        className="mt-2 text-lg text-gray-300 font-ubuntu"
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-6"
      >
        <NavLink
          to="/"
          className="inline-block font-rubik px-6 py-3 font-semibold text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Go Back to Home
        </NavLink>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        <svg
            className="w-32 h-32 text-gray-100 animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 1010 10A10 10 0 0012 2zM12 6v6l4 2"
            />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
