import React from "react";
import '../styles/Events.css'


function Events({ title, content, imageSrc, className }) {
    return (
      <article className={className}>
        <div className='div-text'>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <img src={imageSrc} alt="Imagen" />
      </article>
    );
  }
  
  export default Events;