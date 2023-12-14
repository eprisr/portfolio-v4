import React from 'react'
import Button from '../components/base/Button'
import styles from './home.module.css'

export default function Home() {
  return (
    <main>
			<section className={styles.hero}>
				<div className={` ${styles.container} container `}>
					<div className={` ${styles.leftColumn} column `}>
						<h1 className={styles.intro}><span>Hello,</span> my name is E&acutepris</h1>
						<p className={styles.pronunciation}>(pronounced aye-pree)</p>
						<p>I’m a technical and visual problem solver who fuses innovation and creativity to craft immersive digital experiences.</p>
						<Button name='about' colorScheme='china-rose' variant='solid'>
							About Me
						</Button>
					</div>
					<div className={` ${styles.rightColumn} column `}>
						<div className="sosweet_bg">
							<img src="" alt="" className="sosweet" />
						</div>
					</div>
				</div>
			</section>
    </main>
  )
}
