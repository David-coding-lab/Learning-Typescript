import { useState, useEffect } from 'react'
import './App.css'
import FetchImg from './services/FetchImg'
import Logo from './assets/logo.png'
import hotWeatherIcon from './assets/weather-hot.png'
import rainyWeatherIcon from './assets/weather-rainy.png'
import cloudyWeatherIcon from './assets/weather-cloudy.png'
import snowyWeatherIcon from './assets/weather-snow.png'
import windyWeatherIcon from './assets/weather-windy.png'
import coldWeatherIcon from './assets/weather-cold.png'

import {FiSearch} from 'react-icons/fi'

function App() {
  const [weather, setWeather] = useState({ type: 'snowy' })
  const [currentBg, setCurrentBg] = useState('')
  const [prevBg, setPrevBg] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const newImg = FetchImg(weather.type)
    if (newImg === currentBg) return

    setPrevBg(currentBg)
    setCurrentBg(newImg)
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [weather.type])

  return (
    <div className='container' id='container'>
      <div className='blurred-background-layer'>
        {prevBg && (
          <div
            className='background-layer'
            style={{
              backgroundImage: 'url(' + prevBg + ')',
              opacity: isTransitioning ? 1 : 0
            }}
          />
        )}
        <div
          className='background-layer'
          style={{
            backgroundImage: 'url(' + currentBg + ')',
            opacity: isTransitioning ? 0 : 1
          }}
        />
      </div>
      
      <div className='content'>
        <img
          src={Logo} 
          alt='logo'
          width={'150em'}
        />
       
        <div className='weather-Details'>
          <p className='temperature'>16°</p>

          <span className='location-time'>
            <span className='location'>London</span>
            <span className='time'>06:09 - Monday, 9 Sep ‘23</span>
          </span>

          <img className='weatherIcon' src={cloudyWeatherIcon} />
        </div>
      </div>

      <div className='side-bar'>
        <div>
          <input
          type='text'
          placeholder='Search location...'
          className='search-bar'
        />
        <FiSearch size={20} />
        </div>

        <p>weather details</p>

        <div>
          <p>Thunder Storm With Light Drizzle</p>

          <span>
           <text>Temp max</text> 
           <img src={hotWeatherIcon} width={'20em'} />
          </span>

          <span>
           <text>Temp Min</text> 
           <img src={coldWeatherIcon} width={'20em'} />
          </span>

          <span>
           <text>Humidity</text> 
           <img src={rainyWeatherIcon} width={'20em'} />
          </span>

          <span>
           <text>Cloudy</text> 
           <img src={cloudyWeatherIcon} width={'20em'} />
          </span>

          <span>
           <text>Windy</text> 
           <img src={windyWeatherIcon} width={'20em'} />
          </span>
        </div>

        <div></div>

        <div>
          <p>Todays Weather Forecast...</p>

          <span>
            <img src={snowyWeatherIcon} alt="Snowy Weather" width={'20em'} />
            <span>
              <p>9:00</p>
              <p>Snow</p>
            </span>

            <p>19°</p>
          </span>
          <span>
            <img src={snowyWeatherIcon} alt="Snowy Weather" width={'20em'} />
            <span>
              <p>9:00</p>
              <p>Snow</p>
            </span>

            <p>19°</p>
          </span>
          <span>
            <img src={snowyWeatherIcon} alt="Snowy Weather" width={'20em'} />
            <span>
              <p>9:00</p>
              <p>Snow</p>
            </span>

            <p>19°</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
