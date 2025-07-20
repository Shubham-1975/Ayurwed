import React from "react";

const products = [
  {
    name: "Chyawanprash",
    price: "₹250",
    image:
      "https://media.istockphoto.com/id/697860312/photo/indian-ayurvedic-dietary-supplement-called-chyawanprash-chyavanaprasha-is-a-cooked-mixture-of.jpg?s=612x612&w=0&k=20&c=outabsxtvdSSt4aCkRdjtKrVtv7qko4N6AMA6qVtWmo=",
  },
  {
    name: "Turmeric Powder",
    price: "₹120",
    image:
      "https://media.istockphoto.com/id/855014602/photo/turmeric-powder-turmeric-in-mortar-grinder-drugs-and-ingredient-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=LOJOCwVBgl96mq7bx6FoCIN3WHO4N1QoBgYWX-7ZlFE=",
  },
  {
    name: "Ashwagandha Capsules",
    price: "₹320",
    image:
      "https://www.ayurindus.com/wp-content/uploads/2023/09/ayurveda-spices-1024x683.jpg",
  },
  {
    name: "Amla Juice",
    price: "₹180",
    image:
      "https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2e7d32] mb-10">
          Our Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800">
                  {product.name}
                </h3>
                <p className="text-green-600 font-medium mt-1">
                  {product.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
