import React, { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import NavBar from './components/NavBar'
import CollabCTA from './components/CollabCTA'
import Footer from './components/Footer'
import ThemeScript from './lib/utils'
import {
  dm_serif_display,
  dm_serif_text,
  red_hat_display,
  red_hat_text,
} from './fonts'
import './normalize.css'
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

export default function RootLayout({
  children,
}: {
  children: ReactNode
  types: ReactNode
}) {
  return (
    <html
			lang="en"
			suppressHydrationWarning={true}
      className={`${dm_serif_display.variable} ${dm_serif_text.variable} ${red_hat_display.variable} ${red_hat_text.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <NavBar />
        <main>
          {children}
          <CollabCTA />
        </main>
        <Footer />
				<SpeedInsights />
				<Analytics />
      </body>
    </html>
  )
}
