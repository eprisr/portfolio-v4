import React from 'react'
import styles from './switch.module.css'

function Switch() {
  return (
    <div className={styles.switchWrapper}>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  )
}

export default Switch
