'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as Sentry from '@sentry/nextjs';
import { sql } from '@vercel/postgres';
import { ProjectSchemaType } from '../ui/components/dash-projects/EditForm';

export async function createProject(formData: FormData) {
  const rawformData = Object.fromEntries(formData.entries());

  const date = new Date().toISOString().split('T')[0];

  console.log(rawformData);

  // try {
  //   await sql`
  //     INSERT INTO projects (id, type, src, slides, video, title, titleLink, githubRepo, clickable, date, client, brief, projDesc, skills)
  //     VALUES (${project.id}, ${project.type}, ${project.src}, ${project.slides}, ${project.video}, ${project.title}, ${project.titleLink}, ${project.githubRepo}, ${project.clickable}, ${project.date}, ${project.client}, ${project.brief}, ${project.projDesc}, ${project.skills})
  //   `;
  // } catch (error) {
  //   Sentry.captureException(error);
  //   Sentry.captureMessage('Databse Error: Failed to Create Project');
  //   throw new Error(`Databse Error: Failed to Create Project ${error}`);
  // }

  // revalidatePath('/dashboard/projects');
  // redirect('/dashboard/projects');
}

// TODO: Fix TitleLink Type Expectation and Try to Filter out Fields that Weren't Updated.
export async function updateProject(id: string, formData: ProjectSchemaType) {
  const {
    type,
    src,
    slides,
    video,
    title,
    titlelink,
    githubrepo,
    clickable,
    date,
    client,
    brief,
    projdesc,
    skills,
  } = formData;

  try {
    await sql`
      UPDATE projects
      SET titleLink = ${titlelink}
      WHERE id = ${id}
    `;
  } catch (error) {
    Sentry.captureException(error);
    Sentry.captureMessage('Database Error: Failed to Update Project');
    throw new Error(`Database Error: Failed to Update Project ${error}`);
  }

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/dashboard/projects');
  } catch (error) {
    Sentry.captureException(error);
    Sentry.captureMessage('Database Error: Failed to Delete Project');
    throw new Error(`Database Error: Failed to Delete Project ${error}`);
  }
}

const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    Sentry.captureException(error);
    Sentry.captureMessage('Databse Error: Failed to Create Invoice');
    throw new Error(`Databse Error: Failed to Create Invoice ${error}`);
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    Sentry.captureException(error);
    Sentry.captureMessage('Database Error: Failed to Update Invoice');
    throw new Error(`Database Error: Failed to Update Invoice ${error}`);
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  } catch (error) {
    Sentry.captureException(error);
    Sentry.captureMessage('Database Error: Failed to Delete Invoice');
    throw new Error(`Database Error: Failed to Delete Invoice ${error}`);
  }
}
