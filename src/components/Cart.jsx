import React from "react";
import ItemCart from "./ItemCart";
import "../styles/Cart.css";

const Cart = () => {
    // Lista de items en el carrito (manteniendo los precios con el símbolo '$')
    const cartItems = [
        {
            id: 10,
            name: 'Serene Sky Room',
            price: '$50',
            imageUrl: 'https://images.pexels.com/photos/19467973/pexels-photo-19467973/free-photo-of-hotel-cama-habitacion-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            quantity: 1,
        },
        {
            id: 8,
            name: 'North Star Suite',
            price: '$1200',
            imageUrl: 'https://images.pexels.com/photos/27626174/pexels-photo-27626174/free-photo-of-vacaciones-relajacion-hotel-cama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            quantity: 2,
        }
    ];

    // Calcular el total a pagar
    const totalAmount = cartItems.reduce((total, item) => {
        // Convertir el precio de cadena a número para hacer el cálculo
        const price = parseFloat(item.price.replace('$', '')); 
        return total + price * item.quantity;
    }, 0); // Valor inicial del total es 0

    return (
        <div className="cart-container">
            <h2 id="cart-title">Your Cart</h2>  

            {cartItems.map(item => (
                <ItemCart 
                    key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    quantity={item.quantity} 
                    imageUrl={item.imageUrl} 
                />
            ))}

            <h3>Total Payment: ${totalAmount.toFixed(2)}</h3>
            <button id="cart-checkout-button">Proceed to Payment</button>
        </div>
    );
};

export default Cart;
