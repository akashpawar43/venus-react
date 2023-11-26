import React, { Component } from 'react'
import logo from "../images/Venus_logo.webp"

export default class Footer extends Component {
    render() {
        return (
            <section id="contact_us_section" className="footer-section">
                <footer>
                    <div className="container cont5">
                        <div className="cont6">
                            <div className="foot-png-cont">
                                <div className="foot-png">
                                    <img src={logo} alt="Venus" className='h-100 w-100'/>
                                </div>
                            </div>
                            <div className="footer-address">
                                <span>
                                    A-203, Chandra Enclave, Rai, Near
                                </span>
                                <span>
                                    Royal School, Bhayandar (West),
                                </span>
                                <span>
                                    Thane - 401101.
                                </span>
                            </div>
                        </div>
                        <div className="footer-nav">
                            <span className="us-link">Navigations</span>
                            <span><a href="/">Home</a></span>
                            <span><a href="/gallery">Gallary</a></span>
                            <span><a href="#about_us_section">about us</a></span>
                            <span><a href="/contact">contact us</a></span>
                        </div>
                        <div className="footer-service">
                            <span className="us-link">Services</span>
                            <span><a href="/gallery">Homes</a></span>
                            <span><a href="/gallery">Resorts</a></span>
                            <span><a href="/gallery">Offices</a></span>
                        </div>
                        <div className="footer-social">
                            <span className="foot-social-head">Salvador Rodrigues</span>
                            <span className="foot-social-sub">Director</span>
                            <div className="foot-contact">
                                <span><i className="fa-solid fa-phone-volume contact-png"></i>+(91) 8976392353</span>
                                <span><i className="fa-regular fa-envelope-open contact-png"></i><a href="mailto:info@venusinternationals.com" style={{color: "rgb(187, 179, 179)", textDecoration:"none"}}> info@venusinternationals.com </a></span>
                                <span><i className="fa-solid fa-globe contact-png"></i>www.venusinternationals.com</span>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="row foot-right">
                    <div className="col-md-12 py-1 text-center" style={{maxWidth: "1320px",margin: "0 auto",borderTop: "1px solid #726969"}}>
                        <p>&copy; 2023 Venus Internationals. All rights reserved.</p>
                    </div>
                </div>
            </section>
        )
    }
}