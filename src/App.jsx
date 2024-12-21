
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BackgroundShader from './components/BackgroundShader'
import KnockoutSVG from './components/KnockoutSVG'
import './index.css'


const testButton = {
  id:'test_button',
  text: 'Click Me', 
  onElementClick: () => console.log('test Button clicked'), 
  x: '10%px',
  y: '260px',
  width: '200px',
  height: '30px'
}

//--Text
const welcomeText = {
  id:'welcome_text',
  text: 'Welcome to my page!',
  textProps: {fontSize: '2rem', fill: 'black', fontFamily: 'Sour Gummy, serif'}, 
  x: '10%',
  y: '60px',
  width: '80%',
  height: '30px'
}

//--Buttons
const aboutMeButton = {
  id:'aboutMe_button',
  text: 'About Me', 
  onElementClick: () => console.log('about Button clicked'), 
  x: '20%',
  y: '120px',
  width: '60%',
  height: '30px'
}

const contactMeButton = {
  id:'contactMe_button',
  text: 'Contact Me', 
  onElementClick: () => console.log('contact Button clicked'), 
  x: '20%',
  y: '180px',
  width: '60%',
  height: '30px'
}

const myProjectsButton = {
  id:'myProjects_button',
  text: 'My Projects', 
  onElementClick: () => console.log('projects Button clicked'), 
  x: '20%',
  y: '240px',
  width: '60%',
  height: '30px'
}

const initialSVGElements = [
  welcomeText, aboutMeButton, contactMeButton, myProjectsButton
];

function App() {
  const [svgElements,setSVGElements] = useState(initialSVGElements);
  
  return(
    <>
      <div id='background' className='fixed top-0 w-full h-full'>        
        <BackgroundShader />
      </div>

      <div id='foreground' className='fixed top-0 w-full h-full'>
        <KnockoutSVG svgElementProps={svgElements} backgroundColor={"#151515"} />
      </div>
    </>
  )
}

export default App;