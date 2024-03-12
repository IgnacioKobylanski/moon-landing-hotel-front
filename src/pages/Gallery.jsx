import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import GalleryCarousel from '../components/GalleyCarousell';
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
    <div className="gallery-container">
      <GalleryCarousel rooms={rooms} onImageClick={handleImageClick} />
    </div>
    <div className="big-img">
      {selectedImage && (
        <img className="selected-image" src={selectedImage} alt="Selected" />   
      )}
    </div>
    </div>
  );
}

export default Gallery;
