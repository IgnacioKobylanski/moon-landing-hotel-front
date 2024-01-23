import React from 'react';

const CarouselImage = ({ imageUrl, altText }) => {
  return (
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={altText}
    />
  );
};

export default CarouselImage;
