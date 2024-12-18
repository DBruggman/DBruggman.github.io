import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    <div style={{ width:'200px', background:'#333', height: '100vh', position:'fixed', top:0, left:0, paddingTop: "3rem"}}>
        <nav style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Link to="/" style={{ color: 'white', padding: '0.5rem' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', padding: '0.5rem' }}>About</Link>
            <Link to="/projects" style={{ color: 'white', padding: '0.5rem' }}>Projects</Link>
            <Link to="/contacts" style={{ color: 'white', padding: '0.5rem' }}>Contacts</Link>
        </nav>
    </div>
}

export default Sidebar;