import React from "react";
import "../styles/ItemCart.css";
import { useCart } from "../contexts/CartContext";

const ItemCart = ({ name, price, quantity, imageUrl, itemId }) => {
    const { removeItemFromCart } = useCart();

    const handleRemove = () => {
        removeItemFromCart(itemId);
    };

    return (
        <div className="item-cart-main">
            <img id="item-cart-img" src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: ${(parseFloat(price.replace('$', '')).toFixed(2) * quantity).toFixed(2)}</p>
            <button className="cart-item-remove-button" onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default ItemCart;





/* import React from "react";
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
 */