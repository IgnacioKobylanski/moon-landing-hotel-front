// RoomPage.jsx
import React from "react";
import { useParams } from 'react-router-dom';

const RoomPage = () => {
    const { id } = useParams();

    // Puedes usar el valor de id para cargar los detalles de la habitación desde tu base de datos.
    // Mientras tanto, puedes mostrar información simulada.
    const roomDetails = {
        name: `Room ${id}`,
        description: 'A wonderful room description.',
        images: [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
        ],
    };

    return (
        <div className="room-details">
            <nav className="room-nav"></nav>
            <h2>{roomDetails.name}</h2>
            {roomDetails.images.map((image, index) => (
                <img key={index} src={image} alt={`Room ${index + 1}`} className="room-image" />
            ))}
            <p className="text-description">{roomDetails.description}</p>
        </div>
    );
};

export default RoomPage;
