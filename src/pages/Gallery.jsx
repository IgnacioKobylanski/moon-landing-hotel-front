import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import GalleryCarousel from '../components/GalleyCarousell';
import ImageGallery from '../components/ImageGallery';
import rooms from '../bbdd/rooms';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (rooms.length > 0) {
      setSelectedImage(rooms[0].imageUrl);
    }
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="gallery-main">
      <h3>A small view into another world.</h3>
      <div className="galley-container">
      <GalleryCarousel rooms={rooms} onImageClick={handleImageClick} />
      {selectedImage && (
        <div className="selected-image-container">
          <img className="selected-image" src={selectedImage} alt="Selected" />
        </div>    
      )}
      </div>
    </div>
  );
}

export default Gallery;
