import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchProjects(
  limit: number,
  offset: number,
  filter: string
) {
  const count = limit || null
  try {
    const projects = await sql<Project>`SELECT * FROM projects LIMIT ${count}`
    return projects.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch projects data.')
  }
}

export async function fetchProjectsTotal(filter: string) {
  noStore()
  try {
    const count =
      await sql`SELECT COUNT(type) FROM projects WHERE type @> array[${filter}]`
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
