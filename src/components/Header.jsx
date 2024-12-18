import React from 'react';
//import './Header.css'; // Make sure to create a corresponding CSS file for styling

const Header = () => {
    return(

        <div className="fixed top-0 left-0 w-full h-fit bg-gray-900 bg-opacity-95 text-white p-4 z-20">
            <div className="text-2x1 text-center"> Drew Bruggman </div>
            <div className="text-2x1 text-center">
                <a href="www.linkedin.com/in/drew-bruggman" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="www.github.com/DBruggman" target="_blank" rel="noopener noreferrer">GitHub</a> 
            </div>
        </div>
    )
}

export default Header;