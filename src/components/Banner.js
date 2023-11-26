import { render } from '@testing-library/react'
import React, { Component } from 'react'
import images from "../images"

export default class Banner extends Component {
    render() {
        const myStyle = {
            "height" : "100%",
            "display": "flex",
            "objectFit": "unset"
        }
        return (
            <section className="banner2_section py-5">
                <div className="container media-p">
                    <div className="row row-20 row-100">
                        <div className="col-md-6 text-center height-100">
                            {/* <!-- right side --> */}
                            <img src={images.dis} loading="lazy" className="img-fluid ban-img text-start"
                                style={myStyle} alt=""/>
                        </div>
                        <div className="col-md-6 text-start height-100 py-4 pad-0">
                            {/* <!-- left side --> */}
                            <h1 style={{fontSize: 2 +"rem", fontWeight:"700", color:"#4d4242"}}>A place for everything.</h1>
                            <p className="gray" >Small living may seem like a recent trend, but hundreds of great minds across
                                history have long mused on the possibility of small living – be it in a tiny house, a container
                                home, or even a hobbit-hole. Here are some of the greatest quotes assembled by some of the most
                                prestigious writers, thinkers, and wordsmiths throughout history on the subject.</p>
                            <button className="btn btn-green"><a style={{textDecoration: "none", color: "white"}}
                                href="#display_section">Click here</a></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}