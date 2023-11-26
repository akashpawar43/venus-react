import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import images from "../images"

export default class About extends Component {
    render() {
        return (
            <section id="about_us_section" className="banner3_section">
                <div className="cont2 text-center">
                    <section className="banner3 py-5">
                        <div className="container media-p my-4">
                            <div className="row">
                                <div className="col-md-6 text-start height-100 pad-0">
                                    {/* <!-- left side --> */}
                                    <span className="about-head-text">ABOUT US</span>
                                    <h1 className="about-title">Live simply so that others may simply live.</h1>
                                    <p className="gray about-dis">
                                        Venus Internationals is working in the areas of RRR i.e. Reduce, Reuse, Recycle. We
                                        have skilled and trained work force at our workshop.
                                    </p>
                                    <p className="gray about-dis">
                                        We have been working on up cycling of materials and have worked with huge range of
                                        materials.
                                    </p>
                                    <p className="gray about-dis">
                                        We offer wide range of products from Homes, Offices, Farm House’s, Resorts etc. In
                                        Short that’s easy to put together, eco friendly and durable.
                                    </p>
                                    <button className="btn btn-green mt-4 py-2 "><Link style={{textDecoration: "none", color: "white"}}
                                            to="/contact">Contact us</Link></button>
                                </div>
                                <div className="col-md-6 text-end height-100 b3-py1">
                                    {/* <!-- right side --> */}
                                    <div>
                                        <img src={images.bedroom} loading="lazy" className="img-fluid ban-img2" height="100%" width="100%"
                                            style={{maxHeight: 40 + "rem"}} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}