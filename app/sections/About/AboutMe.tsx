import React from 'react'
import styles from './aboutme.module.css'
import Portrait from '../../assets/images/portrait.png'

type Props = {}

function AboutMe({}: Props) {
  return (
    <section className={styles.about}>
      <div className={` ${styles.container} container `}>
        <div className={`${styles.left_column} column `}>
          <img src={Portrait} alt="" className={styles.portrait} />
        </div>
        <div className={` ${styles.right_column} column`}>
          <h5 className="sub1">About me</h5>
          <h2 className="display3">
            My Story,
            <br />
            Unplugged.
          </h2>
          <p>
            I'm a software developer based in Charlotte, NC. As an individual
            with a passion for both software development and graphic design, I
            thrive in the intersection of technology and art, creating seamless
            digital experiences that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
