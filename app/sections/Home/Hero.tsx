import React from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline/next'))
import Button from '../../components/base/Button'
import styles from './hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={` ${styles.container} container `}>
        <div className={` ${styles.left_column} column `}>
          <h1 className={styles.intro}>
            <span className={styles.greeting}>Hello,</span> <br />
            my name is &Eacute;pris
          </h1>
          <p className={styles.pronunciation}>(pronounced aye-pree)</p>
          <p className={styles.intro_text}>
            I'm a technical and visual problem solver who fuses innovation and
            creativity to craft immersive digital experiences.
          </p>
          <Button href="/about" variant="solid" colorScheme="accent2">
            About Me
          </Button>
        </div>
        <div className={` ${styles.right_column} column `}>
          <div className={styles.sosweet}>
            <Spline
              scene="https://prod.spline.design/QvnN9UZyqrXUgWZ2/scene.splinecode"
              className={`${styles.sosweet_mockup} ${styles.imgLight}`}
            />
            <Spline
              scene="https://prod.spline.design/cEkXHQu0orVinyJF/scene.splinecode"
              className={`${styles.sosweet_mockup} ${styles.imgDark}`}
            />
            <svg
              width="572"
              height="443"
              className={styles.sosweet_bg}
              viewBox="0 0 572 443"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <ellipse
                cx="69.6033"
                cy="74.6112"
                rx="69.6033"
                ry="74.6112"
                className={styles.sosweet_ellipse}
              />
              <path
                d="M465.367 442.5C400.302 442.5 352.107 365.564 352.107 328.066C352.107 258.242 424.4 203.934 487.657 203.934C561.156 203.934 572 255.656 572 293.154C572 330.652 538.263 442.5 465.367 442.5Z"
                mask="url(#pattern-mask)"
                className={styles.sosweet_pattern}
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="0.0545719"
                  height="0.0503006">
                  <use
                    xlinkHref="#image0_185_645"
                    transform="scale(0.00454766 0.00419172)"
                  />
                </pattern>
                <mask id="pattern-mask" x="0" y="0" width="1" height="1">
                  <rect
                    x="350"
                    y="200"
                    width="220"
                    height="245"
                    fill="url(#pattern0)"
                  />
                </mask>
                <image
                  id="image0_185_645"
                  width="12"
                  height="12"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA4SURBVHgB7cwxEQAwCATBQzm4QgQaEiskOIAuRb75ZueExla4CWiCtfAOz/v68SO4NsEVZ4IrfgCccWkURPNAMQAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
