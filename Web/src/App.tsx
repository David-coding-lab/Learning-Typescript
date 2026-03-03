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
import fetchWeather from './services/FetchWeather'
import type { WeatherData } from './types/weather'

function App() {
  const [weather, setWeather] = useState<WeatherData>()
  const [inputValue, setInputValue] = useState('')
  const [currentBg, setCurrentBg] = useState('')
  const [prevBg, setPrevBg] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const newImg = FetchImg(weather?.current.condition.text || 'sunny')
    if (newImg === currentBg) return

    setPrevBg(currentBg)
    setCurrentBg(newImg)
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setIsTransitioning(false)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [weather?.current.condition.text])

  useEffect(() => {
    setLoading(true)
    fetchWeather('abuja')
      .then(data => {
        setWeather(data)
        console.log(data)
        // setLoading(false)
        // the loading state will be set to false after the background image transition is complete in the previous useEffect
      })
      .catch(error => {
        console.error('Error fetching weather data:', error)
        setLoading(false)
    })
  }, [])
  
  function handleSearch() {
    if (inputValue.trim() === '') return

    setLoading(true)
    setError(null)
    fetchWeather(inputValue)
      .then(data => {
        if (!data || !data.current) {
          setError('Location not found. Please try another city.')
          setLoading(false)
          return
        }
        setWeather(data)
        console.log(data)
        // setLoading(false)
        // the loading state will be set to false after the background image transition is complete in the previous useEffect
      })
      .catch(err => {
        console.error('Error fetching weather data:', err)
        setError('Network error or invalid location. Please check your connection.')
        setLoading(false)
    })
  }

  return (
    <div className='container' id='container'>
      {loading && (
        <div className='loading-overlay'>
          <div className='spinner'></div>
        </div>
      )}

      {error && (
        <div className='error-popup'>
          <div className='error-content'>
            <p>{error}</p>
            <button onClick={() => setError(null)}>Close</button>
          </div>
        </div>
      )}

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
          <p className='temperature'>{weather?.current.temp_c || 0}°</p>

          <span className='location-time'>
            <span className='location'>{weather?.location.name || 'London'}</span>
            <span className='time'>{weather?.location.localtime || '06:09 - Monday, 9 Sep ‘23'}</span>
          </span>

          <img className='weatherIcon' src={cloudyWeatherIcon} />
        </div>
      </div>

      <div className='side-bar'>
        <div className='search'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search Location'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <div
            style={{cursor: 'pointer'}}
            onClick={() => handleSearch()}
          >
            <FiSearch
              color='white'
              size={20}
            />
          </div>
        </div>

        <p className='title'>weather details</p>

        <div className='forecast'>
          <p className='weather-headline'>{weather?.location.country}, {weather?.location.name} - {weather?.location.localtime} - {weather?.current.condition.text}</p>

          <span className='weather-wrapper'>
           <p>Temp max</p> 
           <span className='temp-container'>
             <p>{weather?.current.temp_c}°</p> 
             <img src={hotWeatherIcon} width={'20em'} />
           </span>
          </span>

          <span className='weather-wrapper'>
           <p>Temp Min</p> 
           <span className='temp-container'>
              <p>{weather?.current.temp_f}°</p> 
              <img src={coldWeatherIcon} width={'20em'} />
           </span>
          </span>

          <span className='weather-wrapper'>
           <p>Humidity</p> 
           <span className='temp-container'>
              <p>{weather?.current.humidity || 0 }%</p> 
              <img src={rainyWeatherIcon} width={'20em'} />
           </span>
          </span>

          <span className='weather-wrapper'>
           <p>Cloudy</p> 
           <span className='temp-container'>
              <p>{weather?.current.cloud || 0}%</p> 
              <img src={cloudyWeatherIcon} width={'20em'} />
           </span>
          </span>

          <span className='weather-wrapper'>
           <p>Windy</p> 
           <span className='temp-container'>
              <p>{weather?.current.wind_kph || 0}km/h</p> 
              <img src={windyWeatherIcon} width={'20em'} />
           </span>
          </span>
        </div>

        <div className='divider'></div>

        <div className='forecast-container'>
          <p>Todays Weather Forecast...</p>

          <span className='forecast-wrapper'>
            <img
              src={weather?.current.condition.icon ? `https:${weather.current.condition.icon}` : snowyWeatherIcon}
              alt={weather?.current.condition.text || "Weather Icon"}
              width={'35em'}
            />
            <span>
              <p>{weather?.location.localtime.split(' ')[1] || '0:00'}</p>
              <p>{weather?.current.condition.text || 'N/A'}</p>
            </span>

            <p>{weather?.current.temp_c || 0}°</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
