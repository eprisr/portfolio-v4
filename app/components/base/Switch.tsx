'use client'

import React, { useEffect, useState } from 'react'
import { IoRoseOutline } from 'react-icons/io5'
import { PiMoonStars, PiSunDim, PiTree } from 'react-icons/pi'
import { getFromLS, setToLS } from '../../theme/storage'
import styles from './switch.module.css'

function ButtonIcon({ theme }: { theme: string }) {
  if (theme === 'light' || theme === '') {
    return (
      <PiSunDim
        aria-hidden={true}
        className={`${styles.switch_light} ${styles.switch_icon}`}
      />
    )
  }
  if (theme === 'rose') {
    return (
      <IoRoseOutline
        aria-hidden={true}
        className={`${styles.switch_rose} ${styles.switch_icon}`}
      />
    )
  }
  if (theme === 'forest') {
    return (
      <PiTree
        aria-hidden={true}
        className={`${styles.switch_forest} ${styles.switch_icon}`}
      />
    )
  }
  if (theme === 'dark') {
    return (
      <PiMoonStars
        aria-hidden={true}
        className={`${styles.switch_dark} ${styles.switch_icon}`}
      />
    )
  }
}

const Switch = () => {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  const [theme, setTheme] = useState(global.window?.__theme || 'light')
  const inactiveTheme = theme === 'light' ? 'dark' : 'light'

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(inactiveTheme)
  }

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  })

  return (
    <button
      type="button"
      aria-label={`Switch to ${inactiveTheme} mode`}
      title={`Switch to ${inactiveTheme} mode`}
      className={`${styles.theme_button} themeBtn`}
      onClick={toggleTheme}>
      <ButtonIcon theme={theme} />
    </button>
  )
}

export default Switch
