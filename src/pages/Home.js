import React, { Component } from 'react'
import "../components/App.css";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import AboutWork from '../components/AboutWork';
import PreImg from '../components/PreImg';
import Footer from '../components/Footer';


export default class Home extends Component {
    componentDidMount () {
        document.title = 'Venus International'
    }

    render() {
        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Hero />
                    <Banner />
                    <About />
                    <AboutWork />
                    <PreImg />
                </main>
                <Footer />
            </>
        )
    }
}