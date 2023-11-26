import React, { Component , useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class About extends Component {
    
    
    render() {
        useEffect(() => {
          document.title = 'Venus - Contact';
        }, []);
        return (
            <div className='Contact'>
                <Navbar/>
                <Footer/>
            </div>
        )
    }
}