-- Migration: Add vector and tsvector support for AI embeddings
-- Run this to enable vector search in the database

-- Enable pgvector (if not already)
CREATE EXTENSION IF NOT EXISTS vector;

-- Add vector columns to existing tables (these changes preserve existing data)
-- Note: Run these manually if needed, as Prisma can't auto-convert to vector type

-- Example: Add vector index for similarity search
-- CREATE INDEX IF NOT EXISTS embeddings_account_idx 
-- ON "crm_Embeddings_Accounts" 
-- USING hnsw (embedding vector_cosine_ops);

-- Example query for similarity search:
-- SELECT a.*, e.embedding <=> e2.embedding as distance
-- FROM "crm_Embeddings_Accounts" e
-- JOIN "crm_Accounts" a ON a.id = e.account_id
-- CROSS JOIN LATERAL (
--     SELECT embedding FROM "crm_Embeddings_Accounts"
--     ORDER BY embedding <=> e.embedding
--     LIMIT 10
-- ) e2;

-- Enable full-text search with tsvector
-- UPDATE "crm_Accounts" SET "searchVector" = to_tsvector('english', name || ' ' COALESCE(description, ''));

-- Or use pg_trgm for approximate search
-- CREATE INDEX IF NOT EXISTS accounts_name_trgm_idx ON "crm_Accounts" USING gin (name gin_trgm_ops);

SELECT 'Vector migration completed!' as status;