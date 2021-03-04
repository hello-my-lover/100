import React from 'react';
import './Image.css';
import "../routes/Fade.css";

function Image({ id, image }) {
    return (
        <div className="image fade-in">
            <img className="game__image" src={image} alt={id}/>
        </div>
    );
}

export default Image;