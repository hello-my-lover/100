import React from "react";
import "./Home.css";
import "./Fade.css";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container fade">
                <Link className="link" to='/game'>
                <h1>💜</h1>
                </Link>
            </div>
        );
    }
}

export default Home;