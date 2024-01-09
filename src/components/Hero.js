import React, { Component } from "react";


export default class Hero extends Component {
    render() {
        return (
            <section className="start-section ">
                <div className="start-img" style={{backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                    <div className="overlay"></div>
                    <div className="container start-box">
                        <div className="start-box-left">
                            <div className="star-box-left-in">
                                <span className="start-text">
                                    We make your dreams come true.
                                </span>
                            </div>
                        </div>
                        <div className="start-box-right" ></div>
                    </div>
                </div>
            </section>
        );
    }
}
