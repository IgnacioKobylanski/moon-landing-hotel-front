import React from "react";
import '../styles/Header.css';

const Header = () => {
    return(
        <header>
            <nav className='header-nav'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <h1 className="title-header">Moon Landing Hotel</h1>
        </header>
    );
};

export default Header;