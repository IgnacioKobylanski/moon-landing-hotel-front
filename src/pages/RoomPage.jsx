// RoomPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import rooms from '../bbdd/rooms';
import ReserveButton from "../components/ReserveButton";
import '../styles/RoomPage.css';

const RoomPage = () => {
    const { id } = useParams();
    const room = rooms.find(room => room.id === parseInt(id));

    if (!room) {
        return <div>Room not found</div>;
    }

    const handleReserve = () => {
        alert(`Room "${room.name}" reserved successfully!`);
    };

    return (
        <div className="room-details">
           <h2 className="room-title">{room.name}</h2>
            <img src={room.imageUrl} alt={room.name} className="room-details-img" /> 
            <p>{room.description}</p>


        <div className="room-details-price-box">
            <p className="room-details-price-label">Special Price</p>
            {room.price} <span>per night</span>
        </div>

            <div className="reserve-button-container">
                <ReserveButton text="Reserve Now" onClick={handleReserve} />
            </div>
        </div>
    );
};

export default RoomPage;
