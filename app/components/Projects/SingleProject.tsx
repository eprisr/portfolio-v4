import React from 'react'
import { MdOutlineOpenInNew } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import Slider from '../../components/Projects/Slider'
import Video from '../../components/Projects/Video'
import DescList from '../../components/Projects/DescList'
import styles from './project.module.css'

export default function Project({ project }: { project: Project }) {
  const { src, slides, video, title, titlelink, client, projdesc } = project

  function renderMedia() {
    let media
    if (src && slides.length === 0 && Object.keys(video).length === 0) {
      media = (
        <Image
          src={`/assets/images/projects/${src}`}
          alt={title}
          className={styles.image}
          width="500"
          height="500"
        />
      )
    } else if (slides.length !== 0) {
      media = <Slider project={project} />
    } else if (Object.keys(video).length !== 0) {
      media = <Video project={project} />
    }
    return media
  }

  return (
    <section className={styles.project}>
      <div className={`${styles.container} container`}>
        <h5 className="sub1">{client}</h5>
        <h2 className="display3">
          {title}
          {/* {titlelink && (
            <Link
              href={titlelink}
              target="_blank"
              className={styles.open_in_new}>
              <MdOutlineOpenInNew />
            </Link>
          )} */}
        </h2>
        <div className={styles.media}>{renderMedia()}</div>
        <p>{projdesc}</p>
        <DescList project={project} />
      </div>
    </section>
  )
}
