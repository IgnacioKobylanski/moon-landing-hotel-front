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
        console.log("Token en localStorage:", token);  // Verificar si el token está en el localStorage
        
        if (token) {
            setIsLoggedIn(true);  // Si el token está presente, el usuario está logueado
            console.log("Usuario logueado");
        } else {
            setIsLoggedIn(false);  // Si no hay token, el usuario no está logueado
            console.log("Usuario no logueado");
        }
    }, []);  // Se ejecuta solo una vez cuando el componente se monta

    // Si no está logueado, mostrar el mensaje y no cargar el carrito
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