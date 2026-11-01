import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Card />
    </div>
  )
}

export default App