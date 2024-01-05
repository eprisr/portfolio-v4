const { db } = require('@vercel/postgres')
const { projects } = require('../app/lib/placeholder-data.js')

async function seedProjects(client) {
  try {
    //Create the "projects" table if it doesn't exist
    const createTable = await client.sql`
			CREATE TABLE IF NOT EXISTS projects (
				id TEXT NOT NULL UNIQUE,
				type TEXT[] NOT NULL,
				src TEXT NOT NULL,
				title TEXT NOT NULL,
				clickable BOOLEAN NOT NULL,
				date TEXT NOT NULL,
				client TEXT NOT NULL,
				brief TEXT NOT NULL,
				projDesc TEXT NOT NULL,
				skills TEXT[] NOT NULL
			);
		`

    console.log(`Created "projects" table`)

    // Insert data into the "projects" table
    const insertedProjects = await Promise.all(
      projects.map(
        (project) => client.sql`
					INSERT INTO projects (id, type, src, title, clickable, date, client, brief, projDesc, skills)
					VALUES (${project.id}, ${project.type}, ${project.src}, ${project.title}, ${project.clickable}, ${project.date}, ${project.client}, ${project.brief}, ${project.projDesc}, ${project.skills})
					ON CONFLICT (id) DO NOTHING;
				`
      )
    )

    console.log(`Seeded ${insertedProjects.length} projects`)

    return {
      createTable,
      projects: insertedProjects,
    }
  } catch (error) {
    console.error('Error seeding projects:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedProjects(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occured while attempting to seed the database:', err)
})
