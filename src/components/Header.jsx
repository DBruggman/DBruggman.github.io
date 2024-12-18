import React from 'react';
//import './Header.css'; // Make sure to create a corresponding CSS file for styling

const Header = () => {
    <div style={{ display:'flex', justifyContent:'space-between', padding:'1rem', background: '#222', color: "white" }}>
        <div style={{ fontSize: "1.5rem" }}> Drew Bruggman </div>
        <div>
            <a href="www.linkedin.com/in/drew-bruggman" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="www.github.com/DBruggman" target="_blank" rel="noopener noreferrer">GitHub</a> |
        </div>
    </div>
}

export default Header;