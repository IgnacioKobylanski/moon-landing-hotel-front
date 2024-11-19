import React from "react";
import "../styles/ReserveButton.css"


const ReserveButton = ({ text = "Reserve Now", onClick}) => {
    return(
        <button className="reserve-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default ReserveButton;