import DayOfWeek from './components/DayOfWeek'
function Forecast() {
  return (
    <div className="flex text-center">
      <div className="basis-1/4">
        <DayOfWeek />
      </div>
      <div className="basis-1/4">
        <DayOfWeek />
      </div>
      <div className="basis-1/4">
        <DayOfWeek />
      </div>
      <div className="basis-1/4">
        <DayOfWeek />
      </div>
    </div>
  )
}

export default Forecast
