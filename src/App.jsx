
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BackgroundShader from './components/BackgroundShader'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import KnockoutSVG from './components/KnockoutSVG'
import './index.css'


const testButton = {
  id:'test_button',
  text: 'Click Me', 
  onElementClick: () => console.log('Button clicked'), 
  x: '60px',
  y: '260px',
  width: '100px',
  height: '60px'
}



const initialSVGElements = [
  testButton
];

function App() {
  const [svgElements,setSVGElements] = useState(initialSVGElements);
  
  return(
    <>
      <div id='background' className='fixed top-0 w-full h-full'>        
        <BackgroundShader />
      </div>

      <div id='foreground' className='fixed top-0 w-full h-full'>
        <KnockoutSVG svgElementProps={svgElements} backgroundColor={"black"} />
      </div>
    </>
  )
}

export default App;

{/* <div className='fixed w-full h-full'>
<Sidebar />
<Header />
<MainContent />
</div>  */}