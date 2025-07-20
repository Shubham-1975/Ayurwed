import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Shree Ayurved</h2>
          <p className="text-sm">
            Bringing you the power of nature through 100% herbal, chemical-free,
            and authentic Ayurvedic products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">📍 Patna, Bihar, India</p>
          <p className="text-sm">📞 +91-9876543210</p>
          <p className="text-sm">📧 info@shreeayurved.in</p>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Shree Ayurved. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
