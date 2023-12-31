import React from 'react'
import type { Metadata, Viewport } from 'next'
import NavBar from './components/NavBar'
import CollabCTA from './components/CollabCTA'
import Footer from './components/Footer'
import { getCurrentTheme } from './theme/utils'
import './app.css'
import './theme/theme.css'

export const metadata: Metadata = {
  title: 'Epris Richardson',
  description: 'Frontend Software Engineer',
  openGraph: {
    title: 'Epris Richardson',
    description: 'Frontend Software Engineer',
    url: 'https://eprisr.github.io/',
    siteName: 'Epris Richardson',
    images: [
      {
        url: 'https://eprisr.github.io/portfolio-social.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epris Richardson',
    description: 'Frontend Software Engineer',
    images: ['https://eprisr.github.io/portfolio-social.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentTheme = getCurrentTheme()
  return (
    <html lang="en">
      <body>
        <NavBar currentTheme={currentTheme} />
        <main>
          {children}
          <CollabCTA />
        </main>
        <Footer />
      </body>
    </html>
  )
}
