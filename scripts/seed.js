const { db } = require('@vercel/postgres');
const {
    passwordManagers,
    features
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedPasswordManagers(client){
    try {  
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql(`CREATE TABLE IF NOT EXISTS passwordManagers (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            license VARCHAR(255) NOT NULL

        )`)

        const insertPasswordManagers = await Promise.all(
            passwordManagers.map(async (p) => {
              return client.sql`
              INSERT INTO users (id, name, license)
              VALUES (${p.id}, ${p.name}, ${p.license})
              ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );

        return {
            createTable, 
            passwordManagers: insertPasswordManagers
        };
    } catch (e) {
        console.error("Error seeding password managers");
        throw e;
    }
}


async function main() {
  const client = await db.connect();
  await seedPasswordManagers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
