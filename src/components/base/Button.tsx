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

function Button({ name, colorScheme, variant, ...props }: ButtonProps) {
	return (
		<button name={name} type='button' className={` ${styles.colorScheme} ${styles.variant}`}>Button</button>
	)
}

export default Button