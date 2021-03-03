import React, { Component } from "react";
import axios from "axios";
import "./Game.css";
import Image from '../components/Image'
import Quest from '../components/Quest'

class Game extends React.Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetch('content.json')
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                this.setState({ list: json });
            }.bind(this));
    }

    render() {
        const list = this.state;

        return (
            <div className="container">
                {list.map(content => (
                    <div>
                        <Image
                            image={content.image} />
                        <Quest 
                            id={content.id} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Game;