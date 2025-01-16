import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../api";

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto de carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);  // Elementos en el carrito
    const [loading, setLoading] = useState(true);    // Cargando estado
    const [error, setError] = useState(null);        // Estado de error
    const userId = 1;  // Aquí podrías usar el `userId` del login (estático o de sesión)

    useEffect(() => {
        // Solo hacer la llamada si `userId` es válido
        if (!userId) {
            setLoading(false);  // Si no hay `userId`, dejar de cargar
            return;
        }

        const fetchReservations = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/reservations/user/${userId}`);
                setCartItems(response.data);
            } catch (err) {
                setError("Error fetching reservations.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, [userId]);

    // Función para agregar un item al carrito
    const addItemToCart = (item) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    };

    // Función para eliminar un item del carrito
    const removeItemFromCart = (itemId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            loading,
            error,
            addItemToCart,
            removeItemFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => {
    return useContext(CartContext);
};
