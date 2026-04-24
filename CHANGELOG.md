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

## 2026-04-21

### Fixed
- Batch file `start-crm.bat` encoding issues (Russian text now displays correctly)
- Batch file now automatically opens browser at http://localhost:3000 after startup

### Changes
- Frontend branding updated from "NextCRM" to "ЮСС-CRM":
  - Updated `locales/ru.json` title, description, and containerDescription
  - Updated `page.tsx` to use Russian translation instead of hardcoded English
  - Updated `app-sidebar.tsx` header fallback to "ЮСС-CRM"
  - Updated `Footer.tsx` footer text fallback to "ЮСС-CRM"
- Dashboard page now displays Russian description: "Добро пожаловать в ЮСС-CRM, здесь Вы можете увидеть всю важную информацию о вашем бизнесе."

## 2026-04-23

### Changes
- Completed Russian translation for Campaigns module:
  - Campaigns list page (app/[locale]/(routes)/campaigns/page.tsx)
  - CampaignsView component (app/[locale]/(routes)/campaigns/components/CampaignsView.tsx)
  - Campaign detail page components (app/[locale]/(routes)/campaigns/[campaignId]/components/CampaignDetail.tsx)
  - Added Russian translations for all UI elements including table headers, buttons, statuses, and modal dialogs
  - Updated locales/ru.json with CampaignsPage, CampaignsView, and CampaignDetail translation keys

## 2026-04-24

### Changes
- Completed Russian translation for Reports module:
  - Reports overview page (app/[locale]/(routes)/reports/page.tsx)
  - Users report page (app/[locale]/(routes)/reports/users/page.tsx)
  - Sales report page (app/[locale]/(routes)/reports/sales/page.tsx)
  - Leads report page (app/[locale]/(routes)/reports/leads/page.tsx)
  - Activity report page (app/[locale]/(routes)/reports/activity/page.tsx)
  - Accounts report page (app/[locale]/(routes)/reports/accounts/page.tsx)
  - Updated locales/ru.json with ReportsPage section including detailed translations for all report types
  - Fixed reference errors in CampaignsView component by moving translation hook to proper scope

### Changes (continued)
- Fixed Reports sidebar menu translations:
  - Added `ReportsPage.menu` section with sub-items (dashboard, sales, leads, accounts, activity, campaigns, users)
  - Updated layout.tsx to fetch translations from ReportsPage namespace
  - Updated app-sidebar.tsx to pass localized menu items to Reports component
  - Reports.tsx now accepts localizations prop
- Disabled React DevTools overlay in development (next.config.js)
- Added Russian to language selector in profile settings
- Translated Emails module pages
- Translated Databox page
- Translated Admin LLM Keys page
- Fixed multiple translation key issues across modules