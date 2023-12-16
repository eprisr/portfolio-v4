import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import CollabCTA from './components/CollabCTA'

import { getCurrentTheme } from './theme/utils'
import './app.css'
import './theme/theme.css'

function App() {
  const currentTheme = getCurrentTheme()
  return (
    <div>
      <NavBar currentTheme={currentTheme} />
      <main>
        <Home />
				<CollabCTA />
      </main>
    </div>
  )
}

export default App
