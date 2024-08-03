'use client'

import React, { useRef } from 'react'
import styles from './skills.module.css'
import { skillsIcons } from '../../assets/icons/index'
import Container from '../../components/base/Container'

export default function Skills() {
	const scrollRef = useRef(null)

  return (
    <section ref={scrollRef} className={styles.skills}>
      <Container scrollRef={scrollRef} classes={'about-skills'}>
        <div>
          <h5 className="sub1">Capabilities, Skills,& Tools</h5>
          <h2>Weaving Innovation with Pixels of Precision</h2>
        </div>
        <ul className={styles.skills_list}>
          <li>Object Oriented Programming</li>
          <li>Test Driven Development</li>
          <li>Responsive Design</li>
          <li>Accessibility Standards (WAI)</li>
          <li>UI/UX Design Principles</li>
          <li>Figma to Development</li>
          <li>Project Management</li>
          <li>AWS Code Commit</li>
          <li>SEO</li>
          <li>Git</li>
				</ul>
				{/* TODO: Stagger animation. Possible layout group animation. Have each one open with list of relevant projects? */}
        <div className={styles.tools}>
          {skillsIcons.map((Icon, key) => (
            <div className={styles.tool} key={key}>
              <Icon.icon className={styles.icon} width="100%" height="32px" />
              <p>{Icon.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
