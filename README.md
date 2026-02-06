# AADS Organization Software

Atlantic Amateur Darts Series (AADS) comprehensive organization management software - a full-stack web application for managing events, players, sponsors, forms, and organizational operations.

## 🎯 Features

### Core Modules
- **Event Management**: Create and manage darts events with rosters and scheduling
- **Player Management**: Scout, track, and manage player information and statistics
- **Sponsor Management**: Track current and potential sponsors with scouting capabilities
- **Forms System**: Dynamic form builder for questionnaires, registrations, and commentary
- **Contact Management**: Centralized contact database for all stakeholders
- **User Authentication**: Role-based access control (Admin, Organizer, Scout, Viewer)

### Key Capabilities
- Event rosters with player management
- Player scouting and tracking system
- Sponsor scouting and relationship management
- Custom form creation (questionnaires, registration forms, etc.)
- Contact categorization (players, sponsors, venues, media, etc.)
- Real-time data management
- Secure authentication with JWT

## 🏗️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Styling**: CSS

### Shared
- Shared TypeScript types and utilities
- Common constants and validation functions

## 📁 Project Structure

```
AADSOpperationSoftware/
├── backend/                 # Express API server
│   ├── prisma/             # Database schema and migrations
│   │   └── schema.prisma   # Prisma schema definition
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API routes
│   │   └── server.ts       # Entry point
│   ├── .env.example        # Environment variables template
│   └── package.json
│
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── stores/         # State management
│   │   ├── App.tsx         # App component
│   │   └── main.tsx        # Entry point
│   ├── index.html
│   └── package.json
│
├── shared/                 # Shared types and utilities
│   └── src/
│       ├── types/          # TypeScript interfaces
│       ├── constants/      # Shared constants
│       └── utils/          # Utility functions
│
└── package.json           # Root package.json for workspace
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- PostgreSQL 14+ (running instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd AADSOpperationSoftware
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```
   This will install dependencies for all packages (root, backend, frontend, shared).

3. **Configure Backend Environment**
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Edit `backend/.env` and configure:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/aads_db?schema=public"
   PORT=3001
   NODE_ENV=development
   JWT_SECRET=your-secure-secret-key-change-in-production
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=http://localhost:5173
   ```

4. **Configure Frontend Environment**
   ```bash
   cd ../frontend
   cp .env.example .env
   ```
   
   Edit `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:3001/api/v1
   ```

5. **Setup Database**
   ```bash
   cd ../backend
   
   # Generate Prisma Client
   npm run prisma:generate
   
   # Run database migrations
   npm run prisma:migrate
   
   # (Optional) Seed database with sample data
   npm run seed
   ```

6. **Build shared package**
   ```bash
   cd ../shared
   npm run build
   ```

### Running the Application

#### Development Mode

From the root directory, run both backend and frontend:

```bash
npm run dev
```

This runs:
- Backend API server on `http://localhost:3001`
- Frontend dev server on `http://localhost:5173`

Or run them separately:

**Backend only:**
```bash
npm run dev:backend
```

**Frontend only:**
```bash
npm run dev:frontend
```

#### Production Mode

1. Build all packages:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

The backend will serve the built frontend files.

## 📚 API Documentation

### Base URL
```
http://localhost:3001/api/v1
```

### Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

### API Endpoints

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login
- `GET /auth/me` - Get current user

#### Events
- `GET /events` - List all events
- `GET /events/:id` - Get event by ID
- `POST /events` - Create event (Admin/Organizer)
- `PUT /events/:id` - Update event (Admin/Organizer)
- `DELETE /events/:id` - Delete event (Admin/Organizer)

#### Players
- `GET /players` - List all players
- `GET /players/:id` - Get player by ID
- `POST /players` - Add player (Admin/Organizer/Scout)
- `PUT /players/:id` - Update player (Admin/Organizer/Scout)
- `DELETE /players/:id` - Delete player (Admin/Organizer)

#### Rosters
- `GET /rosters` - List all rosters
- `GET /rosters/event/:eventId` - Get rosters for event
- `POST /rosters` - Add player to roster (Admin/Organizer)
- `PUT /rosters/:id` - Update roster entry (Admin/Organizer)
- `DELETE /rosters/:id` - Remove from roster (Admin/Organizer)

#### Sponsors
- `GET /sponsors` - List all sponsors
- `GET /sponsors/:id` - Get sponsor by ID
- `POST /sponsors` - Add sponsor (Admin/Organizer/Scout)
- `PUT /sponsors/:id` - Update sponsor (Admin/Organizer/Scout)
- `DELETE /sponsors/:id` - Delete sponsor (Admin/Organizer)

#### Forms
- `GET /forms` - List all forms
- `GET /forms/:id` - Get form by ID
- `POST /forms` - Create form (Admin/Organizer)
- `PUT /forms/:id` - Update form (Admin/Organizer)
- `DELETE /forms/:id` - Delete form (Admin/Organizer)
- `POST /forms/:id/responses` - Submit form response
- `GET /forms/:id/responses` - Get form responses

#### Contacts
- `GET /contacts` - List all contacts
- `GET /contacts/:id` - Get contact by ID
- `POST /contacts` - Add contact (Admin/Organizer)
- `PUT /contacts/:id` - Update contact (Admin/Organizer)
- `DELETE /contacts/:id` - Delete contact (Admin/Organizer)

#### Users
- `GET /users` - List all users (Admin only)
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user (Admin only)

## 👥 User Roles

- **ADMIN**: Full access to all features
- **ORGANIZER**: Manage events, rosters, forms, and contacts
- **SCOUT**: Scout and add players and sponsors
- **VIEWER**: Read-only access

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User**: System users with role-based permissions
- **Event**: Darts events with dates, locations, and status
- **Player**: Player information with skill levels and scouting data
- **Roster**: Event-player relationships for event registration
- **Sponsor**: Sponsor information with types and status tracking
- **EventSponsor**: Event-sponsor relationships
- **Contact**: Contact information with categorization
- **Form**: Dynamic form definitions with field configuration
- **FormResponse**: Submitted form responses

See `backend/prisma/schema.prisma` for the complete schema.

## 🔧 Development

### Database Management

**View database in Prisma Studio:**
```bash
cd backend
npm run prisma:studio
```

**Create a new migration:**
```bash
cd backend
npm run prisma:migrate
```

**Reset database:**
```bash
cd backend
npx prisma migrate reset
```

### Code Style

- Use TypeScript strict mode
- Follow RESTful API conventions
- Write clean, documented code
- Handle errors properly
- Use environment variables for configuration

## 🧪 Testing

*Testing framework to be added*

## 📝 Environment Variables

### Backend (.env)
- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - Secret key for JWT signing
- `JWT_EXPIRES_IN` - JWT expiration time
- `CORS_ORIGIN` - Allowed CORS origin

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- CORS protection
- Role-based access control
- SQL injection prevention via Prisma ORM

## 📦 Deployment

*Deployment instructions to be added for production environments*

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## 📄 License

*License information to be added*

## 📞 Support

For support and questions, contact the AADS development team.

---

**AADS Organization Software** - Streamlining darts event management
