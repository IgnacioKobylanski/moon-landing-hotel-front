import React from "react";
import CustomCarousel from "../components/CustomCarousel";
import ServiceCard from "../components/ServiceCard";
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Events from "../components/Events";

const Home = () => {
    
    const roomsData = [
        { id: 1, name: 'Standard Room', description: 'Una habitación cómoda con todas las comodidades.', imageUrl: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, name: 'Suite', description: 'Una suite espaciosa con vistas impresionantes.', imageUrl: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ];

    return (
        <div className="home-main">
            <div className="carousel">
                <CustomCarousel />
            </div>

            <section className="services-section">
                <ServiceCard
                    title="Accommodation"
                    imageUrl="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    link="/rooms"
                />
                <ServiceCard
                    title="Dining"
                    imageUrl="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"
                    link="/dining"
                />
                <ServiceCard
                    title="Spa and Health"
                    imageUrl="https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=600"
                    link="/spa"
                />
            </section>

            <section className="hotel-events-section">
                <Events
                    title="Jazz Show at the Moon Landing Hotel!"
                    content="Nothing better after a long week that the best Jazz Show in town"
                    imageSrc="https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="section-1"
                />

                <Events
                    title="Ted Talk is coming to town and is waiting for you!"
                    content="Do you want to waste your time listening to weird people?, look no further."
                    imageSrc="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="section-2"
                />

                <Events
                    title="Witness the best art colection in the world."
                    content="Be part of a historical collection featuring the world's best artists"
                    imageSrc="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="section-1"
                />
                
            </section>

        </div>
    );
};

export default Home;