import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import images from '../images'

export default class PreImg extends Component {
    render() {
        return (
            <section id="display_section" className="display-pic" >
                <div className="container text-center ">
                    <span className="pics-title">Enjoy Your Vacation Here</span>
                    <span className="pics-title-sub">We offer wide range of products from Homes, Offices, Farm House’s, Resorts etc.
                        In Short that’s easy to put together, eco friendly and durability</span>
                    <div className="cont3 text-center py-5">
                        <div className="cont-img">
                            <div id="ban3-1" className='h-100 w-100'>
                                <img id="ban3-1" className="ban-3 h-100 w-100" src={images.sh1} alt="" />
                            </div>
                        </div>
                        <div className="cont-img">
                            <div id="ban3-2" className='h-100 w-100'>
                                <img id="ban3-2" className="ban-3 h-100 w-100" src={images.sh2} alt="" />
                            </div>
                        </div>
                        <div className="cont-img">
                            <div id="ban3-3" className='h-100 w-100'>
                                <img id="ban3-2" className="ban-3 h-100 w-100" src={images.sh3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <Link className="btn-a" to="/gallery">
                            <button className="btn-gal" >
                                Visit Gallery
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}