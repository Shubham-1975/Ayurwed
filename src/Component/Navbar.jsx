import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import img from "../assets/Logo.png";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggleLanguage, translatedTexts, language } =
    useContext(LanguageContext);

  const getText = (text) => {
    return translatedTexts[text] || text; // fallback to English if not yet translated
  };

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
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-200">
                {getText("Home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-200">
                {getText("About")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200">
                {getText("Contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Title */}
        <div className="text-center w-1/3">
          <h1 className="lg:text-2xl text-sm font-bold tracking-wide">
            श्री आयुर्वेद जड़ी-बूटी
          </h1>
        </div>

        {/* Right: Logo and Language Toggle */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-white bg-green-700 px-3 py-1 mx-2 rounded shadow hover:bg-green-800"
          >
            {language === "en" ? "हिंदी" : "English"}
          </button>
          <img
            src={img}
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-lg border-2 border-white object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 bg-white/10 backdrop-blur-sm rounded-lg py-2 px-4">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              {getText("Home")}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              {getText("About")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              {getText("Contact")}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
