import { sql } from '@vercel/postgres'
import { Project } from './definitions'

export async function fetchProjects() {
  try {
    const projects = await sql<Project>`SELECT * FROM projects LIMIT 3`
    return projects.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch projects data.')
  }
}

export async function fetchSingleProject(projectId: string) {
  try {
    const data =
      await sql<Project>`SELECT * FROM projects WHERE id=${projectId}`
    return data.rows[0] as Project
  } catch (error) {
    console.error('Failed to fetch project:', error)
    throw new Error('Failed to fetch projects data.')
  }
}
