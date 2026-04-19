import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function getOTP() {
  const user = await prisma.verification.findFirst({
    where: { identifier: "zhdupism@ya.ru" },
    orderBy: { createdAt: "desc" }
  });
  if (user) {
    console.log("\n=== ВАШ КОД ДЛЯ ВХОДА ===");
    console.log("Code:", user.code);
    console.log("======================\n");
  } else {
    console.log("OTP не найден. Попробуй отправить код ещё раз на странице входа.");
  }
  await prisma.$disconnect();
  await pool.end();
}
getOTP();