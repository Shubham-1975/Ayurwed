import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Nav Links or Hamburger */}
        <div className="flex items-center w-1/3">
          <div className="md:hidden mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-green-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Center: Title */}
        <div className="lg:text-2xl text-sm font-bold text-green-700 w-1/3 text-center">
          श्री आयुर्वेद जड़ी-बूटी
        </div>

        {/* Right: Logo */}
        <div className="w-1/3 flex justify-end">
          <img
            src="https://t3.ftcdn.net/jpg/01/04/75/24/360_F_104752490_6DkrZ8w2ZHlImp5gdyAdniaGcta3HEkE.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-left">
          <li>
            <Link
              to="/"
              className="block py-2 px-4 hover:bg-green-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 hover:bg-green-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 hover:bg-green-600"
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
