import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/auth.routes';
import eventRoutes from './routes/event.routes';
import playerRoutes from './routes/player.routes';
import rosterRoutes from './routes/roster.routes';
import sponsorRoutes from './routes/sponsor.routes';
import contactRoutes from './routes/contact.routes';
import formRoutes from './routes/form.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/players', playerRoutes);
app.use('/api/v1/rosters', rosterRoutes);
app.use('/api/v1/sponsors', sponsorRoutes);
app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/forms', formRoutes);
app.use('/api/v1/users', userRoutes);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
