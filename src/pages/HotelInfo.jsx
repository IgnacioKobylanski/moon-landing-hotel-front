import React from "react";
import '../styles/HotelInfo.css';

const hotelImages = [
  "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const HotelInfo = () => {
    return (
      <div className="hotel-info">
        <h2 className="hotel-info-title">Moon Landing Hotel</h2>
        <section className="hotel-info-intro-section">
        <p id="intro-hotel-info">In the heart of Paris, amidst the romantic ambiance of the City of Lights, a beacon of luxury and innovation emerged in the year 1951. – the Moon Landing Hotel.</p>
        <img src={hotelImages[0]} id="info-img-intro" alt="Hotel" />
        <p id="hotel-info-new">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <div className="hotel-info-middle">
        <img src={hotelImages[1]} id="img-info-middle" alt="Hotel" />

        <p>The Moon Landing Hotel is an iconic destination situated in the heart of Paris, France. Founded in 1851, it has been a home away from home for travelers from around the world for over 173 years.
        Inspired by the boundless spirit of exploration and the collective fascination with the cosmos, Beaumont envisioned a hotel that would transcend the ordinary and transport guests to new heights of opulence and wonder. With meticulous attention to detail and unwavering ambition, construction commenced on the Moon Landing Hotel, named in homage to humanity's fascination with space exploration and the historic moon landing.
        Nestled in the heart of the bustling city, the Moon Landing Hotel quickly became a symbol of elegance and modernity. Its avant-garde design, reminiscent of a spacecraft poised for interstellar travel, captured the imagination of all who beheld it. From its sleek exterior to its lavish interiors, every detail was crafted to evoke a sense of otherworldly splendor.
        With its grand opening, the Moon Landing Hotel dazzled guests from near and far. Celebrities, dignitaries, and jet-setters flocked to experience its luxurious accommodations, world-class dining, and unparalleled service, all enveloped in an atmosphere of celestial charm.

        Over the decades, the Moon Landing Hotel has stood as a bastion of sophistication, evolving with the times while preserving its timeless allure. It has borne witness to historic events, hosted illustrious guests, and woven itself into the fabric of Parisian society, each chapter adding to its rich tapestry of history.

        As we reflect on its founding in 1951, we celebrate the enduring legacy of Alexandre Beaumont and the enduring allure of the Moon Landing Hotel – a testament to the enduring spirit of innovation and the eternal allure of the cosmos.
        </p>
        </div>

        <img id="last-pic-hotel-info" src={hotelImages[2]} alt="Hotel" />

        <p className="slogan">Your gateway to celestial comfort.</p>

      </div>
    );
}

export default HotelInfo;