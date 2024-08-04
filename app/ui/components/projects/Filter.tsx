'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './filter.module.css'

export default function Filter() {
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']
  // const [activeFilter, setActiveFilter] = useState<string>('All')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentFilter = searchParams.get('filter') || 'All'

  const createPageUrl = (filter: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('filter', filter.toString())
    return `${pathname}?${params.toString()}`
  }

  function updateFilter(filter: string) {
    router.push(createPageUrl(filter), { scroll: false })
  }

  return (
    <div className={styles.container}>
      <div className={styles.filter_desktop}>
        {filters.map((filter, i) => (
          <span
            key={i}
            className={`${currentFilter === filter ? styles.active : ''}`}
            onClick={() => updateFilter(filter)}>
            {filter}
          </span>
        ))}
      </div>
      <div className={styles.filter_mobile}>
        <select
          name="filter"
          id="filter"
          className={styles.filter}
          onChange={(e) => updateFilter(e.target.value)}>
          {filters.map((filter, i) => (
            <option key={i}>{filter}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
