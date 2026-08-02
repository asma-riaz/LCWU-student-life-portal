# LCWU Student Life, backend

A small PHP API with no framework, just plain PHP and PDO, built to
sit behind the React frontend in ../frontend. Every endpoint returns
JSON and matches the shape the frontend already falls back to when
the API is not reachable, so the site looks the same either way.

## Requirements

- PHP 8.1 or newer, with the pdo_mysql extension
- MySQL 8 or MariaDB 10.6 or newer

## Setup

1. Create a database user instead of using root, for example:

   ```sql
   CREATE USER 'studentlife'@'%' IDENTIFIED WITH mysql_native_password BY 'a_real_password';
   GRANT ALL PRIVILEGES ON lcwu_student_life.* TO 'studentlife'@'%';
   FLUSH PRIVILEGES;
   ```

2. Import the schema, which also creates the database and seeds every
   table with the same demo content used in the frontend:

   ```bash
   mysql -u studentlife -p < database/schema.sql
   ```

3. Copy .env.example to .env and fill in your credentials, or export
   the same variable names as real environment variables:

   ```bash
   cp .env.example .env
   ```

4. Run the built in PHP server for local development:

   ```bash
   php -S 127.0.0.1:8000
   ```

   The frontend Vite dev server proxies /api to
   http://localhost:8000 by default, see frontend/vite.config.js.

## Troubleshooting

If any endpoint returns an error like "Could not load X", open
/api/health.php directly in your browser first. It checks the PHP
extension, the MySQL connection, and every table in order, and tells
you in plain language exactly which step is failing and how to fix
it, instead of guessing from a generic error message.

A .env file is already included in this folder with the typical
XAMPP default, root with no password. If your MySQL uses a different
user or password, edit that file directly.

## Endpoints

| Method | Path                | Purpose                                    |
| ------ | ------------------- | ------------------------------------------- |
| GET    | /api/health.php       | Plain language setup self check, open it directly in a browser |
| GET    | /api/events.php      | Upcoming events, soonest first              |
| GET    | /api/subjects.php     | Notes Bank subjects, supports q, dept, sem  |
| GET    | /api/fyp.php          | Final Year Project vault, newest first      |
| GET    | /api/gallery.php      | Gallery images, supports cat                |
| GET    | /api/food.php         | Campus food guide, highest rated first      |
| GET    | /api/testimonials.php | Approved student testimonials               |
| POST   | /api/contact.php      | Validates and stores a contact form message |

All GET endpoints accept an optional query string and otherwise
return the full list. POST /api/contact.php expects a JSON body with
name, email, subject, and message, and returns a 422 with a fields
object describing any validation errors.

## Notes on this build

- Wellbeing tips, campus directory entries, and FAQ answers are kept
  as static content in the frontend rather than served from here,
  since that copy changes rarely and does not need an admin flow.
  Events, subjects, final year projects, gallery photos, food
  listings, and testimonials are the parts of the site a real
  Student Affairs office would actually update over time, so those
  are backend driven.
- There is no admin panel or authentication in this build. Adding
  one would mean an admin users table, session or token based auth,
  and write endpoints for each resource, all reasonable next steps
  but outside what was asked for here.
- CORS is wide open by default for local development. Set
  CORS_ORIGIN in .env to your real frontend URL before deploying.
