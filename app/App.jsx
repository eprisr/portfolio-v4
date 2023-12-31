import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import CollabCTA from './components/CollabCTA'

import { getCurrentTheme } from './theme/utils'
import './app.css'
import './theme/theme.css'
import Footer from './components/Footer'
import About from './pages/About'
import Work from './pages/Work'

function App() {
  const currentTheme = getCurrentTheme()
  return (
    <div>
      <NavBar currentTheme={currentTheme} />
      <main>
        {/* <Home /> */}
        {/* <About /> */}
        <Work />
        <CollabCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
