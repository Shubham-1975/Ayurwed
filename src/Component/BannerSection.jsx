import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Shree Ayurved
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Pure Ayurvedic & Herbal Products for Your Healthy Life.
          </p>
          <a
            href="#products"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition"
          >
            Explore Products
          </a>
        </div>

        {/* Image */}
        <div className="sm:w-1/2">
          <img
            src="https://www.ayurindus.com/wp-content/uploads/2023/09/ayurveda-spices-1024x683.jpg"
            alt="Ayurveda Banner"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
