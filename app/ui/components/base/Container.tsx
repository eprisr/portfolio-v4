import React from 'react'
import { motion } from 'framer-motion'
import styles from './container.module.css'

function Container({ scrollRef, classes, children }: { scrollRef?: any, classes: string, children: any }) {


	return (
		<motion.div
				className={`${styles[classes]} container`}
				initial={{ opacity: 0, y: '30%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeIn", duration: .5 }}
				viewport={{ root: scrollRef || null, once: true, amount: 0.2 }}
		>
			{children}
		</motion.div>
	)
}

export default Container