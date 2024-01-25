import React from "react";
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, imageUrl, link }) => {
    return (
        <a href={link} className="service-item">
            <div className="service-item-content">
                <img
                    className="service-item-image"
                    src={imageUrl}
                    alt={title}
                />
                <h3 className="service-item-title">{title}</h3>
            </div>
        </a>
    );
};

export default ServiceCard;
