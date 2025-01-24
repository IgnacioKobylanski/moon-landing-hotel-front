import React, { useState, useEffect } from "react";
import "../styles/UserPage.css";

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        console.log("Datos obtenidos de localStorage:", userData);

        if (!userData) {
            setError("No user logged in. Please log in.");
            console.log("No user data found in localStorage.");
            return;
        }

        // Parseamos los datos del usuario
        const parsedUser = JSON.parse(userData);
        console.log("Datos del usuario parseados:", parsedUser);

        // Establecemos el estado del usuario
        setUser(parsedUser);
    }, []);

    // Si no hay datos del usuario, mostramos un mensaje de error
    if (error) {
        console.log("Error:", error);
        return (
            <div className="user-page-main">
                <p>{error}</p>
            </div>
        );
    }

    // Si los datos del usuario aún no están disponibles
    if (!user) {
        console.log("Cargando datos del usuario...");
        return (
            <div className="user-page-main">
                <p>Loading user data...</p>
            </div>
        );
    }

    // Si los datos del usuario están disponibles, los mostramos
    console.log("Mostrando datos del usuario:", user);

    return (
        <div className="user-page-main">
            <h3>Welcome to your profile page!</h3>
            <div>
                <span><strong>Name:</strong> {user.username}</span> {/* Muestra el nombre del usuario */}
            </div>
            <div>
                <span><strong>Email:</strong> {user.email ? user.email : 'No email available'}</span> {/* Muestra el correo del usuario */}
            </div>
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