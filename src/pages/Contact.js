import React, { Component } from 'react'
import "../components/contact.css";
import Navbar from '../components/Navbar';
import Address from '../components/Address';
import Footer from '../components/Footer';
import Banner2 from '../components/Banner2';


export default class Contact extends Component {
    componentDidMount (){
        let nav_items1 = document.getElementById("i4");
        nav_items1.style.color = "#43A047";
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
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
}