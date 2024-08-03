'use client'

import React, { useRef } from 'react'
import styles from './origin.module.css'
import Image from 'next/image'
import Container from '../../components/base/Container'

export default function Origin() {
	const scrollRef = useRef(null)

  return (
    <section ref={scrollRef} className={styles.role}>
      <Container scrollRef={scrollRef} classes={'about-origin'}>
        <div className={`${styles.left_column} column`}>
          <h5 className="sub1">How I got started</h5>
          <h2>My Origin Story</h2>
          <p>
            When I was a child, my mom often worked overtime, and my dad worked
            late. To supplement my school learning, my mom bought a few games
            that sat on a CD rom, popped one in a big, bulky, cream colored
            computer running Windows '95, taught me the bare minimum on how to
            run the computer, and left me to figure the rest out myself.
          </p>
          <p>
            From there, I began exploring technology and discovered a natural
            talent for drawing. During the MySpace era, I combined these skills
            by customizing profiles for friends, sparking my journey into
            graphic design and, later, into web development.
          </p>
          <p>
            Since then, I have interned at Palace Sports & Entertainment,
            co-founded a small business catering mobile app services to local
            food establishments, crafted the visual brands of subsidiaries of
            several companies, and engineered websites for a B2B eCommerce
            corporation and a food hospitality startup.
          </p>
        </div>
        <div className={styles.right_column}>
          <Image
            src="/assets/images/sarah-dorweiler-QeVmJxZOv3k-unsplash.png"
            alt=""
            className={styles.desk}
            width="400"
            height="810"
          />
        </div>
      </Container>
    </section>
  )
}
