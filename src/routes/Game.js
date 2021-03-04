import React from "react";
import "./Game.css";
import "./Fade.css";
import Image from '../components/Image'
import Quest from '../components/Quest'

class Game extends React.Component {
    state = {
        isLoading: true,
        currentId: 0,
        list: [],
    };

    handleClick = (nextId) => {
        this.setState( {
            currentId: nextId,
        })
    }

    componentDidMount() {
        fetch('100/content.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                console.log(json);
                this.setState({ list: json, isLoading: false });
            }.bind(this));
    }

    render() {
        const { isLoading, currentId, list } = this.state;
        console.log(currentId);

        return (
            <div className="fade-in">
                {isLoading ? (
                    <div>
                        <span>Loading</span>
                    </div>
                ) : (
                        <div className="container">
                            <Image 
                                id={list[currentId].id} 
                                image={list[currentId].image}
                            />
                            <Quest id={list[currentId].id}
                                desc={list[currentId].desc}
                                isChoice={list[currentId].isChoice}
                                choice={list[currentId].choice}
                                onClick={this.handleClick} 
                                nextId={list[currentId].nextId}
                                ending={list[currentId].ending} />
                        </div>
                    )}
            </div>
        );
    }
}

export default Game;