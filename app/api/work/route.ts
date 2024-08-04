import { NextResponse } from 'next/server';
import { fetchProjects } from '@/app/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 3;
  const offset = searchParams.get('offset')
    ? Number(searchParams.get('offset'))
    : 0;
  const filter = searchParams.get('filter') || 'All';
  const projects = await fetchProjects(limit, offset, filter);
  return NextResponse.json(projects);
}
