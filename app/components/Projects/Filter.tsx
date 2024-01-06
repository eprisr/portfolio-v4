import React from 'react'
import styles from './filter.module.css'

export default function Filter({
  filters,
  activeFilter,
  setActiveFilter,
}: {
  filters: string[]
  activeFilter: string
  setActiveFilter: (arg0: string) => void
}) {
  return (
    <div className={styles.container}>
      <div className={styles.filter_desktop}>
        {filters.map((filter, i) => (
          <span
            key={i}
            className={`${activeFilter === filter ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter)}>
            {filter}
          </span>
        ))}
      </div>
      <div className={styles.filter_mobile}>
        <select
          name="filter"
          id="filter"
          className={styles.filter}
          onChange={(e) => setActiveFilter(e.target.value)}>
          {filters.map((filter, i) => (
            <option key={i}>{filter}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
