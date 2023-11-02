import City from './components/City'

function OtherCities() {
  return (
    <div className="flex text-center">
      <div className="basis-1/4">
        <City />
      </div>
      <div className="basis-1/4">
        <City />
      </div>
      <div className="basis-1/4">
        <City />
      </div>
      <div className="basis-1/4">
        <City />
      </div>
    </div>
  )
}

export default OtherCities
