import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'
import { Project } from './definitions'

export async function fetchProjects(limit: number, offset: number) {
	const ITEMS_PER_LOAD = limit || 3
  noStore()
  try {
    const projects =
      await sql<Project>`SELECT * FROM projects LIMIT ${ITEMS_PER_LOAD} OFFSET ${offset}`
    return projects.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch projects data.')
  }
}

export async function fetchProjectsTotal() {
  noStore()
  try {
    const count = await sql`SELECT COUNT(*) FROM projects`
    const totalProjects = Math.ceil(Number(count.rows[0].count))
    return totalProjects
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch total number of projects.')
  }
}

export async function fetchSingleProject(projectId: string) {
  noStore()
  try {
    const data =
      await sql<Project>`SELECT * FROM projects WHERE id=${projectId}`
    return data.rows[0] as Project
  } catch (error) {
    console.error('Failed to fetch project:', error)
    throw new Error('Failed to fetch projects data.')
  }
}
