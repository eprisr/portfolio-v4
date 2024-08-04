import React from 'react'
import * as Sentry from '@sentry/nextjs'
import styles from './projects.module.css'
import Project from '@/app/ui/components/projects/Project'

export default async function Projects() {
	const url = process.env.NEXT_PUBLIC_URL

	const projects = await fetch(url + '/api/work')
		.then((res) => res.json())
		.then((data) => data as Project[])
		.catch((error) => {
			console.error('Error Digest:', error.digest)
			Sentry.captureException(error)
			Sentry.captureMessage(
				'An error occured in the Projects Server Components render'
			)
			throw new Error(
				`An error occured in the Projects Server Components render ${error}`
			)
		})

	return (
		<div className={styles.projects_wrapper}>
			<div className={styles.proj_container}>
				{projects.map((project, i) => (
					<Project project={project} i={i} />
				))}
			</div>
		</div>
	)
}
