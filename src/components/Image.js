import React from 'react';
import './Image.css';
import "../routes/Fade.css";

function Image({ image }) {
    return (
        <div className="image">
            <img src={image} />
        </div>
    );
}

export default Image;