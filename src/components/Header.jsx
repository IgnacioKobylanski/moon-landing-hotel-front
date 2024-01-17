import React from "react";
import '../styles/Header.css';
import Login from './Login'; // Asegúrate de proporcionar la ruta correcta al componente Login

const Header = ({ onLogin }) => {
    return (
        <header>
            <nav className='header-nav'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <h1 className="title-header">Moon Landing Hotel</h1>
            <Login onLogin={onLogin} />
        </header>
    );
};

export default Header;
