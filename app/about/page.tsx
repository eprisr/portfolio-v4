import React from 'react'
import AboutMe from '../ui/sections/About/AboutMe'
import AboutRole from '../ui/sections/About/AboutRole'
import Skills from '../ui/sections/About/Skills'
import Origin from '../ui/sections/About/Origin'

export default function About() {
	return (
		<div className="main_wrapper">
			<AboutMe />
			<AboutRole />
			<Skills />
			<Origin />
		</div>
	)
}
