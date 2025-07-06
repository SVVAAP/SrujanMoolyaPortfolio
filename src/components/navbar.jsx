import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black/90 border-b border-gray-800 p-4 shadow-lg sticky top-0 z-50">
            <ul className="flex justify-center space-x-6">
                <li className="text-sky-100 hover:text-sky-400 font-semibold transition-colors text-lg">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-sky-100 hover:text-sky-400 font-semibold transition-colors text-lg">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="text-sky-100 hover:text-sky-400 font-semibold transition-colors text-lg">
                    <Link to="/game-developer">Game Developer</Link>
                </li>
                <li className="text-sky-100 hover:text-sky-400 font-semibold transition-colors text-lg">
                    <Link to="/Projects">Projects</Link>
                </li>
                <li className="text-sky-100 hover:text-sky-400 font-semibold transition-colors text-lg">
                    <Link to="/SocialMedias">Social</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
