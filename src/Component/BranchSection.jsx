import React from "react";

const branches = [
  {
    city: "Delhi",
    address: "123 Ayurvedic Street, Connaught Place, Delhi",
  },
  {
    city: "Mumbai",
    address: "456 Herbal Lane, Andheri West, Mumbai",
  },
  {
    city: "Patna",
    address: "78 Nature Cure Road, Boring Road, Patna",
  },
  {
    city: "Kolkata",
    address: "22 Healing Herb Avenue, Salt Lake, Kolkata",
  },
];

const BranchSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-200 via-white to-green-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* AOS animation only on this heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#2e7d32] mb-8"
          data-aos="fade-down"
        >
          Our Branches
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-green-100 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#388e3c] mb-2">
                {branch.city}
              </h3>
              <p className="text-gray-600 text-sm">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
