'use client';

import React from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TbCodeAsterix } from 'react-icons/tb';
import { ZodType, z } from 'zod';
import { updateProject } from '@/app/lib/actions';
import { ProjectForm } from '@/app/lib/definitions';
import { Button, FormButton } from '@/app/ui/components/base/Button';
import { zodResolver } from '@hookform/resolvers/zod';

const ProjectFormSchema = z.object({
  id: z.string(),
  src: z.string(),
  title: z.string(),
  titlelink: z.array(z.string()),
  githubrepo: z.string(),
  clickable: z.boolean(),
  client: z.string(),
  brief: z.string(),
  projdesc: z.string(),
  skills: z.record(z.string(), z.array(z.string())),
});

export type ProjectSchemaType = z.infer<typeof ProjectFormSchema>;

export default function EditProjectForm({ project }: { project: ProjectForm }) {
  const updateProjectWithId = updateProject.bind(null, project.id);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ProjectSchemaType>({
    resolver: zodResolver(ProjectFormSchema),
  });

  const onSubmit: SubmitHandler<ProjectSchemaType> = async (
    data: ProjectSchemaType,
  ) => {
    const res = await updateProjectWithId(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="projId" type="hidden" value={project.id} {...register('id')} />
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          {...register('title')}
        />
        {errors.title?.message && <p>{errors.title?.message}</p>}
      </div>
      <div>
        <label htmlFor="titlelink">Link</label>
        <input
          id="titlelink"
          type="url"
          placeholder="Link"
          {...register('titlelink', {
            setValueAs: (v) => v.split(/\s*,\s*(?:,\s*)*/),
          })}
        />
        {errors.titlelink?.message && <p>{errors.titlelink?.message}</p>}
      </div>
      <div>
        <label htmlFor="imagesrc">Image Source</label>
        <input
          id="imagesrc"
          type="text"
          placeholder="Image Source"
          {...register('src')}
        />
        {errors.src?.message && <p>{errors.src?.message}</p>}
      </div>
      <div>
        <label htmlFor="github">Github Repo</label>
        <input
          id="github"
          type="url"
          placeholder="Github Repo"
          {...register('githubrepo')}
        />
        {errors.githubrepo?.message && <p>{errors.githubrepo?.message}</p>}
      </div>
      <div>
        <label htmlFor="client">Client</label>
        <input
          id="client"
          type="text"
          placeholder="Client"
          {...register('client')}
        />
        {errors.client?.message && <p>{errors.client?.message}</p>}
      </div>
      <div>
        <label htmlFor="briefdesc">Brief Description</label>
        <textarea id="briefdesc" {...register('brief')} />
        {errors.brief?.message && <p>{errors.brief?.message}</p>}
      </div>
      <div>
        <label htmlFor="projedesc">Full Description</label>
        <textarea id="projdesc" {...register('projdesc')} />
        {errors.projdesc?.message && <p>{errors.projdesc?.message}</p>}
      </div>
      <div>
        <label htmlFor="frontend">Frontend</label>
        <input
          id="frontend"
          type="text"
          placeholder="Frontend"
          {...register('skills.Frontend', {
            setValueAs: (v) => v.split(/\s*,\s*(?:,\s*)*/),
          })}
        />
        {errors.skills?.frontend?.message && (
          <p>{errors.skills?.frontend?.message}</p>
        )}
        <label htmlFor="backend">Backend</label>
        <input
          id="backend"
          type="text"
          placeholder="Backend"
          {...register('skills.Backend', {
            setValueAs: (v) => v.split(/\s*,\s*(?:,\s*)*/),
          })}
        />
        {errors.skills?.backend?.message && (
          <p>{errors.skills?.backend?.message}</p>
        )}
        <label htmlFor="software">Software</label>
        <input
          id="software"
          type="text"
          placeholder="Software"
          {...register('skills.Software', {
            setValueAs: (v) => v.split(/\s*,\s*(?:,\s*)*/),
          })}
        />
        {errors.skills?.software?.message && (
          <p>{errors.skills?.software?.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="clickable">Clickable</label>
        <input
          id="clickable"
          type="checkbox"
          placeholder="Clickable"
          {...register('clickable')}
        />
        {errors.clickable?.message && <p>{errors.clickable?.message}</p>}
      </div>

      <div className="">
        <Link href="/dashboard/projects" className="">
          Cancel
        </Link>
        <Button colorScheme={''} variant={'solid'}>
          <FormButton type="submit">
            {isSubmitting ? 'Editing ...' : 'Edit Project'}
          </FormButton>
        </Button>
      </div>
    </form>
  );
}
