import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import '../styles/RoomList.css';
import api from "../api";

const RoomList = () => {
    const [rooms, setRooms] = useState([]); // Estado para guardar las habitaciones
    const [loading, setLoading] = useState(true); // Estado para el loader
    const [error, setError] = useState(null); // Estado para errores

    useEffect(() => {
        // Llamada a la API para obtener las habitaciones
        const fetchRooms = async () => {
            try {
                const response = await api.get("/rooms"); 
                setRooms(response.data); // Guarda los datos en el estado
                setLoading(false);
            } catch (err) {
                setError("Failed to load rooms. Please try again later.");
                setLoading(false);
            }
        };

        fetchRooms();
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    if (loading) return <div>Loading rooms...</div>;
    if (error) return <div>{error}</div>;

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



/* // RoomList.jsx

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
 */