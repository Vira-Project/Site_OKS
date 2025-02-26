import React, { useState, useEffect } from "react";
import "./image_slider.scss";

const ImageSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(autoSlide);
  }, [currentIndex, interval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <div className="slider_images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
