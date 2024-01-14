import React from 'react'
import styles from './skills.module.css'
import { skillsIcons } from '../../assets/icons/index'

export default function Skills() {
  console.log(skillsIcons[0])
  return (
    <section className={styles.skills}>
      <div className={`${styles.container} container`}>
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
        <div className={styles.tools}>
          {skillsIcons.map((Icon, key) => (
            <div className={styles.tool} key={key}>
              <Icon.icon className={styles.icon} width="36px" height="auto" />
              <p>{Icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
