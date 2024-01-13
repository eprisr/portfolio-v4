'use client'

import React, { useState } from 'react'
import Filter from '../../components/Projects/Filter'
import styles from './projectswrapper.module.css'

export default function ProjectsWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']
  const [activeFilter, setActiveFilter] = useState<string>('All')

  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <Filter
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {children}
        {/* <Button
          href={createPageUrl(currentOffset + 3)}
          colorScheme="china-rose"
          variant="solid"
					scroll={false}
				>
          Load more
        </Button> */}
      </div>
    </section>
  )
}
