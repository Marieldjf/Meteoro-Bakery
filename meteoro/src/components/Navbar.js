import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex-1 md:h-16 md:flex md:items-center md:justify-between px-6 bg-naranja">
            <div className="flex-1 text-gray-100 text-center px-4 py-2 m-2"></div>
            <div className="relative text-gray-600">
            <input type="search" name="serch" placeholder="Buscar" class="bg-white h-8 px-5 pr-10 mr-12 rounded-full text-sm focus:outline-none"></input>
            <button type="submit" class="absolute right-0 top-0 mt-1 mr-16">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            </div>
            
            
    
            



            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <svg className="w-6 h-6 ml-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <button className="block uppercase mx-auto shadow bg-gunmetal hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-8 ml-8 mr-4 rounded-full">Login</button>
        </div> 
    )
}

export default Navbar
