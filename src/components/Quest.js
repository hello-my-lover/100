import React from 'react';
import './Quest.css';
import "../routes/Fade.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Quest({ id, desc, isChoice, choice, onClick, nextId }) {
    if (isChoice) {
        return (
            <div className="quest fade-in">
                <span>{desc}</span>
                <button onClick={
                    () => onClick(choice[0].id)}>{choice[0].name}</button>
                <button onClick={
                    () => onClick(choice[1].id)}>{choice[1].name}</button>
            </div>
        );
    }
    else {
        return (
            <div className="quest fade-out">
                <span>{desc}</span>
                <button onClick={
                    () => onClick(nextId)
                }>▼</button>
            </div>
        );
    }
}

Quest.propTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Quest;