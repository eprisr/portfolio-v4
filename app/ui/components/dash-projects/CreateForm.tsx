import React from 'react';
import Link from 'next/link';
import {
  TbCheck,
  TbClockHour7,
  TbCurrencyDollar,
  TbUserCircle,
} from 'react-icons/tb';
import { createProject } from '@/app/lib/actions';
import { Project } from '@/app/lib/definitions';
import { Button, FormButton } from '@/app/ui/components/base/Button';

export default function Form({ projects }: { projects: Project[] }) {
  return (
    <form action={createProject}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Project Name */}
        <div className="mb-4">
          <label htmlFor="project" className="mb-2 block text-sm font-medium">
            Choose project
          </label>
          <div className="relative">
            <select
              id="project"
              name="projectId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a project
              </option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <TbUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/projects"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button colorScheme={''} variant={'solid'}>
          <FormButton type="submit">Create Project</FormButton>
        </Button>
      </div>
    </form>
  );
}
