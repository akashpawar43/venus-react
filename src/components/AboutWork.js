import React, {Component} from 'react'

export default class AboutWork extends Component {
    render() {
        return (
            <section id="services_section" className="py-5">
                <div className="container">
                    <h1 className="text-center text-secondary">Benefits of using Shipping container</h1>
                    <div className="row mt-5">
                        <div className="col-md-4 height-auto wid-100">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="container text-center py-3">
                                        <i className="fa-solid fa-person-digging png-s py-3"></i>
                                    </div>
                                    <h5 className="card-title">Quick Construction </h5>
                                    <p className="gray">The construction of containers is much quicker than conventional ways of
                                        construction. In off-site production, smaller homes can be completely manufactured
                                        within 3 weeks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 height-auto wid-100">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="container text-center py-3">
                                        <i className="fa-solid fa-hand-fist png-s py-3"></i>
                                    </div>
                                    <h5 className="card-title">High strength & Durability</h5>
                                    <p className="gray">Containers are made for long-lasting purposes. Their initial aim is to live
                                        on an ocean tanker that is exposed to the elements for several months and thousands of
                                        miles.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 height-auto wid-100">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="container text-center py-3">
                                        <i className="fa-solid fa-recycle png-s py-3"></i>
                                    </div>
                                    <h5 className="card-title">Less Carbon foot prints</h5>
                                    <p className="gray">The most important influence on the use of steel is whenever you plan to use
                                        a renovated container. You also reduce the use of more conventional construction
                                        materials, such as wood and steel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}