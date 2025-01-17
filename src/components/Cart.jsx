import React, { useState, useEffect } from "react";
import ItemCart from "./ItemCart";
import "../styles/Cart.css";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
    const { cartItems, loading, error } = useCart();
    
    // Estado para manejar si el usuario está logueado o no
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si el token está en el localStorage
        const token = localStorage.getItem('authToken');
        console.log("Token en localStorage:", token); 
        
        if (token) {
            setIsLoggedIn(true);  
            console.log("Usuario logueado");
        } else {
            setIsLoggedIn(false); 
            console.log("Usuario no logueado");
        }
    }, []);


    if (!isLoggedIn) {
        console.log("Mostrando mensaje de no logueado");
        return <p>You need to be logged in to view your cart.</p>;
    }

    // Calcular el total del carrito
    const totalAmount = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', '') || 0);
        return total + price * item.quantity;
    }, 0);

    // Mostrar "Loading..." mientras se cargan los datos
    if (loading) return <p>Loading...</p>;
    
    // Mostrar el error si existe
    if (error) return <p>{error}</p>;

    console.log("Mostrando carrito con items:", cartItems);

    return (
        <div className="cart-container">
            <h2 id="cart-title">Your Cart</h2>

            {/* Mapeamos los items del carrito */}
            {cartItems.map(item => (
                <ItemCart 
                    key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    quantity={item.quantity} 
                    imageUrl={item.imageUrl} 
                    itemId={item.id}  // Pasamos el itemId al componente ItemCart
                />
            ))}

            <h3>Total Payment: ${totalAmount.toFixed(2)}</h3>
            <button id="cart-checkout-button">Proceed to Payment</button>
        </div>
    );
};

export default Cart;








/*import React from "react";
import ItemCart from "./ItemCart";
import "../styles/Cart.css";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
    const { cartItems, loading, error } = useCart();

    // Calcular el total del carrito
    const totalAmount = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', '') || 0);
        return total + price * item.quantity;
    }, 0);
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
                    itemId={item.id}  // Pasamos el itemId al componente ItemCart
                />
            ))}

            <h3>Total Payment: ${totalAmount.toFixed(2)}</h3>
            <button id="cart-checkout-button">Proceed to Payment</button>
        </div>
    );
};

export default Cart;*/