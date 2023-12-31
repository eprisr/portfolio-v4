import React from 'react'
import NavBar from './components/NavBar'
import CollabCTA from './components/CollabCTA'
import Footer from './components/Footer'
import { getCurrentTheme } from './theme/utils'
import './app.css'
import './theme/theme.css'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentTheme = getCurrentTheme()
  return (
    <div>
      <NavBar currentTheme={currentTheme} />
      <main>
        {children}
        <CollabCTA />
      </main>
      <Footer />
    </div>
  )
}
