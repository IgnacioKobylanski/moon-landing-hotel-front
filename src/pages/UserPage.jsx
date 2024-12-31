import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/UserPage.css";

const UserPage = ({ userData }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (!userData || !userData.userId) return; // Verificamos que haya un usuario logueado

            try {
                // Llamada GET al backend para obtener los datos del usuario
                const response = await api.get(`/users/${userData.userId}`);
                setUser(response.data);
            } catch (err) {
                setError("User not found!");
            }
        };

        fetchUser();
    }, [userData]);

    if (!userData || !userData.userId) {
        return (
            <div className="user-page-main">
                <p>No user logged in. Please log in.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="user-page-main">
                <p>{error}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="user-page-main">
                <p>Loading user data...</p>
            </div>
        );
    }

    return (
        <div className="user-page-main">
            <h3>Welcome to your profile page!</h3>
            <span><strong>Name:</strong> {user.name} {user.lastname}</span>
            <span><strong>Email:</strong> {user.email}</span>
        </div>
    );
};

export default UserPage;





/* import React from "react";
import "../styles/UserPage.css"; // Asegúrate de que aquí tienes las reglas CSS aplicadas.
import users from "../bbdd/users";

const UserPage = ({ userData }) => {
    // Verifica si userData es null o no tiene userId
    if (!userData || !userData.userId) {
        return (
            <div className="user-page-main">
                <p>No user logged in. Please log in.</p>
            </div>
        ); // Mensaje cuando no hay datos del usuario
    }

    // Encuentra el usuario en la base de datos usando el userId
    const user = users.find(u => u.id === userData.userId);

    if (!user) {
        return (
            <div className="user-page-main">
                <p>User not found!</p>
            </div>
        ); // Mensaje si el usuario no se encuentra
    }

    // Si el usuario existe, muestra sus detalles
    return (
        <div className="user-page-main">
            <h3>Welcome to your profile page!</h3>
            <span><strong>Name:</strong> {user.name} {user.lastname}</span>
            <span><strong>Email:</strong> {user.email}</span>
        </div>
    );
};

export default UserPage;
 */