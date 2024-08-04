'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { easeInOut, motion, useAnimate } from 'framer-motion'
import PortraitOne from '@/public/assets/images/portrait.png'
import PortraitTwo from '@/public/assets/images/portrait_2.jpg'
import PortraitBG from '@/public/assets/images/portrait_bg.png'
import styles from './aboutme.module.css'

function AboutMe() {
	return (
		<section className={styles.about}>
			<div className={` ${styles.container} container `}>
				<div className={`${styles.left_column} column `}>
					<div className={styles.portraits}>
						<motion.div
							animate={{ y: [-5, 5, -5] }}
							transition={{
								duration: 5,
								ease: easeInOut,
								repeat: Infinity,
							}}
							className={`${styles.portrait} ${styles.portrait_one} `}>
							<Image src={PortraitOne} alt="" priority />
						</motion.div>
						<motion.div
							animate={{ y: [5, -5, 5] }}
							transition={{
								duration: 5,
								ease: easeInOut,
								repeat: Infinity,
							}}
							className={`${styles.portrait} ${styles.portrait_two}`}>
							<Image src={PortraitTwo} alt="" priority />
						</motion.div>
					</div>
					<Image
						src={PortraitBG}
						alt=""
						className={`${styles.portrait_bg}`}
						priority
					/>
				</div>
				<div className={` ${styles.right_column} column`}>
					<h5 className="sub1">About me</h5>
					<h2 className="display3">
						My Story,
						<br />
						Unplugged.
					</h2>
					<p>
						I'm a software developer based in Charlotte, NC. As an individual
						with a passion for both software development and graphic design, I
						thrive in the intersection of technology and art, creating seamless
						digital experiences that leave a lasting impression.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
