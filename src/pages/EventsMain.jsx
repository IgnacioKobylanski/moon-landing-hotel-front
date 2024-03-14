import React from "react";
import '../styles/EventsMain.css'
import EventDisplayer from "../components/EventDisplayer";
import events from "../bbdd/events";


const EventsMain = () => {
    return (
        <div className="eventsMain-main">
            <h3>This are our upcoming events.</h3>
            <div className="events-containers">

            </div>
        </div>
    );
};

export default EventsMain;