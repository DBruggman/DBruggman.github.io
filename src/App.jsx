
import './App.css'
import LightHouseCanvas from './components/LightHouseCanvas'

function App() {
  
  return (
    <div className="relative w-full h-full">
      <LightHouseCanvas />
      <div className="absolute top-0 left-0 w-full h-1/2 flex flex-col justify-center items-center"> 
        <h1 className="text-4xl">hold please, improvements are on the way!</h1>
        <h1 className="text-4xl">footer</h1>
      </div>
    </div>
  )
}

export default App;
