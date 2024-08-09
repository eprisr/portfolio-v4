import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { Project as ProjectType } from '@/app/lib/definitions';
import DescList from './DescList';
import Slider from './Slider';
import Video from './Video';
import styles from './project.module.css';

export default function Project({ project }: { project: ProjectType }) {
  const { src, title, titlelink, client, projdesc } = project;

  function renderMedia() {
    const media = (
      <Image
        src={`/assets/images/projects/${src}`}
        alt={title}
        className={styles.image}
        width="500"
        height="500"
      />
    );

    return media;
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
  );
}
