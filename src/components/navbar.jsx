import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-lg">
            <ul className="flex justify-center space-x-6">
                <li className="text-white hover:text-gray-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-gray-300">
                    <Link to="/profile">Profile</Link>
                </li>
                <li className="text-white hover:text-gray-300">
                    <Link to="/acc">Accounts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
