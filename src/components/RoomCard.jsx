import React from "react";
import '../styles/RoomCard.css';

const RoomCard = ({ roomInfo }) => {
    return (
        <div className="room-card-container">
            <img
                className="room-card-image"
                src={roomInfo.imageUrl}
                alt={roomInfo.name}
            />
            <h3>{roomInfo.name}</h3>
            <p>{roomInfo.price}</p>
        </div>
    );
};

export default RoomCard;
