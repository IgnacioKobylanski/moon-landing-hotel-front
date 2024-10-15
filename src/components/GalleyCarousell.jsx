import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/GalleryCarousel.css';

function GalleryCarousel({ rooms, onImageClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div className="slick-prev"></div>,
    nextArrow: <div className="slick-next"></div>
  };

  const handleImageClick = (imageUrl) => {
    if (onImageClick) {
      onImageClick(imageUrl);
    }
  };

  return (
    <div className="carousel-gallery-container"> 
      <Slider {...settings}>
        {rooms.map((room, idx) => (
          <div key={idx} onClick={() => handleImageClick(room.imageUrl)}>
            <img className="gallery-carousel-image" src={room.imageUrl} alt={`Room ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GalleryCarousel;
