import React from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import BackgroundImage from './components/BackgroundImage'
import bg from './assets/bg.png'

function App() {
  return (
    <BackgroundImage imageUrl={bg} alt="BackgroundImage">
      <div className="w-screen h-screen flex items-center justify-center">
        <WeatherCard />
      </div>
    </BackgroundImage>
  )
}

export default App
