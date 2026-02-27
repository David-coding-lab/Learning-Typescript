import { useState, useEffect } from 'react'
import './App.css'
import FetchImg from './services/FetchImg'

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
      <div className='content'>
        <h1>Weather App</h1>
        <p>Current: {weather.type}</p>
      </div>
    </div>
  )
}

export default App
