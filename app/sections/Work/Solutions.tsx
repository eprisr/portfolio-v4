import React from 'react'
import styles from './solutions.module.css'

export default function Solutions() {
  return (
    <section id="process" className={styles.solutions}>
      <div className={`${styles.container} container`}>
        <div className={styles.heading}>
          <h5 className="sub1">Experience the process</h5>
          <h1 className="display3">Crafting Code, Shaping Solutions.</h1>
          <p>
            While every project has different requirements, I believe there are
            essential steps in the process that remain the same in web design
            and development. These steps are necessary to ensure a high-quality,
            well-maintained, functional site or application.
          </p>
        </div>
				<div>
					{/* TODO: Layout Group animation on hover? */}
          <ul className={styles.process}>
            <li className={styles.step}>
              <p className="sub1">01. DRIVING VISION INTO ACTION</p>
              <p>
                Essential information is gathered to get the ball rolling. This
                includes: objectives, target audience, brand guidelines,
                potential new features,&nbsp;&c.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">02. SOLVING COMPLEXITY</p>
              <p>
                The market is assessed and a competitor analysis is performed if
                necessary. Establishment of the site's structure and navigation
                is completed.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">03. DESIGNING YOUR DIGITAL STORY</p>
              <p>
                This is the fun part, the UI/UX design. The website is designed
                around your brand and design principles, all based on the
                wireframes or prototypes from step two.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">04. BUILDING YOUR DIGITAL VISION</p>
              <p>
                Software tools are selected. A tech stack is built. An
                user-first, accessible, responsive, mobile-friendly, website is
                built in production. It's helpful to build out tests in this
                step as well.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">05. CREATING YOUR DIGITAL EXPERIENCE</p>
              <p>
                By now, content should have been created. Sometimes, we realize
                content needs to be tweaked, like a button that needs to be more
                actionable or a block of text that is too lengthy.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">06. ELEVATING DETAILED EXCELLENCE</p>
              <p>
                Before deploying, it's a good idea to do site optimization and
                user-testing. Websites are typically optimized during step four
                when keeping things like speed and SEO in mind.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">07. LAUNCHING SOLUTIONS</p>
              <p>
                The website is deployed to the server. How exciting! Now is the
                time to review things in live action. Keep an eye out to make
                sure everything works as intended.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">08. SUSTAINING PROFICIENCY</p>
              <p>
                Ready for take-off in 3, 2... Oops. Something went wrong. Or
                maybe it went right? It's normal for bugs to happen. Maintain
                and update the website, making improvements in all areas.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">09. AMPLIFYING YOUR ONLINE PRESENCE</p>
              <p>
                Announce the launch of the new site if necessary. Reassess SEO
                practices and marketing strategies to measure how effective the
                website&nbsp;is.
              </p>
            </li>
            <li className={styles.step}>
              <p className="sub1">10. EVOLVING QUALITY AND EXPERIENCE</p>
              <p>
                Evaluation of feedback, engagement, and web performance metrics
                paint a picture on how to continuously evolve the
                user-experience and design of a website.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
