import React from "react";
import '../styles/Gallery.css'

function Gallery(props) {
    const { images } = props;
  
    return (
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    );
  }
  
  export default Gallery;