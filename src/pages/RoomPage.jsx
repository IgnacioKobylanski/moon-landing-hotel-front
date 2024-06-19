import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/RoomPage.css';
import rooms from '../bbdd/rooms'; // Asegúrate de importar `rooms`

const RoomPage = () => {
    const { id } = useParams();

    // Encuentra la habitación con el ID correspondiente
    const roomDetails = rooms.find(room => room.id === parseInt(id));

    if (!roomDetails) {
        return <div>Room not aviable</div>; // Manejo básico si la habitación no se encuentra
    }

    return (
        <div className="room-details">
            <div className="room-imgs">
                {/* Verifica si `roomDetails.images` está definido antes de hacer `map` */}
                {roomDetails.images && roomDetails.images.map((image, index) => (
                    <img key={index} src={image} alt={`Room ${index}`} />
                ))}
            </div>
            <div className="room-description">
                <h2>{roomDetails.name}</h2>
                <p>{roomDetails.description}</p>
                <p>Price: {roomDetails.price}</p>
            </div>
        </div>
    );
};

export default RoomPage;
