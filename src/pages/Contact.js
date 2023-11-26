import React, { Component } from 'react'
import "../contact.css";
import "../media.css";
import Navbar from '../components/Navbar';
import Address from '../components/Address';
import Footer from '../components/Footer';
import Banner2 from '../components/Banner2';


export default class Contact extends Component {
    componentDidMount (){
        document.title = 'Venus - Contact'
    }
    render() {
        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Banner2 />
                    <Address />
                </main>
                <Footer />
            </>
        )
    }
}