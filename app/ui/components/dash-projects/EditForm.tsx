'use client';

import React, { useActionState } from 'react';
import Link from 'next/link';
import {
  TbCheck,
  TbClockHour7,
  TbCurrencyDollar,
  TbUserCircle,
} from 'react-icons/tb';
import { updateProject } from '@/app/lib/actions';
import { Project, ProjectForm } from '@/app/lib/definitions';
import { Button, FormButton } from '@/app/ui/components/base/Button';

export default function EditProjectForm({
  project,
  projects,
}: {
  project: ProjectForm;
  projects: Project[];
}) {
  // const initialState: State = { message: null, errors: {} };
  const updateProjectWithId = updateProject.bind(null, project.id);
  // const [state, formAction] = useActionState(updateProjectWithId, initialState);

  return (
    <form action={updateProjectWithId}>
      <input type="hidden" name="id" value={project.id} />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.id}
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <TbUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        {/* <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="my-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/projects"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button colorScheme={''} variant={'solid'}>
          <FormButton type="submit">Edit Project</FormButton>
        </Button>
      </div>
    </form>
  );
}
