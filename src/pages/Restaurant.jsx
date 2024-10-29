import React from "react";
import '../styles/Restaurant.css';

const Restaurant = () => {
    return (
        <div className="resto-main">
            <h2>Tasty Food</h2>
            <p>Try our best dishes</p>

            {/* Primer bloque de texto e imagen */}
            <div className="resto-item">
                <p>Our signature dish: Grilled Salmon with herbs. A perfect choice for seafood lovers!</p>
                <img src="https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Grilled Salmon" />
            </div>

            {/* Segundo bloque de texto e imagen */}
            <div className="resto-item">
                <p>Delicious Pasta: Fresh ingredients with a homemade sauce. A must-try!</p>
                <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Delicious Pasta" />
            </div>

            {/* Frase final con imagen */}
            <div className="resto-footer">
                <p>Join us for an unforgettable dining experience!</p>
                <img src="https://images.pexels.com/photos/29109680/pexels-photo-29109680/free-photo-of-comedor-elegante-de-estilo-vintage-con-paneles-de-madera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dining Experience" />
            </div>
        </div>
    );
}

export default Restaurant;
