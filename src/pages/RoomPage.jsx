// RoomPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import rooms from '../bbdd/rooms';
import '../styles/RoomPage.css';

const RoomPage = () => {
    const { id } = useParams();
    const room = rooms.find(room => room.id === parseInt(id));

    if (!room) {
        return <div>Room not found</div>;
    }

    return (
        <div className="room-details">
            <h2>{room.name}</h2>  
            <img src={room.imageUrl} alt={room.name} className="room-details-img" /> 
            <p>{room.description}</p>
            <p>{room.price} per night</p>
        </div>
    );
};

export default RoomPage;
