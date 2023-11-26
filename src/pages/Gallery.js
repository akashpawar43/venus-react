import React, { Component } from 'react'
import "../gallary.css"
import Banner2 from '../components/Banner2'
import Footer from '../components/Footer'
import ImGalllery from '../components/ImGallery'
import Navbar from '../components/Navbar'

export default class Gallery extends Component {
    componentDidMount(){
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
                <Footer />
            </>
        )
    }
}