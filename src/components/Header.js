// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'; // Import your logo image from the images folder
import Text from "../Images/motorcycle__1_-removebg-preview.png";
import Home from "../Images/Home.png";
import display from "../Images/display-removebg-preview (1).png";
import Login from "../Images/login.png";
function Header() {
    return (
        <header style={{ marginBottom: "20px" }}>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        {/* Logo image */}
                        <img src={logo} alt="Bike Borrow Logo" style={{ height: '50px', marginLeft: "30px" }} />
                    </Link>
                    <img src={Text} alt="Bike Borrow Logo" style={{ height: '40px', marginLeft: "30px" }} />

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/home">
                                    <img src={Home} alt="Bike Borrow Logo" style={{ height: '25px', marginLeft: "30px" }} />
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/display">
                                    <img src={display} alt="Bike Borrow Logo" style={{ height: '25px' }} />
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">
                                    <img src={Login} alt="Bike Borrow Logo" style={{ height: '22px' }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
