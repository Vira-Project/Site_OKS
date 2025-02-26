import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Галерея у вигляді сітки */}
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery item ${index}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Повноекранний перегляд */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
