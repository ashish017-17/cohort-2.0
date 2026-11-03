import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Card from './components/Card'
import Paragraph from './components/Paragraph'
import Numberdata from './components/Numberdata'
import Line from './components/Line'
import Services from './components/Services'
import Membership from './components/Membership'
import Rythym from './components/Rythym'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Paragraph />
      <Numberdata />
      <Line />
      <Services />
      <Membership />
      <Rythym />
    </div>
  )
}

export default App