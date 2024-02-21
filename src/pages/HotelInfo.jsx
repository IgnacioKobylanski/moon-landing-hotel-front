import React from "react";

const HoteInfo = () => {
    const hotelName = "Moon Landing Hotel";
    const hotelFounded = 1951;
    const hotelLocation = "Texas, USA";
    const hotelDescription = "The Moon Landing Hotel is an iconic destination situated in the heart of [City Name], [Country]. Founded in [Year], it has been a home away from home for travelers from around the world for over [Number] years";

    return(<div className="hotel-info">
    <h2>{hotelName}</h2>
    <p><strong>Founded in :</strong> {hotelFounded}</p>
    <p><strong>Location:</strong> {hotelLocation}</p>
    <p>{hotelDescription}</p>
    
    <h3>Hotel Images</h3>
    <div className="hotel-images">
      {hotelImages.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index + 1}`} />
      ))}
    </div>
  </div>);
}

export default HotelInfo;