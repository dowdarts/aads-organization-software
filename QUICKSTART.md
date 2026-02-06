# Quick Start Guide - AADS Organization Software

## Prerequisites Checklist
- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm 9+ installed (`npm --version`)
- [ ] PostgreSQL 14+ installed and running
- [ ] Git installed

## Initial Setup (One-time)

### 1. Database Setup

First, create the PostgreSQL database:

```bash
# Connect to PostgreSQL (adjust credentials as needed)
psql -U postgres

# Create database
CREATE DATABASE aads_db;

# Exit psql
\q
```

### 2. Install Dependencies

All dependencies are already installed, but if you need to reinstall:

```bash
npm run install:all
```

### 3. Configure Environment Variables

Backend environment file is already configured at `backend/.env`.
Frontend environment file is already configured at `frontend/.env`.

**Important**: Update the `DATABASE_URL` in `backend/.env` with your PostgreSQL credentials:
```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/aads_db?schema=public"
```

### 4. Run Database Migrations

```bash
cd backend
npm run prisma:migrate
```

When prompted, enter a migration name like: "init"

### 5. Generate Prisma Client (Already Done)

The Prisma client has been generated. If needed again:
```bash
cd backend
npm run prisma:generate
```

## Running the Application

### Option 1: Run Both Servers (Recommended)

From the root directory:
```bash
npm run dev
```

This starts:
- Backend API: http://localhost:3001
- Frontend: http://localhost:5173

### Option 2: Run Separately

**Backend only:**
```bash
npm run dev:backend
```

**Frontend only:**
```bash
npm run dev:frontend
```

### Option 3: Use VS Code Tasks

Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac), type "Tasks: Run Task", and select:
- "Start Development Servers" - Run both
- "Start Backend Only" - Backend only
- "Start Frontend Only" - Frontend only

## First-Time User Setup

1. Open your browser to http://localhost:5173
2. Click "Register here" to create an account
3. Fill in your details (first user will be a VIEWER by default)
4. Login with your credentials

**Note**: For the first admin user, you'll need to manually update the database:

```bash
cd backend
npm run prisma:studio
```

Then in Prisma Studio:
1. Open the "User" model
2. Find your user
3. Change the `role` field to `ADMIN`
4. Save changes

## Exploring the Application

After logging in, you can:

1. **Dashboard** - Overview of your organization
2. **Events** - Create and manage darts events
3. **Players** - Add and scout players
4. **Sponsors** - Manage current and potential sponsors
5. **Forms** - Create custom forms (questionnaires, registrations)
6. **Contacts** - Manage all contacts

## Database Management

### View Database in Prisma Studio
```bash
cd backend
npm run prisma:studio
```
Opens at http://localhost:5555

### Create New Migration
```bash
cd backend
npm run prisma:migrate
```

### Reset Database (⚠️ Deletes all data)
```bash
cd backend
npx prisma migrate reset
```

## Building for Production

```bash
npm run build
```

Then start the production server:
```bash
npm start
```

## Common Issues

### Port Already in Use

If port 3001 or 5173 is in use:

**Backend**: Change `PORT` in `backend/.env`
**Frontend**: Change port in `frontend/vite.config.ts`

### Database Connection Error

1. Verify PostgreSQL is running
2. Check DATABASE_URL in `backend/.env`
3. Ensure the database `aads_db` exists
4. Verify credentials are correct

### Module Not Found Errors

Run from root directory:
```bash
npm run install:all
```

### Prisma Client Not Generated

```bash
cd backend
npm run prisma:generate
```

## Next Steps

- Customize the forms system for your specific needs
- Add more players and create your first event
- Scout potential sponsors
- Create questionnaires for commentary or feedback

## Getting Help

- Check the main README.md for detailed documentation
- Review API endpoints in README.md
- Inspect the Prisma schema at `backend/prisma/schema.prisma`

---

Enjoy using AADS Organization Software! 🎯
