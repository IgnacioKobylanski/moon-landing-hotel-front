import React from "react";

function CheckoutPage(){
    return(
        <div className="checkout-main">
        <h2>Your reservations</h2>
        <p>Here you can check all the information regarding your reservations</p>
        <section className="reservations"></section>
        </div>
    );
}

export default CheckoutPage;