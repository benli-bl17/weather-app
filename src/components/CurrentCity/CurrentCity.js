import Meta from './compoments/Meta'
import Temperature from './compoments/Temperature'
import Date from '../Date'
import Name from '../Name'
import TemperatureRange from '../TemperatureRange'
import WeatherIcon from '../WeatherIcon'
import Image from './compoments/Image'
import bg from '../../assets/background/Cloudy_day_background.png'
import icon from '../../assets/weather_icon/Cloudy_day.png'

function CurrentCity() {
  return (
    <div className="flex flex-col items-center space-y-6 relative">
      <Image imageUrl={bg} alt="cloud" className="absolute top-0 right-0" />
      <Date value="20 July, Sunday 12:00" className="text-white" />
      <Name value="New York" className="text-white text-3xl font-bold" />
      <Temperature value="20" className="text-slate-200 text-8xl font-bold " />
      <TemperatureRange value="18 ~ 23" className="text-white" />
      <WeatherIcon imageUrl={icon} alt="cloud" />
      <Meta />
    </div>
  )
}

export default CurrentCity
