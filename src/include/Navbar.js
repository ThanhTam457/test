import React from 'react'
import '../css/navbar.css'

const Navbar = () =>{
    return(
        <div className='div-navbar'>
            <div className='div-travel-text'>
                Travel
            </div>
            <img className='arrow' src="/images/Arrow1.png" alt="arrow" width={50} />
            <div className='div-link' style={{display:'flex', flexDicrection: 'row'}}>
                <a style={{padding: '10px'}} to = '/' className='active'>Home</a>
                <a style={{padding: '10px'}} to = 'about'>About</a>
                <a style={{padding: '10px'}} to = 'service'>Services</a>
                <a style={{padding: '10px'}} to = 'upcomming'>Upcomming Packages</a>
            </div>
            <button className='button-header'>Get in Touch</button>
        </div>
    );
}
export default Navbar