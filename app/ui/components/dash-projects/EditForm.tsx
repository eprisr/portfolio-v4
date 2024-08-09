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
  type: z.array(z.string()).optional(),
  src: z.string().optional(),
  slides: z.array(z.string()).optional(),
  video: z
    .object({
      url: z.string(),
      id: z.string(),
      width: z.string(),
      height: z.string(),
    })
    .optional(),
  title: z.string().optional(),
  titlelink: z.array(z.string()),
  githubrepo: z.string().optional(),
  clickable: z.boolean().optional(),
  date: z.string().optional(),
  client: z.string().optional(),
  brief: z.string().optional(),
  projdesc: z.string().optional(),
  skills: z.record(z.string(), z.array(z.string())).optional(),
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
        {/* NOTE: Fix Sending as 'on' */}
        <fieldset>
          Type
          <label htmlFor="all">All</label>
          <input
            id="all"
            type="checkbox"
            placeholder="All"
            {...register('type', { value: ['All'] })}
          />
          <label htmlFor="webdev">Web Dev</label>
          <input
            id="webdev"
            type="checkbox"
            placeholder="Web Dev"
            {...register('type', { value: ['Web Dev'] })}
          />
          <label htmlFor="print">Print</label>
          <input
            id="print"
            type="checkbox"
            placeholder="Print"
            {...register('type', { value: ['Print'] })}
          />
          <label htmlFor="branding">Branding</label>
          <input
            id="branding"
            type="checkbox"
            placeholder="Branding"
            {...register('type', { value: ['Branding'] })}
          />
        </fieldset>
        {errors.type?.message && <p>{errors.type?.message}</p>}
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
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="datetime"
          placeholder="Date"
          {...register('date')}
        />
        {errors.date?.message && <p>{errors.date?.message}</p>}
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
        <label htmlFor="videourl">Video Url</label>
        <input
          id="videourl"
          type="text"
          placeholder="Video URL"
          {...register('video.url')}
        />
        <label htmlFor="videoid">Video ID</label>
        <input type="text" placeholder="Video ID" {...register('video.id')} />
        <input
          id="videoid"
          type="text"
          placeholder="Video Width"
          {...register('video.width')}
        />
        <label htmlFor="videoheight">Video Height</label>
        <input
          id=""
          type="text"
          placeholder="Video Height"
          {...register('video.height')}
        />
        {errors.video?.message && <p>{errors.video?.message}</p>}
      </div>
      <div>
        <label htmlFor="slides">Slides</label>
        <textarea
          id="slides"
          {...register('slides', {
            setValueAs: (v) => v.split(/\s*,\s*(?:,\s*)*/),
          })}
        />
        {errors.slides?.message && <p>{errors.slides?.message}</p>}
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
