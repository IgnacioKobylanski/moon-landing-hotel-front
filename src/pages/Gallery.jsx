import React from 'react';
import '../styles/Gallery.css';
import GalleryCarousel from '../components/GalleyCarousell';
import rooms from '../bbdd/rooms';

function Gallery() {
  return (
    <div className="gallery-main">
      <h3>A small view into another world.</h3>
      <GalleryCarousel rooms={rooms} />
    </div>
  );
}

export default Gallery;
