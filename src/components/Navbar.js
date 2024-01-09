import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/Venus_logo.webp"

export default class navbar extends Component {
    render() {
        return (
            <section id="home_section">
                <nav className="navbar navbar-expand-lg py-2 bg-dark navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" aria-label="Home Page" href="/">
                            <img src={logo} alt="" width="60" height="30" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link" id="i1" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="i2" aria-current="page" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" id="i3" aria-current="page" href="#about_us_section">About</Link> */}
                                    {/* <Link className="nav-link" id="i3" aria-current="page" to="/#about_us_section">About</Link> */}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="i4" aria-current="page" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        )
    }
}