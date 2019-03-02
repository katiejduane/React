import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <nav className="deep-orange lighten-2" role="navigation">
            <div className="nav-wrapper container" className="brand-logo center">fruitSMOOTHIE
                <ul className="right">
                    <li><Link to={"/"}>Ideas</Link></li>
                    <li><Link to={"/inspire"}>Inspiration</Link></li>
                    <li><Link to={"/current"}>Current</Link></li>
                    <li><Link to={"/completed"}>Completed</Link></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons"></i></a>
            </div>
        </nav>
    )
}