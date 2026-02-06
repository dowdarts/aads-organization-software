# 🎯 AADS Organization Software

**Atlantic Amateur Darts Series** - Complete organization management platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

> Full-stack web application for managing darts events, players, sponsors, forms, and organizational operations.

🔗 **[Live Demo](#)** | 📖 **[Documentation](./README.md)** | 🚀 **[Quick Start](./QUICKSTART.md)**

---

## ✨ Features

### 🎪 Event Management
- Create and schedule darts tournaments
- Manage event rosters and registrations
- Track event sponsors and partnerships
- Event status tracking (Draft, Published, In Progress, Completed)

### 👥 Player Management
- Player database with profiles
- Skill level tracking (Beginner → Professional)
- Player scouting system
- Event participation history

### 💼 Sponsor Management
- Track current and potential sponsors
- Sponsor types (Monetary, In-Kind, Venue, Equipment)
- Relationship status tracking
- Event-sponsor associations

### 📝 Dynamic Forms System
- Custom form builder
- Questionnaires and surveys
- Registration forms
- Commentary and feedback forms
- Form response management

### 📞 Contact Management
- Centralized contact database
- Contact categorization (Player, Sponsor, Venue, Media, Volunteer)
- Quick access to stakeholder information

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control
  - **Admin**: Full system access
  - **Organizer**: Event and form management
  - **Scout**: Player and sponsor scouting
  - **Viewer**: Read-only access

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, TypeScript, Vite, React Router, Zustand, Axios |
| **Backend** | Node.js, Express, TypeScript, JWT |
| **Database** | PostgreSQL (Local or Supabase) |
| **ORM** | Prisma |
| **Deployment** | Supabase (Database), Vercel/Netlify (Frontend), Render/Railway (Backend) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+
- PostgreSQL 14+ (or Supabase account)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dowdarts/aads-organization-software.git
   cd aads-organization-software
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Choose your database setup:**

   **Option A: Supabase (Recommended for production)**
   
   See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for detailed instructions.
   
   Quick steps:
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Copy your connection string
   - Update `backend/.env` with Supabase credentials
   - Run migrations: `cd backend && npx prisma db push`

   **Option B: Local PostgreSQL**
   
   ```bash
   # Create database
   psql -U postgres
   CREATE DATABASE aads_db;
   \q
   
   # Update backend/.env with local connection
   DATABASE_URL="postgresql://postgres:password@localhost:5432/aads_db"
   
   # Run migrations
   cd backend
   npm run prisma:migrate
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001
   - Prisma Studio: `cd backend && npm run prisma:studio`

---

## 📁 Project Structure

```
aads-organization-software/
├── backend/                 # Express.js API
│   ├── prisma/             # Database schema & migrations
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Business logic
│   │   ├── middleware/     # Auth, error handling
│   │   ├── routes/         # API endpoints
│   │   └── server.ts       # Express app
│   └── .env               # Environment variables
│
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── stores/         # State management
│   │   └── App.tsx        # Main app
│   └── .env               # Frontend config
│
├── shared/                 # Shared TypeScript types
│   └── src/
│       ├── types/          # Shared interfaces
│       ├── constants/      # Constants
│       └── utils/          # Utilities
│
├── .vscode/               # VS Code configuration
├── README.md              # This file
├── QUICKSTART.md          # Quick start guide
└── SUPABASE_SETUP.md     # Supabase migration guide
```

---

## 📚 API Documentation

Base URL: `http://localhost:3001/api/v1`

### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/register` | POST | Register new user |
| `/auth/login` | POST | Login |
| `/auth/me` | GET | Get current user |

### Events
| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/events` | GET | ✓ | List all events |
| `/events/:id` | GET | ✓ | Get event details |
| `/events` | POST | Admin/Organizer | Create event |
| `/events/:id` | PUT | Admin/Organizer | Update event |
| `/events/:id` | DELETE | Admin/Organizer | Delete event |

### Players, Sponsors, Forms, Contacts
Similar CRUD endpoints available. See [API Documentation](./docs/API.md) for complete reference.

---

## 🗄️ Database Schema

**Key Models:**
- **User** - System users with roles
- **Event** - Tournaments and competitions
- **Player** - Player profiles with skill tracking
- **Roster** - Event-player relationships
- **Sponsor** - Sponsor information
- **EventSponsor** - Event-sponsor relationships
- **Contact** - Contact directory
- **Form** - Dynamic form definitions
- **FormResponse** - Form submissions

Full schema: [backend/prisma/schema.prisma](./backend/prisma/schema.prisma)

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:backend      # Backend only
npm run dev:frontend     # Frontend only

# Build
npm run build            # Build all packages
npm run build:backend    # Build backend
npm run build:frontend   # Build frontend

# Database
cd backend
npm run prisma:studio    # Open database GUI
npm run prisma:migrate   # Run migrations
npm run prisma:generate  # Generate Prisma client
```

### VS Code Tasks

Press `Ctrl+Shift+P` → "Tasks: Run Task":
- **Start Development Servers** - Run both servers
- **Prisma Studio** - Database viewer
- **Database Migration** - Run migrations

---

## 🔒 Environment Variables

### Backend `.env`
```env
DATABASE_URL=postgresql://...
SUPABASE_URL=https://xxx.supabase.co
PORT=3001
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

### Frontend `.env`
```env
VITE_API_URL=http://localhost:3001/api/v1
VITE_SUPABASE_URL=https://xxx.supabase.co
```

---

## 🚢 Deployment

### Supabase Database
1. Create project at [supabase.com](https://supabase.com)
2. Run `npx prisma db push` to deploy schema
3. Update connection string in production

### Backend (Render/Railway)
1. Connect GitHub repository
2. Set environment variables
3. Deploy from `backend` directory

### Frontend (Vercel/Netlify)
1. Connect GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Add environment variables

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

- 📧 Email: support@aads.example.com
- 🐛 Issues: [GitHub Issues](https://github.com/dowdarts/aads-organization-software/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/dowdarts/aads-organization-software/discussions)

---

## 🙏 Acknowledgments

Built with ❤️ for the Atlantic Amateur Darts Series community

---

**Repository:** https://github.com/dowdarts/aads-organization-software
