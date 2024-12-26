import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/EventDetail.css";
import ReserveButton from "./ReserveButton";
import api from "../api"; // Axios

const EventDetail = () => {
    const { id } = useParams(); // Obtener ID del evento desde la URL
    const [event, setEvent] = useState(null); // Estado para el evento
    const [loading, setLoading] = useState(true); // Loader
    const [error, setError] = useState(null); // Manejo de errores

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await api.get(`/events/${id}`); // Solicitud al back
                setEvent(response.data); // Guardar el evento en el estado
            } catch (err) {
                setError("Event not found.");
                console.error(err);
            } finally {
                setLoading(false); // Ocultar loader
            }
        };

        fetchEvent();
    }, [id]); // Se ejecuta cada vez que cambia el ID

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!event) return <p>No event found.</p>;

    return (
        <div className="event-detail">
            <h2 id="event-name">{event.name}</h2>
            <p id="event-description">{event.description}</p>
            <p id="event-text">{event.text}</p>
            <p id="price-event">Price: ${event.price}</p>
            <img id="event-photo" src={event.img} alt={event.name} />
            <div className="event-reserve">
                <ReserveButton text="Reserve Now" onClick={() => alert(`Event "${event.name}" reserved successfully!`)} />
            </div>
        </div>
    );
};

export default EventDetail;





/* import React from "react";
import { useParams } from "react-router-dom";
import events from "../bbdd/events";
import "../styles/EventDetail.css"
import ReserveButton from "./ReserveButton";

const EventDetail = () => {
    const {id} = useParams();
    const event = events.find(event => event.id === parseInt(id)); // Encontrar el evento correspondiente
    
    if (!event) {
        return <div>Event not found</div>;
    } // Si no encuentra el evento, muestra un mensaje de error

    const handleReserve = () => {
        alert(`Event "${event.name}" reserved successfully!`);
    };

    return(
        <div className="event-detail">
            <h2 id="event-name">{event.name}</h2>
            <p id="event-description">{event.description}</p>
            <p id="event-text">{event.text}</p>
            <p id="price-event">Price: ${event.price}</p>
            <img id="event-photo" src={event.img} alt={event.name} />
            
            <div className="event-reserve">
                <ReserveButton text="Reserve Now" onClick={handleReserve} />
            </div>
        </div>
    );
};


export default EventDetail; */