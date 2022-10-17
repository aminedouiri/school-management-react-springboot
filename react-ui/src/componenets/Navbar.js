import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-gray-800">
            <div className="h-16 px-8 flex items-center">
                <p className="text-white">School Management</p>
                <Link to="/students" className="text-white px-4">Students</Link>
            </div>
        </div>
        
    )
}

export default Navbar
