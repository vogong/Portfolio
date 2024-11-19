import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import SEO from './components/SEO'

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
`

export default App
