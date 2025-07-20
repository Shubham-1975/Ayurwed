import React, { useEffect, useState } from "react";

const images = [
  "https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg",
  "https://media.istockphoto.com/id/697860312/photo/indian-ayurvedic-dietary-supplement-called-chyawanprash-chyavanaprasha-is-a-cooked-mixture-of.jpg?s=612x612&w=0&k=20&c=outabsxtvdSSt4aCkRdjtKrVtv7qko4N6AMA6qVtWmo=",
  "https://media.istockphoto.com/id/855014602/photo/turmeric-powder-turmeric-in-mortar-grinder-drugs-and-ingredient-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=LOJOCwVBgl96mq7bx6FoCIN3WHO4N1QoBgYWX-7ZlFE=",
  "https://www.ayurindus.com/wp-content/uploads/2023/09/ayurveda-spices-1024x683.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-full"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
