import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import ThemeScript from '@/app/lib/themeUtils';
import '@/app/theme/theme.css';
import '@/app/ui/app.css';
import {
  dm_serif_display,
  dm_serif_text,
  red_hat_display,
  red_hat_text,
} from '@/app/ui/fonts';
import '@/app/ui/normalize.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
  types: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${dm_serif_display.variable} ${dm_serif_text.variable} ${red_hat_display.variable} ${red_hat_text.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-STNG2RXT2F" />
    </html>
  );
}
