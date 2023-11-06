import React from 'react'
import CurrentCity from '../CurrentCity'
import Forecast from '../Forecast'
import SearchBar from '../SearchBar'
import OtherCities from '../OtherCities'

function WeatherCard() {
  return (
    <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-white font-alimama overflow-hidden p-8 grid grid-cols-6 grid-rows-6 gap-5">
      <div className="col-span-2 row-span-6 bg-blue-300 rounded-2xl">
        <CurrentCity />
      </div>
      <div className="col-span-4 row-span-3 bg-green-300">
        <Forecast />
      </div>
      <div className="col-span-4 row-span-1 bg-yellow-300">
        <SearchBar />
      </div>
      <div className="col-span-4 row-span-2 bg-pink-300">
        <OtherCities />
      </div>
    </div>
  )
}

export default WeatherCard
