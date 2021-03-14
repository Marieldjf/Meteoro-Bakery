import React from 'react';
import { Link } from 'react-router-dom';
import meteoroLogo from '../images/meteorologo.png';

const Navbar = () => {
    return (
        <div className="flex-1 md:h-20 md:flex md:items-center items-center flex md:justify-between bg-naranja">
            {/*Logo*/}
            <div className="md:px-10 md:py-3 px-2 py-2 bg-hueso">
                <img src={meteoroLogo} className="md:h-16 h-12"></img>
            </div>

            {/* Divisor */}
            <div className="md:flex-1 md:text-gray-100 md:text-center md:px-4 md:py-2 md:m-2"></div>

            {/* Search Bar */}
            <div className="md:relative relative text-gray-600">
                <input type="search" name="serch" placeholder="Buscar" class="bg-white md:h-8 md:px-5 px-1 h-6 text-xs mr-4 ml-4 md:pr-10 md:mr-12 rounded-full md:text-sm focus:outline-none"></input>
            <button type="submit" class="md:absolute md:right-0 md:top-0 md:mt-1 md:mr-16 absolute mr-16 mt-1 left-36">
                <svg className="md:w-6 md:h-6 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            </div>

            {/* iconos */}
            <svg className="md:w-6 md:h-6 w-6 h-6 mr-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <svg className="md:w-6 md:h-6 md:ml-8 w-6 h-6 mr-1" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <button className="block uppercase md:mx-auto shadow bg-gunmetal hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white md:text-xs text-xs px-4 py-1 ml-2 mr-2  md:py-2 md:px-8 md:ml-8 md:mr-12 rounded-full">Login</button>
        </div> 
    )
}

export default Navbar
