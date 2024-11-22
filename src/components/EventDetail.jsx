import React from "react";
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


export default EventDetail;