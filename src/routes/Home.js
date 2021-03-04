import React from "react";
import "./Home.css";
import "./Fade.css";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container fade-in">
                <Link className="link" to='/game'>
                <img className="start__image" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdVYISK%2FbtqZjvNAHJp%2Fo9T97LclTN2t4RKXOqySFK%2Fimg.png" alt="start" />
                </Link>
            </div>
        );
    }
}

export default Home;