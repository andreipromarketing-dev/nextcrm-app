# NextCRM System ChangeLog

## 2026-04-20

### Added
- Russian language support (`ru`) to the application
- Graphify knowledge graph for faster context queries
- Knowledge Graph section in AGENTS.md

### Changes
- Fixed Prisma schema for vector support (changed `vector(1536)` to `String` initially)
- Created Russian locale file (`locales/ru.json`) based on Ukrainian
- Added `ru` to locales in `i18n/routing.ts`
- Added Russian option to `SetLanguage.tsx` component
- Added "russian" translation key to all locale files (en, uk, de, cz)
- Added `ru` to Language enum in Prisma schema
- Fixed missing translation keys in ru.json:
  - `CommandComponent.noResult` → `noResults`
  - Added `contracts` to DashboardPage

### Infrastructure
- Installed PostgreSQL 18 locally (without Docker)
- Created database "nextcrm"
- Installed pgvector extension for vector embeddings
- Created SQL migration for vector support

### Notes
- pgAdmin4 not required for CRM operation
- Graphify enabled: query with `python -m graphify query "question" --graph "graphify-out/graph.json"`

## 2026-04-20 (later)

### Added
- MemPalace MCP Server to OpenCode configuration for persistent memory
- Complete Russian Frontend Localization (over 130+ hardcoded strings translated to Russian, date formats fixed, system toasts translated).
- Default Currency is set to RUB, and Stages for Opportunities are natively Russian in the Prisma database.
- Next.js DEV tools disabled (devIndicators: false).