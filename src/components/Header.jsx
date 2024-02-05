import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import UserIcon from "./UserIcon";

const Header = ({ onLogin }) => {
    return (
        <header>
            <Link to="/" className="logo-link">
                <img src="moonlanding-hotel-logo.png" alt="" className="logo"/>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/hotel-info">Hotel Info</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>
            <UserIcon />
        </header>
    );
};

export default Header;
