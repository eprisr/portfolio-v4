import { NextResponse } from 'next/server'
import { projectDescs } from '../../../sections/Work/projectDescs'

export async function GET(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const id = params.projectId
  const project = projectDescs.find((project) => project.id === id)
  return NextResponse.json(project)
}
