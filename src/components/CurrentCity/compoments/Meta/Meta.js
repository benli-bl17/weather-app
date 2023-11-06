import MetaItem from './components/MetaItem'
import wind from '../../../../assets/meta_icon/wind.svg'
import humidity from '../../../../assets/meta_icon/humidity.svg'
import somatosensory from '../../../../assets/meta_icon/somatosensory.svg'
import airQuality from '../../../../assets/meta_icon/PM2.5.svg'

const Meta = () => {
  return (
    <div className="flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4 ">
      <MetaItem imageUrl={wind} value="9km/h" alt="wind icon" />
      <MetaItem imageUrl={humidity} value="85%" alt="humidity icon" />
      <MetaItem imageUrl={airQuality} value="75μg" alt="PM2.5 icon" />
      <MetaItem imageUrl={somatosensory} value="26°" alt="somatosensory icon" />
    </div>
  )
}

export default Meta
