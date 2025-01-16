import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ReserveButton from "../components/ReserveButton";
import { useCart } from "../contexts/CartContext";
import '../styles/RoomPage.css';

const RoomPage = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [room, setRoom] = useState(null); // Estado para guardar la habitación
    const [loading, setLoading] = useState(true); // Estado para el loader
    const [error, setError] = useState(null); // Estado para errores

    // Usamos el contexto de carrito
    const { addItemToCart } = useCart(); 

    useEffect(() => {
        // Llamada a la API para obtener los detalles de una habitación
        const fetchRoom = async () => {
            try {
                const response = await api.get(`/rooms/${id}`);
                setRoom(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load room details. Please try again later.");
                setLoading(false);
            }
        };

        fetchRoom();
    }, [id]); // Este efecto se ejecuta cada vez que cambia el ID

    if (loading) return <div>Loading room details...</div>;
    if (error) return <div>{error}</div>;
    if (!room) return <div>Room not found</div>;

    // Función para manejar la reserva
    const handleReserve = () => {
        // Crea el objeto de la habitación para agregar al carrito
        const reservationItem = {
            id: room.id,
            name: room.name,
            price: `$${room.price}`,
            imageUrl: room.imageUrl,
            quantity: 1, // Asumiendo que el usuario está reservando 1 unidad
        };

        // Añadir la habitación al carrito usando el contexto
        addItemToCart(reservationItem);

        // Feedback visual (puedes usar un mensaje más elaborado si lo deseas)
        alert(`Room "${room.name}" added to your cart!`);
    };

    return (
        <div className="room-details">
            <h2 className="room-title">{room.name}</h2>
            <img src={room.imageUrl} alt={room.name} className="room-details-img" />
            <p>{room.description}</p>

            <div className="room-details-price-box">
                <p className="room-details-price-label">Special Price</p>
                {room.price} <span>per night</span>
            </div>

            <div className="reserve-button-container">
                <ReserveButton text="Reserve Now" onClick={handleReserve} />
            </div>
        </div>
    );
};

export default RoomPage;





/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ReserveButton from "../components/ReserveButton";
import '../styles/RoomPage.css';

const RoomPage = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [room, setRoom] = useState(null); // Estado para guardar la habitación
    const [loading, setLoading] = useState(true); // Estado para el loader
    const [error, setError] = useState(null); // Estado para errores

    useEffect(() => {
        // Llamada a la API para obtener los detalles de una habitación
        const fetchRoom = async () => {
            try {
                const response = await api.get(`/rooms/${id}`);
                setRoom(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load room details. Please try again later.");
                setLoading(false);
            }
        };

        fetchRoom();
    }, [id]); // Este efecto se ejecuta cada vez que cambia el ID

    if (loading) return <div>Loading room details...</div>;
    if (error) return <div>{error}</div>;
    if (!room) return <div>Room not found</div>;

    const handleReserve = () => {
        alert(`Room "${room.name}" reserved successfully!`);
    };

    return (
        <div className="room-details">
            <h2 className="room-title">{room.name}</h2>
            <img src={room.imageUrl} alt={room.name} className="room-details-img" />
            <p>{room.description}</p>

            <div className="room-details-price-box">
                <p className="room-details-price-label">Special Price</p>
                {room.price} <span>per night</span>
            </div>

            <div className="reserve-button-container">
                <ReserveButton text="Reserve Now" onClick={handleReserve} />
            </div>
        </div>
    );
};

export default RoomPage;
 */


/* // RoomPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import rooms from '../bbdd/rooms';
import ReserveButton from "../components/ReserveButton";
import '../styles/RoomPage.css';

const RoomPage = () => {
    const { id } = useParams();
    const room = rooms.find(room => room.id === parseInt(id));

    if (!room) {
        return <div>Room not found</div>;
    }

    const handleReserve = () => {
        alert(`Room "${room.name}" reserved successfully!`);
    };

    return (
        <div className="room-details">
           <h2 className="room-title">{room.name}</h2>
            <img src={room.imageUrl} alt={room.name} className="room-details-img" /> 
            <p>{room.description}</p>


        <div className="room-details-price-box">
            <p className="room-details-price-label">Special Price</p>
            {room.price} <span>per night</span>
        </div>

            <div className="reserve-button-container">
                <ReserveButton text="Reserve Now" onClick={handleReserve} />
            </div>
        </div>
    );
};

export default RoomPage;
 */