'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/base/Button'
import styles from './recentprojects.module.css'
import Container from '../../components/base/Container'

function RecentProjects({ projects }: { projects: Project[] }) {
  return (
    <section className={styles.projects}>
      <Container classes="projects">
        <div className={styles.heading}>
          <h5 className="sub1">Turn visions into online reality</h5>
          <h2 className="display3">Latest Projects</h2>
        </div>
        {/* TODO: Stagger animation */}
        <div className={styles.project_list}>
          {projects.map((proj) => (
            <Link key={proj.id} href={proj.titlelink.at(-1)!} target="_blank">
              <div className={styles.project}>
                <div className={styles.proj_desc}>
                  <p className={`${styles.lead_para} lead_para`}>
                    {proj.title}
                  </p>
                  <p className={styles.language}>
                    {proj.skills.Frontend.includes('React')
                      ? 'React.JS'
                      : 'Vanilla JS'}
                  </p>
                </div>
                <span className={styles.faded_image}>
                  <Image
                    src={`/assets/images/projects/${proj.src}`}
                    alt={proj.title}
                    width="1140"
                    height="1140"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Button href="/work" variant="solid" colorScheme="madder">
          View my work
        </Button>
      </Container>
    </section>
  )
}

export default RecentProjects
