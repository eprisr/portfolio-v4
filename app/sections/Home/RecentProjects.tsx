import React from 'react'
import Button from '../../components/base/Button'
import styles from './recentprojects.module.css'
import Image from 'next/image'

type Props = {}

function RecentProjects({}: Props) {
  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <div className={styles.heading}>
          <h5 className="sub1">Turn visions into online reality</h5>
          <h2 className="display3">Latest Projects</h2>
        </div>
        <div className={styles.project_list}>
          <div className={styles.project}>
            <Image
              src="/assets/images/smoothie_map_3x.png"
              alt=""
              width="1140"
              height="1140"
            />
            <div className={styles.proj_desc}>
              <p className={`${styles.lead_para} lead_para`}>
                Smoothie Locator
              </p>
              <p className={styles.language}>React.js</p>
            </div>
          </div>
          <div className={styles.project}>
            <Image
              src="/assets/images/memory_game_3x.png"
              alt=""
              width="1140"
              height="1140"
            />
            <div className={styles.proj_desc}>
              <p className={`${styles.lead_para} lead_para`}>Memory Game</p>
              <p className={styles.language}>Vanilla JS</p>
            </div>
          </div>
          <div className={styles.project}>
            <Image
              src="/assets/images/my_reads_3x.png"
              alt=""
              width="1140"
              height="1140"
            />
            <div className={styles.proj_desc}>
              <p className={`${styles.lead_para} lead_para`}>My Reads</p>
              <p className={styles.language}>React.js</p>
            </div>
          </div>
        </div>
        <Button
          name="projects"
          colorScheme="china-rose"
          variant="solid"
          href="/work">
          View my work
        </Button>
      </div>
    </section>
  )
}

export default RecentProjects
