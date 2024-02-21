import React from "react";
import RoomCard from "./RoomCard";
import '../styles/RoomList.css';
import rooms from '../bbdd/rooms';

const RoomList = () => {
    return (
        <div className="roomList-main">
            <div className="content-roomList-main">
                <h1>Available Rooms</h1>
                <div className="room-cards-RoomList">
                    {rooms.map(room => (
                        <RoomCard key={room.id} roomInfo={room} />
                    ))}
                </div>
            </div>      
        </div>
    );
};

export default RoomList;