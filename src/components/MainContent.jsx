import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutMePage';
import Projects from '../pages/ProjectsPage';
import Contact from '../pages/ContactMePage';

const MainContent = () => {
return (
    
    <div className='fixed top-28 left-72 text-transparent [-webkit-background-clip: text;] backdrop-blur-sm bg-clip-text'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
);
};

export default MainContent;