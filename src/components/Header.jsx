import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import UserIcon from "./UserIcon";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ userData, onLogout }) => {
    const navigate = useNavigate(); // Inicializa el hook para navegación

    const handleViewProfile = () => {
        navigate('/user');  // Redirigir al perfil del usuario cuando haga clic en "View Profile"
    };

    return (
        <header>
            <Link to="/" className="logo-link">
                <img src="moonlanding-hotel-logo.png" alt="Logo" className="logo"/>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/hotel-info">Hotel Info</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>
            <div className="user-cart-icons">
                {userData ? (
                    <div className="user-options">
                        <span>Welcome, {userData.username}!</span>
                        <button className="profile-button" onClick={handleViewProfile}>View Profile</button>

                        <button onClick={onLogout} className="logout-button">Logout</button>
                    </div>
                ) : (
                    <Link to="/login" className="login-link">
                        <UserIcon className="user-icon" />
                    </Link>
                )}
                <Link to="/cart">
                    <FaShoppingCart className="cart-icon" />
                </Link>
            </div>
        </header>
    );
};

export default Header;