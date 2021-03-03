import React, { Component } from "react";
import axios from "axios";
import "./Game.css";
import Image from '../components/Image'
import Quest from '../components/Quest'
class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <Image />
                <Quest />
            </div>
        );
    }
}

export default Game;