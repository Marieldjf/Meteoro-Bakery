import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideMenuCookies from '../components/SideMenuCookies'


const cookies = () => {
    return (
        <div>  
        <Navbar/>    
        <SideMenuCookies/>
        <Footer/>
        </div>
    )
}

export default cookies;
