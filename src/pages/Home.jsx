import React from "react";
import CustomCarousel from "../components/CustomCarousel";
//import RoomCard from "../components/RoomCard";
import ServiceCard from "../components/ServiceCard";
//import { Link } from 'react-router-dom';
import '../styles/Home.css';

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
                    link="/accommodation"
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

            
        </div>
    );
};

export default Home;
