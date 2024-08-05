const { db } = require('@vercel/postgres');
const { projects, customers, invoices } = require('../app/lib/site-data.js');

async function seedProjects(client) {
  try {
    // const createTable = await client.sql`
    // 	CREATE TABLE IF NOT EXISTS projects (
    // 		id TEXT NOT NULL UNIQUE,
    // 		type TEXT[] NOT NULL,
    // 		src TEXT,
    // 		slides TEXT [],
    // 		video JSON,
    // 		title TEXT NOT NULL,
    // 		titleLink TEXT[] NOT NULL,
    // 		githubRepo TEXT,
    // 		clickable BOOLEAN NOT NULL,
    // 		date TEXT NOT NULL,
    // 		client TEXT NOT NULL,
    // 		brief TEXT NOT NULL,
    // 		projDesc TEXT NOT NULL,
    // 		skills JSON NOT NULL
    // 	);
    // `

    // console.log(`Created "projects" table`)

    // const insertProjects = await Promise.all(
    //   projects.map(
    //     (project) => client.sql`
    // 			INSERT INTO projects (id, type, src, slides, video, title, titleLink, githubRepo, clickable, date, client, brief, projDesc, skills)
    // 			VALUES (${project.id}, ${project.type}, ${project.src}, ${project.slides}, ${project.video}, ${project.title}, ${project.titleLink}, ${project.githubRepo}, ${project.clickable}, ${project.date}, ${project.client}, ${project.brief}, ${project.projDesc}, ${project.skills})
    // 			ON CONFLICT (id) DO NOTHING;
    // 		`
    //   )
    // )

    // console.log(`Seeded ${insertProjects.length} projects`)

    // const updateColumnType = await client.sql`
    // 	ALTER TABLE projects ALTER COLUMN titleLink DROP DEFAULT;
    // 	ALTER TABLE projects ALTER COLUMN titleLink TYPE text[] array[titleLink];
    // 	ALTER TABLE projects ALTER COLUMN titleLink SET DEFAULT '';
    // `

    const updateProjects = await Promise.all(
      projects.map(
        (project) => client.sql`
					UPDATE projects
					SET titleLink = ${project.titleLink}
					WHERE id = ${project.id}
				`,
      ),
    );

    // const deleteTable = await client.sql`DROP TABLE projects`

    return {
      // createTable,
      // projects: insertProjects,
      updateProjects,
      // deleteTable,
    };
  } catch (error) {
    console.error('Error seeding projects:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id UUID NOT NULL,
        amount INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;

    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
          INSERT INTO invoices (customer_id, amount, status, date)
          VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    return insertedInvoices;
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function main() {
  const client = await db.connect();

  // await seedProjects(client);
  // await seedInvoices(client);
  await seedCustomers(client);

  await client.end();
}

main().catch((err) => {
  console.error('An error occured while attempting to seed the database:', err);
});
