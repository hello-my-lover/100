import React from 'react';
import './Image.css';
import "../routes/Fade.css";
import { Link } from 'react-router-dom';

function Image({ id, image, isEnded }) {

    if (isEnded && id == 20) {
        return (
            <div className="image">
                <Link className="link" to="/letter">
                    <img className="ending__image fade-in" src={image} alt={id} />
                </Link>
            </div>
        );
    } else if (isEnded && id == 21) {
        return (
            <div className="image">
                <Link className="link" to="/present">
                    <img className="ending__image fade-in" src={image} alt={id} />
                </Link>
            </div>
        );
    }
    return (
        <div className="image">
            <img className="game__image" src={image} alt={id} />
        </div>
    );
}

export default Image;