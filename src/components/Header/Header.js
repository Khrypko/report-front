import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/items">Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reports">reports</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;