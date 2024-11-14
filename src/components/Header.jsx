import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import UserIcon from "./UserIcon";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ userData, onLogout }) => {
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
                        {/* Botón de "View Profile" */}
                        <button className="profile-button" onClick={() => console.log("View Profile")}>View Profile</button>

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
