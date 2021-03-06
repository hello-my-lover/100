import React from 'react';
import './Quest.css';
import "../routes/Fade.css";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Quest({ id, desc, isChoice, choice, onClick, nextId, ending, isEnded}) {
    if (isChoice && !ending) {
        return (
            <div className="quest">
                <span>{desc}</span>
                <button onClick={
                    () => onClick(choice[0].id)}>{choice[0].name}</button>
                <button onClick={
                    () => onClick(choice[1].id)}>{choice[1].name}</button>
            </div>
        );
    }
    else if (ending) {
        return (
            <div className="quest">
                <span>{desc}</span>
                <button onClick={
                    () => onClick(nextId)
                }>▼ {ending}</button>
            </div>
        );
    }
    else if (isEnded) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <div className="quest">
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