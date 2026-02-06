// User types
export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  ORGANIZER = 'ORGANIZER',
  SCOUT = 'SCOUT',
  VIEWER = 'VIEWER'
}

// Event types
export interface Event {
  id: string;
  name: string;
  description: string;
  date: Date;
  location: string;
  status: EventStatus;
  maxPlayers?: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum EventStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Player types
export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  nickname?: string;
  skillLevel: SkillLevel;
  status: PlayerStatus;
  notes?: string;
  scoutedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum SkillLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  PROFESSIONAL = 'PROFESSIONAL'
}

export enum PlayerStatus {
  SCOUTED = 'SCOUTED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  RETIRED = 'RETIRED'
}

// Roster types
export interface Roster {
  id: string;
  eventId: string;
  playerId: string;
  position?: string;
  registrationDate: Date;
  status: RosterStatus;
  notes?: string;
}

export enum RosterStatus {
  REGISTERED = 'REGISTERED',
  CONFIRMED = 'CONFIRMED',
  WAITLISTED = 'WAITLISTED',
  CANCELLED = 'CANCELLED',
  COMPETED = 'COMPETED'
}

// Sponsor types
export interface Sponsor {
  id: string;
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
  website?: string;
  status: SponsorStatus;
  type: SponsorType;
  contributionLevel?: string;
  notes?: string;
  scoutedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum SponsorStatus {
  POTENTIAL = 'POTENTIAL',
  CONTACTED = 'CONTACTED',
  NEGOTIATING = 'NEGOTIATING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum SponsorType {
  MONETARY = 'MONETARY',
  IN_KIND = 'IN_KIND',
  VENUE = 'VENUE',
  EQUIPMENT = 'EQUIPMENT',
  OTHER = 'OTHER'
}

// Event Sponsor relationship
export interface EventSponsor {
  id: string;
  eventId: string;
  sponsorId: string;
  contributionAmount?: number;
  contributionDescription?: string;
  createdAt: Date;
}

// Contact types
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  category: ContactCategory;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ContactCategory {
  PLAYER = 'PLAYER',
  SPONSOR = 'SPONSOR',
  VENUE = 'VENUE',
  MEDIA = 'MEDIA',
  VOLUNTEER = 'VOLUNTEER',
  OTHER = 'OTHER'
}

// Form types
export interface Form {
  id: string;
  title: string;
  description?: string;
  type: FormType;
  status: FormStatus;
  fields: FormField[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum FormType {
  QUESTIONNAIRE = 'QUESTIONNAIRE',
  REGISTRATION = 'REGISTRATION',
  SURVEY = 'SURVEY',
  FEEDBACK = 'FEEDBACK',
  COMMENTARY = 'COMMENTARY'
}

export enum FormStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export interface FormField {
  id: string;
  label: string;
  type: FormFieldType;
  required: boolean;
  options?: string[];
  placeholder?: string;
  validation?: FieldValidation;
  order: number;
}

export enum FormFieldType {
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  SELECT = 'SELECT',
  MULTISELECT = 'MULTISELECT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  FILE = 'FILE'
}

export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  message?: string;
}

// Form Response types
export interface FormResponse {
  id: string;
  formId: string;
  respondentId?: string;
  respondentEmail?: string;
  responses: Record<string, any>;
  submittedAt: Date;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Authentication types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}
