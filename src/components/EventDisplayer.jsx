import React from "react";

const EventDisplayer = ({ events }) => {
    return (
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-container-main" key={index}>
            <div className="event-date">
              <span className="day">{event.date}</span>
              <span className="month">{event.month}</span>
            </div>
            <div className="event-text">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
            <div className="event-picture">
              <img src={event.img} alt={event.name} />
            </div>
          </div>
        ))}
      </div>
    );
};

export default EventDisplayer;
