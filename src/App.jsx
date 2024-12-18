
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import BackgroundShader from './components/BackgroundShader'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return(
    <Router>
      <div className='fixed w-full h-full'>        
        <BackgroundShader />
      </div>
      <div className='fixed w-full h-full'>
        <Sidebar />
        <Header />
        <MainContent />
      </div>
    </Router>
  )
}

export default App;
