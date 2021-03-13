import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex-1 md:h-16 bg-white md:flex md:items-center md:justify-between px-6 bg-naranja">
            <div className="flex-1 text-gray-100 text-center px-4 py-2 m-2"></div>
            <a className="text-gray-900 text-xl px-2 cursor-pointer">Home</a>
            <a className="text-gray-900 text-xl px-2 cursor-pointer">Projects</a> 
            <a className="text-gray-900 text-xl px-4 cursor-pointer" ></a>
        </div> 
    )
}

export default Navbar
