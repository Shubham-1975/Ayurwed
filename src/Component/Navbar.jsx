import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hamburger & Links */}
        <div className="flex items-center w-1/3">
          <div className="md:hidden mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-200 font-medium transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-200 font-medium transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-200 font-medium transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Center: Title */}
        <div className="text-center w-1/3">
          <h1 className="lg:text-2xl text-sm font-bold tracking-wide text-white">
            श्री आयुर्वेद जड़ी-बूटी
          </h1>
        </div>

        {/* Right: Logo */}
        <div className="w-1/3 flex justify-end">
          <img
            src="https://t3.ftcdn.net/jpg/01/04/75/24/360_F_104752490_6DkrZ8w2ZHlImp5gdyAdniaGcta3HEkE.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-lg border-2 border-white object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 bg-white/10 backdrop-blur-sm rounded-lg py-2 px-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-2 text-white hover:bg-white/20 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-2 text-white hover:bg-white/20 rounded"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-2 text-white hover:bg-white/20 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
