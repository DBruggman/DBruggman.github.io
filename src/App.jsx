
// import './App.css'
// import LightHouseCanvas from './components/LightHouseCanvas'
// import { useState } from 'react'
// import AboutMePage from './pages/AboutMePage'
// import ContactMePage from './pages/ContactMePage'
// import LandingPage from './pages/LandingPage'
// import ProjectsPage from './pages/ProjectsPage'

// const App = () =>{
//   const [currentPage, setCurrentPage] = useState(LandingPage)
  
//   return (
//     <>
//       <div className="relative w-full h-full">
//         <LightHouseCanvas />
//       </div>
//       <div className="absolute top-0 w-full">
//         <LandingPage />
//       </div>
//     </>
//     )
// }


import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import BackgroundShader from './components/BackgroundShader'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return(
    <Router>
      <BackgroundShader />
      <Header />
      <Sidebar />
      <MainContent />
    </Router>
  )
}

export default App;
