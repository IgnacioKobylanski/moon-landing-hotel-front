import React from "react";
import RoomCard from "./RoomCard"; // Asegúrate de importar correctamente el componente RoomCard
import '../styles/RoomList.css'; // Asegúrate de importar correctamente el archivo de estilos

const RoomList = () => {
    const rooms = [
        { id: 1, name: 'Standard Room', price: '$100', imageUrl : 'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, name: 'Suite', price: '$200', imageUrl : 'https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, name: 'Deluxe Room', price: '$150', imageUrl : 'https://images.pexels.com/photos/10681894/pexels-photo-10681894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ];
    

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
