import TemperatureRange from '../../../TemperatureRange'
import Name from '../../../Name'
import Date from '../../../Date'
import WeatherIcon from '../../../WeatherIcon'

const DayOfWeek = () => {
  return (
    <div>
      <Name />
      <Date />
      <WeatherIcon />
      <TemperatureRange />
    </div>
  )
}

export default DayOfWeek
