import React from 'react'
import Button from '../../components/base/Button'
import styles from './hero.module.css'
import SoSweet from '../../assets/images/so_sweet_mockup.png'

type Props = {}

function Hero({}: Props) {
  return (
    <section className={styles.hero}>
      <div className={` ${styles.container} container `}>
        <div className={` ${styles.left_column} column `}>
          <h1 className={styles.intro}>
            <span>Hello,</span> <br />
            my name is &Eacute;pris
          </h1>
          <p className={styles.pronunciation}>(pronounced aye-pree)</p>
          <p>
            I'm a technical and visual problem solver who fuses innovation and
            creativity to craft immersive digital experiences.
          </p>
          <Button name="about" colorScheme="china-rose" variant="solid">
            About Me
          </Button>
        </div>
        <div className={` ${styles.right_column} column `}>
          <div className={styles.sosweet_bg}>
            <img src={SoSweet} alt="" className={styles.sosweet} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
