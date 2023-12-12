import React from "react";

const RoomPage = ({ match }) => {
    const roomid = match.params.id;

    return (
        <div className="room-details">
             <h2>Room name</h2>
             <nav className="room-nav"></nav>
        </div>

        
       
    );

};