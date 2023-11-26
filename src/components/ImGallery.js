import React, { Component } from 'react'
import images from '../images'

export default class ImGalllery extends Component {
    render() {
        return (
            <section className="gallery-container">
                <div className="container">
                    <div className="row stick">
                        <div className="col-md-12 text-center filter-btn-group">
                            <button className="btn btn-green active" data-filter="all">All</button>
                            <button className="btn btn-green" data-filter="category2">Interiors</button>
                            <button className="btn btn-green" data-filter="category1">Exteriors</button>
                        </div>
                    </div>
                    <div className="row gallery-items">
                        <div className="col-md-4 gallery-img mb-4 hei category1">
                            <img src={images.ex1} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category2">
                            <img src={images.in1} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category1">
                            <img src={images.ex2} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category2">
                            <img src={images.in2} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category1">
                            <img src={images.ex3} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category2">
                            <img src={images.in3} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category1">
                            <img src={images.ex4} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category2">
                            <img src={images.in4} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category1">
                            <img src={images.ex5} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category2">
                            <img src={images.in5} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category1">
                            <img src={images.ex6} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-4 gallery-img mb-4 hei category2">
                            <img src={images.in6} alt="Image 1" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}