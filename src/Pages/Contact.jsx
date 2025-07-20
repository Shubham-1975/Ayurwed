import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-r from-green-100 to-green-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-green-900">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p>
              We’d love to hear from you. Please fill out the form or contact us
              using the information below.
            </p>
            <p>📍 Patna, Bihar, India</p>
            <p>📞 +91-9876543210</p>
            <p>📧 info@shreeayurved.in</p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
