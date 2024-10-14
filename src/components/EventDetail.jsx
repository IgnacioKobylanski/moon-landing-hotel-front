import React from "react";
import { useParams } from "react-router-dom";
import events from "../bbdd/events";
import "../styles/EventDetail.css"

const EventDetail = () => {
    const {id} = useParams();
    const event = events.find(event => event.id === parseInt(id)); // Encontrar el evento correspondiente
    
    if (!event) {
        return <div>Event not found</div>;
    } // Si no encuentra el evento, muestra un mensaje de error

    return(
        <div className="event-detail">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>{event.text}</p>
            <p>Price: ${event.price}</p>
            <img src={event.img} alt={event.name} />
        </div>
    );
};


export default EventDetail;