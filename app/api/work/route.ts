import { NextResponse } from 'next/server'
import { fetchProjects } from '../../lib/data'

export async function GET() {
  const projects = await fetchProjects()
  return NextResponse.json(projects)
}
