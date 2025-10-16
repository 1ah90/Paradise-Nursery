import { useState } from 'react'
import './App.css'
import LandingPage from './Commponents/appPages/LandingPage'
import { ProductPage } from './Commponents/appPages/ProductPage'
function App() {

  const [isOpen , setIsOpen] = useState(false)
  return (
    <div>
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-y-auto ">
    <ProductPage value = {isOpen} setValue={setIsOpen}/>
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg)',
        }}
      ></div>

      {/* filter effect on background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>

      {/* content */}
      <div className="relative z-10 mx-auto mt-10 mb-10 w-11/12 p-6 rounded-xl shadow-xl bg-green-700/50">
        <LandingPage value = {isOpen} setValue = {setIsOpen} />
      </div>
    </div>
    </div>
  )
}

export default App
