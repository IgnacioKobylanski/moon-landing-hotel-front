import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/GalleryCarousel.css'; // Importa tu archivo CSS personalizado

function GalleryCarousel({ rooms }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: rooms.length, // Mostrar una imagen por fila
    slidesToScroll: 1, // Desplazar una imagen por vez
  };

  return (
    <Slider {...settings}>
      {rooms.map((room, idx) => (
        <div key={idx}>
          <img className="gallery-carousel-image" src={room.imageUrl} alt={`Room ${idx}`} />
        </div>
      ))}
    </Slider>
  );
}

export default GalleryCarousel;
