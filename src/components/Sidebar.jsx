import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Sidebar = () => {
  return (
    <div className="fixed top-20 left-0 w-fit h-full bg-secondc text-secondc p-4 z-10">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-fourthc hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
    </div>
  );
}

export default Sidebar;