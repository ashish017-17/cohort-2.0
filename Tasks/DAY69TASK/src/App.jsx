import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Card from './components/Card'
import Paragraph from './components/Paragraph'
import Numberdata from './components/Numberdata'
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
    </div>
  )
}

export default App