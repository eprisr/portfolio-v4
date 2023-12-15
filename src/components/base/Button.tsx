import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
	name: string;
	colorScheme: string;
	variant: 'solid' | 'outline';
	as?: string;
	href?: string;
	children: string | JSX.Element | React.ReactNode;
}

function Button({ name, colorScheme, variant, children, ...props }: ButtonProps) {
	console.log(name, colorScheme, variant)
	return (
		<button
			name={name}
			type='button'
			id={styles.button}
			className={` ${styles[colorScheme]} ${styles[variant]} `}>
			{children}
		</button>
	)
}

export default Button