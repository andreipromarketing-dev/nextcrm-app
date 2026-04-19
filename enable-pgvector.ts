import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:Vuntai2026omnamashivaya!@localhost:5432/nextcrm";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function enablePgvector() {
  try {
    await prisma.$queryRaw`CREATE EXTENSION IF NOT EXISTS vector`;
    console.log("pgvector extension enabled!");
    
    const result = await prisma.$queryRaw`SELECT extname, extversion FROM pg_extension WHERE extname = 'vector'`;
    console.log("Extension info:", JSON.stringify(result));
  } catch (e) {
    console.log("Error:", e.message);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

enablePgvector();