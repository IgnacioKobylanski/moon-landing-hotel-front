
import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/RoomPage.css'

const RoomPage = () => {
    const { id } = useParams();

    const roomDetails = {
        name: `Room ${id}`,
        description: 'A wonderful room description.',
        images: [
            'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ],
    };

    return (
        <div className="room-details">
            <div className="room-imgs"></div>
            <div className="room-payment"></div>
            <div className="room-description"></div>
            <div className="more-rooms"></div>
        </div>
    );
};

export default RoomPage;

/* <div className="room-details">
            <h2>{roomDetails.name}</h2>
            {roomDetails.images.map((image, index) => (
                <img key={index} src={image} alt={`Room ${index + 1}`} className="room-image" />
            ))}
            <p className="text-description">{roomDetails.description}</p>
        </div> */