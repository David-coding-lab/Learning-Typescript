import { useState } from 'react'
import './App.css'
import FetchImg from './services/FetchImg'

function App() {
  
  return (
    <div
      className='container'
      style={{
        backgroundImage: `url(${FetchImg('rainy')})`
      }}
    >
      
    </div>
  )
}

export default App
