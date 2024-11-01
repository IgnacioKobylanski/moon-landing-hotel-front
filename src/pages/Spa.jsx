import React from "react";
import '../styles/Spa.css'

const Spa = () => {
    return(
        <div className="spa-main">
            <h2>A sanctuary of peace in every detail.</h2>

            <div className="spa-item">
                <p>Experience ultimate relaxation in our private spa cabins, where tranquility and rejuvenation await you.</p>
                <img src="https://images.pexels.com/photos/161737/pedicure-massage-therapist-spa-161737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="spa-cabines" />
            </div>

            <div className="spa-item">
                <p>Indulge in pure serenity within our spa cabins, crafted for your complete relaxation and renewal.</p>
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="spa-outside" />
            </div>
        </div>
        

        
    )
}

export default Spa;