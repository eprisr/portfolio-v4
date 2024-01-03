import { NextResponse } from 'next/server'
import { projectDescs } from '../../sections/Work/projectDescs'

export async function GET() {
  return NextResponse.json(projectDescs)
}
