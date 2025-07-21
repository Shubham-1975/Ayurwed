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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form - Left Side with Underline Inputs */}
          <form className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
            {[
              { label: "Name", type: "text", placeholder: "Enter your name" },
              { label: "Email", type: "email", placeholder: "you@example.com" },
              { label: "Mobile", type: "tel", placeholder: "+91-XXXXXXXXXX" },
              { label: "Subject", type: "text", placeholder: "Enter subject" },
            ].map((input, idx) => (
              <div className="w-full md:w-4/5" key={idx}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-green-500 py-2 text-sm placeholder-gray-500"
                  required
                />
              </div>
            ))}

            {/* Textarea */}
            <div className="w-full md:w-4/5">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-green-500 py-2 text-sm placeholder-gray-500 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-4/5 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Right Side: Contact Info + Map */}
          <div className="space-y-6 text-green-900">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
              <p className="mb-2">
                We'd love to hear from you. Contact us using the details below.
              </p>
              <p>📍 Patna, Bihar, India</p>
              <p>📞 +91-9876543210</p>
              <p>📧 info@shreeayurved.in</p>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-green-300 shadow-md">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28782.316164841756!2d85.09116727634728!3d25.594094353730223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f87f748d15%3A0xe83f7f34e6bfb2e9!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1615903349491!5m2!1sen!2sin"
                width="100%"
                height="360"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
