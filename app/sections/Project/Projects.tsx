import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'
import styles from './projects.module.css'
import { GithubIcon } from '../../assets/icons'
import { MdDoubleArrow, MdOpenInNew, MdOpenInNewOff } from 'react-icons/md'

export default async function Projects() {
	const url = process.env.NEXT_PUBLIC_URL

  const projects = await fetch(url + '/api/work')
    .then((res) => res.json())
    .then((data) => data as Project[])
    .catch((error) => {
			console.error('Error Digest:', error.digest)
			Sentry.captureException(error)
			Sentry.captureMessage('An error occured in the Projects Server Components render')
			throw new Error(`An error occured in the Projects Server Components render ${error}`)
		})

  return (
    <div className={styles.projects_wrapper}>
      <div className={styles.proj_container}>
        {projects.map((project, i) => (
					<div
						key={project.id}
						className={`${i % 2 === 0 ? styles.reverse : ''} ${
							styles.project
						}`}>
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
								<p className='lead_para'>{project.title}</p>
								<div>
									<Link href={`/work/${project.id}`} className={styles.proj_link}>
										Details
									</Link>
									<div>
										<p>Github Repo</p>
										<Link href={`/work/${project.id}`} className={styles.proj_link}>
											<MdOpenInNew />
										</Link>
									</div>
								</div>
							</div>
							<p className={styles.desc}>{project.brief}</p>
							<div className={styles.tech_stack}>
								{Object.keys(project.skills).map(
									(skill: string, index: number) =>
										project.skills[skill].map((s: string, i: number) => (
											<div
												key={`${skill}-${index}${i}`}
												className={styles.skill}>
												<span>{s}</span>
											</div>
										))
								)}
							</div>
							<div className={`${styles.open_proj}`}>
								<Link href={`/work/${project.id}`} className={`${styles.proj_link}`}>
									Vist Project Website
									<MdDoubleArrow />
								</Link>
							</div>
						</div>
					</div>
        ))}
      </div>
    </div>
  )
}
