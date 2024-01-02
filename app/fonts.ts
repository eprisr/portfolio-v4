import {
  DM_Serif_Display,
  DM_Serif_Text,
  Red_Hat_Display,
  Red_Hat_Text,
} from 'next/font/google'

export const dm_serif_display = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--dm-serif-display',
  display: 'swap',
})

export const dm_serif_text = DM_Serif_Text({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--dm-serif-text',
  display: 'swap',
})

export const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--red-hat-display',
  display: 'swap',
})

export const red_hat_text = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--red-hat-text',
  display: 'swap',
})
