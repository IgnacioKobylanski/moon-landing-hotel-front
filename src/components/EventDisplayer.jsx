import React from "react";
import '../styles/EventDisplayer.css'

const EventDisplayer = ({ events }) => {
    return (
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-container-main" key={index}>
            <div className="event-date">
              <span className="day">{event.dateD}</span>
              <span className="month">{event.dateM}</span>
            </div>
            <div className="event-text">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <a href="" className="event-show-more">See more.</a>
            </div>
           
              <img src={event.img} alt={event.name} />
          </div>
        ))}
      </div>
    );
};

export default EventDisplayer;
