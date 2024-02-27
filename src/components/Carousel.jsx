import { useState } from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["world.jpg", "sea2.jpg", "universe.jpg"];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[66rem] h-[18rem] mx-auto overflow-hidden rounded-lg shadow-md mt-5">
      <div className="h-full flex transition-transform ease-in-out duration-500 transform">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full h-full object-cover ${
              index === currentIndex ? "block" : "hidden"
            }`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none transition-opacity duration-300 opacity-50 hover:opacity-100"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none transition-opacity duration-300 opacity-50 hover:opacity-100"
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
