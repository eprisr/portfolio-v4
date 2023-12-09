import React from 'react'
import NavText from './base/Typography/NavText'
import Switch from './base/Switch'
import Logo from '../assets/logo-2x.png'
import styles from './navbar.module.css'

export default function NavBar() {
	const navItems = ['About', 'Portfolio', 'Contact']

	return (
		<nav>
			<div className={`${styles.container} container`} id="container">
        <a className={styles.logoName}>
          <img className={styles.logoIcon} alt="" src={Logo} />
          <span className={styles.eprisRichardson}>Epris Richardson</span>
        </a>
        <div className={styles.navItems}>
          <ul className={styles.navList}>
						{
							navItems.map(item => (
								<NavText
									key={item}
									navListItems={item}
								/>
							))
						}
          </ul>
          <Switch />
        </div>
      </div>
    </nav>
	)
}