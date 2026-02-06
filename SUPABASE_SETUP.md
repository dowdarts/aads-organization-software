# Supabase Setup Guide

## Migrating from Local PostgreSQL to Supabase

### Prerequisites
- A Supabase account (sign up at https://supabase.com)
- Your Supabase project created

### Step 1: Get Your Supabase Connection String

1. Go to your Supabase project dashboard
2. Click on **Settings** → **Database**
3. Scroll to **Connection String** section
4. Copy the **Connection pooling** string (recommended for serverless)
   - Format: `postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres`
5. Replace `[PASSWORD]` with your actual database password

### Step 2: Update Environment Variables

Edit `backend/.env`:

```env
# Replace the DATABASE_URL with your Supabase connection string
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

# Add your Supabase URL and keys
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
SUPABASE_ANON_KEY="your-anon-key-from-settings"
```

### Step 3: Run Migrations to Supabase

```bash
cd backend

# Push your schema to Supabase
npx prisma db push

# Or run migrations
npm run prisma:migrate
```

### Step 4: Verify Connection

```bash
# Open Prisma Studio to verify
npm run prisma:studio
```

You should now see your Supabase database tables.

### Step 5: Update Frontend (Optional - for direct Supabase features)

If you want to use Supabase client features (like real-time, storage), install the Supabase client:

```bash
cd frontend
npm install @supabase/supabase-js
```

Then create a Supabase client:

```typescript
// frontend/src/services/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

Add to `frontend/.env`:
```env
VITE_SUPABASE_URL=https://[PROJECT-REF].supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Benefits of Using Supabase

✅ **Managed Database** - No need to maintain PostgreSQL locally
✅ **Built-in Auth** - Can replace JWT auth with Supabase Auth
✅ **Real-time** - Built-in real-time subscriptions
✅ **Storage** - File storage for player photos, documents
✅ **Auto-scaling** - Handles traffic spikes automatically
✅ **Backups** - Automatic backups included
✅ **Dashboard** - Web UI to manage your database

## Rollback to Local Database

If you need to go back to local PostgreSQL:

1. Restore `backend/.env`:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/aads_db?schema=public"
   ```

2. Run migrations:
   ```bash
   cd backend
   npm run prisma:migrate
   ```

## Troubleshooting

**Connection refused:**
- Check your Supabase project is not paused (free tier pauses after inactivity)
- Verify the connection string is correct
- Ensure your IP is allowed in Supabase (Settings → Database → Connection Pooling)

**Migration errors:**
- Make sure you're using the connection pooling URL for serverless environments
- Check Supabase dashboard for any database issues

**Performance:**
- Use connection pooling URLs for production
- Consider upgrading Supabase plan for better performance

---

Your current Supabase project: https://cyqpwtygtxpabyldwkrn.supabase.co
