import React from "react";

const RoomCard = ({ roomInfo }) => {
    return (
        <div className="room-card">
            <img
                className="room-card-image"
                src={roomInfo.imageUrl}
                alt={roomInfo.name}
            />
            <h3>{roomInfo.name}</h3>
            <p>{roomInfo.description}</p>
        </div>
    );
};

export default RoomCard;
