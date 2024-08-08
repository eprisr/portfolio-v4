import React from 'react';
import Image from 'next/image';
import { TbPencil, TbTrash } from 'react-icons/tb';
import { deleteProject } from '@/app/lib/actions';
import { fetchProjects } from '@/app/lib/data';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import { Button, FormButton, LinkButton } from '../base/Button';
import styles from './table.module.css';

export default async function ProjectsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const projects = await fetchProjects(0, 0, 'All');
  const deleteProjectWithId = await deleteProject;

  return (
    <div className={styles.tableContainer}>
      <div className={styles.mobileTable}>
        {projects?.map((project) => (
          <div key={project.id} className="mb-2 w-full rounded-md bg-white p-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <div className="mb-2 flex items-center">
                  <Image
                    src={`/assets/images/projects/${project.src}`}
                    className="mr-2 rounded-full"
                    width={28}
                    height={28}
                    alt={`${project.title}`}
                  />
                  <p>{project.title}</p>
                </div>
                <p className="text-sm text-gray-500">{project.type}</p>
              </div>
              {/* <ProjectStatus status={project.status} /> */}
            </div>
            <div className="flex w-full items-center justify-between pt-4">
              <div>
                <p className="text-xl font-medium">{project.titlelink}</p>
                <p>{formatDateToLocal(project.date)}</p>
              </div>
              <div className="flex justify-end gap-2">
                <Button colorScheme="madder" variant="outline">
                  <LinkButton href={`/dashboard/projects/${project.id}/edit`}>
                    <TbPencil />
                  </LinkButton>
                </Button>
                <form>
                  <Button colorScheme="madder" variant="solid">
                    <FormButton type="submit">
                      Delete <TbTrash />
                    </FormButton>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Project
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Link
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {projects?.map((project) => (
            <tr
              key={project.id}
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className={styles.projTitle}>
                <div className="flex items-center gap-3">
                  <Image
                    src={`/assets/images/projects/${project.src}`}
                    className="rounded-full"
                    width={300}
                    height={200}
                    alt={`${project.title}`}
                  />
                  <p>{project.title}</p>
                </div>
              </td>
              <td className={styles.projLink}>
                {project.titlelink.map((link) => (
                  <p>{link}</p>
                ))}
              </td>
              <td className={styles.projEdit}>
                <div className="flex justify-end gap-3">
                  <Button colorScheme="madder" variant="outline">
                    <LinkButton href={`/dashboard/projects/${project.id}/edit`}>
                      <TbPencil />
                    </LinkButton>
                  </Button>
                  <form action={deleteProject.bind(null, project.id)}>
                    {/* <input type="hidden" name="json" value={JSON.stringify({projectId: project.id})} /> */}
                    <Button colorScheme="madder" variant="solid">
                      <FormButton type="button">
                        Delete <TbTrash />
                      </FormButton>
                    </Button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
