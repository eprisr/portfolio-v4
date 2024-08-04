'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { MdDoubleArrow, MdOpenInNew } from 'react-icons/md';
import { Project as ProjectType }  from '@/app/lib/definitions'
import styles from './project.module.css';

const variants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function Project({ project, i }: { project: ProjectType; i: number }) {
  const motionMargin = i === 0 ? '0px 0px 100% 0px' : '0px';

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true, margin: motionMargin }}
      key={project.id}
      className={`${i % 2 === 0 ? styles.reverse : ''} ${styles.project}`}
    >
      <div className={styles.proj_image}>
        <span className={styles.faded_image}>
          <Image
            src={`/assets/images/projects/${project.src}`}
            alt={project.title}
            priority={true}
            width="660"
            height="660"
          />
        </span>
      </div>
      <div className={styles.info}>
        <div className={`${styles.title}`}>
          <p className="lead_para">{project.title}</p>
          <div>
            {project?.githubrepo && (
              <div>
                <p>Github Repo</p>
                <Link
                  href={`${project.githubrepo}`}
                  className={styles.proj_link}
                  target="_blank"
                >
                  <MdOpenInNew />
                </Link>
              </div>
            )}
          </div>
        </div>
        <p className={styles.brief}>{project.brief}</p>
        <div className={styles.tech_stack}>
          {Object.keys(project.skills).map((skill: string, index: number) =>
            project.skills[skill].map((s: string, i: number) => (
              <div key={`${skill}-${index}${i}`} className={styles.skill}>
                <span>{s}</span>
              </div>
            )),
          )}
        </div>
        <div className={`${styles.open_proj}`} key={i}>
          {project.titlelink.map((link, i) =>
            project.titlelink.length === 1 ? (
              <Link href={`${link}`} className={`${styles.proj_link}`}>
                Visit Project Website
                <MdDoubleArrow />
              </Link>
            ) : (
              project.titlelink.length > 1 && (
                <>
                  {i === 0 && <p>Visit Project Website</p>}
                  <Link
                    href={link}
                    className={`${styles.proj_link} ${styles.multi_link}`}
                  >
                    V{i + 1}
                    <MdDoubleArrow />
                  </Link>
                </>
              )
            ),
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
