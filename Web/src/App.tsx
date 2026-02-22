import { useState } from 'react'
import './App.css'
import FetchImg from './services/FetchImg'

function App() {
  return (
    <div
      className='container'
      style={{
        backgroundImage: `url(${FetchImg('windy')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      
    </div>
  )
}

export default App
