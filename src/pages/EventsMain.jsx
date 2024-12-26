import React, { useEffect, useState } from "react";
import "../styles/EventsMain.css";
import EventDisplayer from "../components/EventDisplayer";
import api from "../api"; // Axios

const EventsMain = () => {
    const [events, setEvents] = useState([]); // Estado para almacenar eventos
    const [loading, setLoading] = useState(true); // Loader para la carga
    const [error, setError] = useState(null); // Manejo de errores

    // Cargar eventos desde el back
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get("/events"); // Solicitud al backend
                setEvents(response.data); // Guardar datos en el estado
            } catch (err) {
                setError("Failed to load events. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false); // Ocultar loader
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="eventsMain-main">
            <h3>These are our upcoming events.</h3>
            <div className="events-containers">
                <EventDisplayer events={events} />
            </div>
        </div>
    );
};

export default EventsMain;





/* import React from "react";
import '../styles/EventsMain.css'
import EventDisplayer from "../components/EventDisplayer";
import events from "../bbdd/events";


const EventsMain = () => {
    return (
        <div className="eventsMain-main">
            <h3>These are our upcoming events.</h3>
            <div className="events-containers">
            <EventDisplayer events={events}/>
            </div>
        </div>
    );
};

export default EventsMain; */