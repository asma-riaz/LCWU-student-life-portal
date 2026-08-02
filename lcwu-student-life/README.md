# LCWU Student Life

The centralized student portal for Lahore College for Women
University, rebuilt as a React frontend backed by a PHP and MySQL
API. This is a two part project:

```
lcwu-student-life/
  frontend/   React 19, Vite, Tailwind CSS, Framer Motion,
              Lucide React icons, React Router, React Hook Form
  backend/    Plain PHP with PDO, MySQL
```

## Quick start

Backend first, since the frontend falls back to local demo data if
it cannot reach the API, but looks for it by default:

```bash
cd backend
mysql -u root -p < database/schema.sql
cp .env.example .env   # edit with your own DB credentials
php -S 127.0.0.1:8000
```

Then the frontend, in a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173. The dev
server proxies /api to http://localhost:8000, see
frontend/vite.config.js if your backend runs somewhere else.

Full setup detail, including the database schema and every endpoint,
is in backend/README.md.

## What is where

- Notes and Past Papers Bank, Final Year Project Vault, Student
  Gallery, upcoming events, the campus food guide, and testimonials
  are all served from the PHP API, backed by MySQL, and seeded with
  realistic demo content in database/schema.sql.
- Wellbeing tips, the campus directory, and FAQ answers stay as
  static content in the frontend, since that copy changes rarely and
  does not need its own admin flow.
- Every section still renders with full demo content even if the
  backend is not running, each API call in frontend/src/lib/api.js
  falls back to a local data file with the same shape.

## Design

The visual system, blue and gold on white and near black, Poppins
for headings, Inter for body text, the vertical scroll progress
track, and the floating compass dock, matches the original vanilla
HTML, CSS, and JS build this project was rebuilt from. Tailwind CSS
is installed and configured for any new work, while the existing
design system lives in frontend/src/index.css so the rebuild matches
pixel for pixel rather than drifting during translation.

No emojis are used anywhere in the interface, all icons come from
Lucide React, apart from four small social brand marks (Facebook,
Instagram, X, LinkedIn) that Lucide does not include and are defined
locally in frontend/src/components/ui/BrandIcons.jsx.
