import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { hash } from "@node-rs/argon2";
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function createAdmin() {
  const passwordHash = await hash("admin123");

  await prisma.users.upsert({
    where: { email: "zhdupism@ya.ru" },
    update: { password: passwordHash },
    create: {
      email: "zhdupism@ya.ru",
      name: "Admin",
      userStatus: "ACTIVE",
      is_admin: true,
      is_account_admin: true,
      role: "admin",
      password: passwordHash,
    },
  });

  console.log("\n========================================");
  console.log("ПОЛЬЗОВАТЕЛЬ СОЗДАН!");
  console.log("Email: zhdupism@ya.ru");
  console.log("Пароль: admin123");
  console.log("========================================\n");

  await prisma.$disconnect();
  await pool.end();
}
createAdmin();