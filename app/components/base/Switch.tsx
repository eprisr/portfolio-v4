'use client'

import React, { useEffect, useState } from 'react'
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi2'
import styles from './switch.module.css'

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
      <div className={styles.light_container}>
        <div className={styles.light_string}></div>
        {theme === 'light' ? (
          <HiLightBulb className={styles.light_bulb} />
        ) : (
          <HiOutlineLightBulb className={styles.light_bulb} />
        )}
      </div>
    </button>
  )
}

export default Switch
