'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/base/Button'
import styles from './recentprojects.module.css'
import Container from '../../components/base/Container'

function RecentProjects() {
  return (
    <section className={styles.projects}>
      <Container classes='projects'>
        <div className={styles.heading}>
          <h5 className="sub1">Turn visions into online reality</h5>
          <h2 className="display3">Latest Projects</h2>
				</div>
				{/* TODO: Pull first three projects in database */}
				{/* Stagger animation */}
        <div className={styles.project_list}>
          <Link
            href="https://neighborhood-map-neon.vercel.app/"
            target="_blank">
            <div className={styles.project}>
              <div className={styles.proj_desc}>
                <p className={`${styles.lead_para} lead_para`}>
                  Smoothie Locator
                </p>
                <p className={styles.language}>React.js</p>
              </div>
              <span className={styles.faded_image}>
                <Image
                  src="/assets/images/smoothie_map_3x.png"
                  alt=""
                  width="1140"
                  height="1140"
                />
              </span>
            </div>
          </Link>
          <Link
            href="https://eprisr.github.io/Project-Memory_Game/"
            target="_blank">
            <div className={styles.project}>
              <div className={styles.proj_desc}>
                <p className={`${styles.lead_para} lead_para`}>Memory Game</p>
                <p className={styles.language}>Vanilla JS</p>
              </div>
              <span className={styles.faded_image}>
                <Image
                  src="/assets/images/memory_game_3x.png"
                  alt=""
                  width="1140"
                  height="1140"
                />
              </span>
            </div>
          </Link>
          <Link href="https://my-reads-brown.vercel.app/" target="_blank">
            <div className={styles.project}>
              <div className={styles.proj_desc}>
                <p className={`${styles.lead_para} lead_para`}>My Reads</p>
                <p className={styles.language}>React.js</p>
              </div>
              <span className={styles.faded_image}>
                <Image
                  src="/assets/images/my_reads_3x.png"
                  alt=""
                  width="1140"
                  height="1140"
                />
              </span>
            </div>
          </Link>
        </div>
        <Button href="/work" variant="solid" colorScheme="madder">
          View my work
        </Button>
      </Container>
    </section>
  )
}

export default RecentProjects
