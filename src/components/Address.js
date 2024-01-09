import React, { Component } from 'react';


export default class Address extends Component {
    render() {
        const ftSize = {
            "fontSize": "1.3rem"
        };
        return (
            <section id="about_us_section" style={{ background: "linear-gradient(to right, #0575E6, #00F260)" }}>
                <div className="container text-center py-5">
                    <div className="row flex-center text-center my-5">
                        <div className="col-md-12 col-lg-6">
                            <h2 className="py-3" style={{ fontWeight: "700" }}>Contact Information</h2>
                            <p className="pb-1" style={ftSize}><strong>Director:</strong> Salvador Rodrigues</p>
                            <p className="pb-1" style={ftSize}><strong>Address:</strong> A-203, Chandra Enclave,
                                Rai,
                                Near Royal School, Bhayandar (West), Thane
                                - 401101</p>
                            <p className="pb-1" style={ftSize}><strong>Phone:</strong> +(91) 8976392353</p>
                            <p className="pb-2" style={ftSize}><strong>Email:</strong> info@venusinternationals.com
                            </p>
                            <div className="social-icons pb-4">
                                <a href="https://www.facebook.com/example" rel="noreferrer noopener" target="_blank"><i
                                    className="fab fa-facebook-f fa-lg px-1"></i></a>
                                <a href="https://www.twitter.com/example" rel="noreferrer noopener" target="_blank"><i
                                    className="fab fa-twitter fa-lg px-1"></i></a>
                                <a href="https://www.linkedin.com/in/example" rel="noreferrer noopener" target="_blank"><i
                                    className="fab fa-linkedin-in fa-lg px-1"></i></a>
                                <a href="https://www.instagram.com/example" rel="noreferrer noopener" target="_blank"><i
                                    className="fab fa-instagram fa-lg px-1"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wid">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60253.10724158849!2d72.7972070757095!3d19.290227031262173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b18573989d15%3A0x5c38670bcf0f29c7!2sChandra%20Enclave%20Building!5e0!3m2!1sen!2sin!4v1681368609912!5m2!1sen!2sin"
                                    width="300px" height="300px" style={{ borderRadius: "50%" }} allowfullscreen=""
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myFrame"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}