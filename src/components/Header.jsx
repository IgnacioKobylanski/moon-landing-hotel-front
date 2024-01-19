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
                <a href="">More Info</a>
                <a href="">Contact us</a>
            </nav>
            <UserIcon />
        </header>
    );
};

export default Header;
