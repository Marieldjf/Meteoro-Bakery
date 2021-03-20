import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SideMenuBrownies from '../components/SideMenuBrownies';

const brownies = () => {
    return (
        <div>
        <Navbar/>    
        <SideMenuBrownies/>
        <Footer/>
        </div>
    )
}

export default brownies;
