import React from 'react';
import '../styles/Gallery.css';
import rooms from '../bbdd/rooms';
import ImageGallery from '../components/ImageGallery';

function Gallery() {
  return (
    <div className="gallery-main">
      <h3>A small view into another world.</h3>
      <ImageGallery rooms={rooms} />
    </div>
  );
}

export default Gallery;
