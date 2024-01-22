import React from "react";
import '../styles/Header.css';
import CustomNav from "./CustomNav";
import UserIcon from "./UserIcon";

const Header = ({ onLogin }) => {
    return (
        <header>
            <img src="moonlanding-hotel-logo.png" alt="" className="logo"/>
            <nav>
                <a href="">Home</a>
                <a href="">Rooms</a>
                <a href="">Hotel Info</a>
                <a href="">Galery</a>
                <a href="">Events</a>
                <a href="">Contact Us</a>
            </nav>
            <UserIcon />
        </header>
    );
};

export default Header;
