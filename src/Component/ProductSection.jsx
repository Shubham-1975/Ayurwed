import React, { useState, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../context/LanguageContext";

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
  {
    name: "Giloy Tablets",
    price: "₹150",
    image:
      "https://thumbs.dreamstime.com/b/ayurvedic-herb-giloy-leaf-stick-191361002.jpg",
  },
  {
    name: "Neem Capsules",
    price: "₹200",
    image:
      "https://ishalife.sadhguru.org/media/catalog/product/f/d/fd403.jpg?optimize=medium&fit=bounds&height=&width=",
  },
  {
    name: "Brahmi Syrup",
    price: "₹230",
    image:
      "https://t4.ftcdn.net/jpg/15/25/80/29/240_F_1525802903_qHiJ4BM2fTTbYsUe7r0GhF4QBHtcV2Fl.jpg",
  },
  {
    name: "Tulsi Drops",
    price: "₹90",
    image:
      "https://www.ayurindus.com/wp-content/uploads/2023/09/ayurveda-spices-1024x683.jpg",
  },
  {
    name: "Herbal Tea",
    price: "₹160",
    image:
      "https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg",
  },
  {
    name: "Triphala Powder",
    price: "₹140",
    image:
      "https://media.istockphoto.com/id/697860312/photo/indian-ayurvedic-dietary-supplement-called-chyawanprash-chyavanaprasha-is-a-cooked-mixture-of.jpg?s=612x612&w=0&k=20&c=outabsxtvdSSt4aCkRdjtKrVtv7qko4N6AMA6qVtWmo=",
  },
];
const ProductSection = () => {
  const { translatedTexts } = useContext(LanguageContext);
  const [visibleCount, setVisibleCount] = useState(0);
  const [itemsPerClick, setItemsPerClick] = useState(8);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setVisibleCount(4);
      setItemsPerClick(4);
    } else {
      setVisibleCount(8);
      setItemsPerClick(4);
    }
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerClick, products.length));
  };

  return (
    <section id="products" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#2e7d32] mb-10"
          data-aos="fade-down"
        >
          {translatedTexts["Our Products"] || "Our Products"}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, visibleCount).map((product, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800">
                  {translatedTexts[product.name] || product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < products.length && (
          <button
            onClick={handleShowMore}
            className="mt-8 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            data-aos="fade-up"
          >
            {translatedTexts["Show More"] || "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
