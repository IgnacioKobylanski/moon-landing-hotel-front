import React from "react";
import "../styles/ItemCart.css";

const ItemCart = ({ name, price, quantity, imageUrl }) => {
    return(
        <div className="item-cart-main">
                <img id="item-cart-img" src={imageUrl} alt={name} />     
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ${parseFloat(price.replace('$', '')).toFixed(2) * quantity}</p>
            <button className="cart-item-remove-button">Remove</button>
        </div>
    );
};

export default ItemCart;
