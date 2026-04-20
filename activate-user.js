require('dotenv/config');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const result = await prisma.users.update({
    where: { email: 'zhdupism@ya.ru' },
    data: { userStatus: 'ACTIVE' }
  });
  console.log('User activated:', result.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());