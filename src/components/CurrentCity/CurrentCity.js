import Meta from './compoments/Meta'
import Temperature from './compoments/Temperature'
import Date from '../Date'
import Name from '../Name'
import TemperatureRange from '../TemperatureRange'
import WeatherIcon from '../WeatherIcon'

function CurrentCity() {
  return (
    <div className="">
      <Date />
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
    </div>
  )
}

export default CurrentCity
