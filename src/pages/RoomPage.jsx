import React from "react";

const RoomPage = ({ match }) => {
    const roomid = match.params.id;

    return (
        <div className="room-details">
             <nav className="room-nav"></nav>
             <h2>Room name</h2>
             <p className="text-description"></p>
             <img src="" alt="" />
        </div>

        
       
    );

};