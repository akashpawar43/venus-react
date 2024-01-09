import React, { Component } from 'react'
import "../components/gallary.css"
import Banner2 from '../components/Banner2'
import Footer from '../components/Footer'
import ImGalllery from '../components/ImGallery'
import Navbar from '../components/Navbar'

export default class Gallery extends Component {
    componentDidMount(){
        let nav_items1 = document.getElementById("i2");
        nav_items1.style.color = "#43A047";
        document.title = 'Venus - Gallery'
    }

    render() {
        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Banner2 />
                    <ImGalllery/>
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
}