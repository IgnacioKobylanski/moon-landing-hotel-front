// RoomCard.jsx

import React from "react";
import { Link } from 'react-router-dom';
import '../styles/RoomCard.css';

const RoomCard = ({ roomInfo }) => {
    return (
        <div className="room-card-container">
            <img
                className="room-small-image"
                src={roomInfo.imageUrl}
                alt={roomInfo.name}
            />
            <h3>{roomInfo.name}</h3>
            <p>{roomInfo.price}</p>
            <Link to={`/room`} className="see-more-button">
                See More
            </Link>
        </div>
    );
};

export default RoomCard;
