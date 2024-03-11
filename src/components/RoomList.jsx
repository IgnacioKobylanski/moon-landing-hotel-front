import React from "react";
import RoomCard from "./RoomCard";
import '../styles/RoomList.css';
import rooms from '../bbdd/rooms';

const RoomList = () => {
    return (
        <div className="roomList-main">
                <h2>Available Rooms</h2>              
                    {rooms.map(room => (
                        <RoomCard key={room.id} roomInfo={room} />
                    ))}
            </div>     
    );
};

export default RoomList;