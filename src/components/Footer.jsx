import React from "react";
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Moon Landing Hotel. All rights reserved.</p>
        </footer>
    );
};

export default Footer;