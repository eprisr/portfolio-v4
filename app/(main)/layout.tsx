import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import ThemeScript from '@/app/lib/themeUtils';
import '@/app/theme/theme.css';
import '@/app/ui/app.css';
import CollabCTA from '@/app/ui/components/CollabCTA';
import Footer from '@/app/ui/components/Footer';
import NavBar from '@/app/ui/components/NavBar';
import {
  dm_serif_display,
  dm_serif_text,
  red_hat_display,
  red_hat_text,
} from '@/app/ui/fonts';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
  types: ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>
        {children}
        <CollabCTA />
      </main>
      <Footer />
    </>
  );
}
