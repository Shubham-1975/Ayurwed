import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          <span className="font-semibold text-green-700">Shree Ayurved</span> is
          dedicated to promoting the healing power of nature through 100%
          herbal, authentic, and chemical-free Ayurvedic products. Our journey
          began with a simple belief — ancient Ayurvedic wisdom holds the key to
          holistic wellness in the modern world.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              💚 100% Natural
            </h3>
            <p className="text-sm text-gray-600">
              All our products are crafted with pure herbs and natural
              ingredients, without any chemicals.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              🌿 Ayurvedic Heritage
            </h3>
            <p className="text-sm text-gray-600">
              Inspired by ancient Ayurvedic scriptures to restore balance in
              body and mind.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              🚚 Pan India Delivery
            </h3>
            <p className="text-sm text-gray-600">
              We deliver our wellness products across India with care and
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
