import React, { Dispatch, memo, SetStateAction, useEffect, useState } from 'react'
import { getFromLS, setToLS } from '../../theme/storage'
import { IoRoseOutline } from 'react-icons/io5'
import {PiMoonStars, PiSunDim, PiTree } from 'react-icons/pi'
import styles from './switch.module.css'

function ButtonIcon({ theme }: { theme: string }) {
	if (theme === 'light') {
		return <PiSunDim className={`${styles.switch_light} ${styles.switch_icon}`} />
	}	
	if (theme === 'rose') {
		return <IoRoseOutline className={`${styles.switch_rose} ${styles.switch_icon}`} />
	}	
	if (theme === 'forest') {
		return <PiTree className={`${styles.switch_forest} ${styles.switch_icon}`} />
	}	
	if (theme === 'dark') {
		return <PiMoonStars className={`${styles.switch_dark} ${styles.switch_icon}`} />
	}	
}

function loadTheme(theme: string) {
	const root = document.querySelector(':root');
	root?.setAttribute('color-scheme', `${theme}`);
	setToLS('theme', `${theme}`)
}

const Switch = memo(
	function Switch({ currentTheme }: { currentTheme: string }) {
		const [theme, setTheme] = useState<string>(currentTheme);
	
		function toggleTheme() {
			if (theme === 'dark') setTheme('light');
			if (theme === 'light') setTheme('dark');
		}
	
		useEffect(() => {
			loadTheme(theme);
		}, [theme])
		
	
		return (
			<div className={styles.switch_wrapper}>
				<button type="button" className={styles.theme_button} onClick={() => toggleTheme()}>
					<ButtonIcon theme={theme} />
				</button>
			</div>
		)
	}
)


export default Switch
