# SecureBank - Banking Application

## Overview

SecureBank is a modern banking application built with React on the frontend and Express.js on the backend. It features a professional banking interface with multiple pages including home, news, FAQs, about, and products. The application is designed with a focus on security, user experience, and modern web development practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with custom banking color palette
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules (type: "module")
- **Development Server**: Custom Vite integration for HMR in development
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request logging with response time tracking

### Database Layer
- **ORM**: Drizzle ORM for type-safe database queries
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized in shared/schema.ts for type sharing
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with dropdown menus
- **Hero Section**: Gradient hero with banking dashboard mockup
- **Benefits**: Six-card grid showcasing banking features
- **Testimonials**: Customer testimonial carousel
- **FAQ Section**: Collapsible FAQ with banking-specific questions
- **Footer**: Comprehensive footer with company info and links

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route handling system
- **Vite Integration**: Custom Vite middleware for development

### UI System
- **Design System**: Custom banking theme with blue/green color palette
- **Components**: Complete set of Radix UI components with custom styling
- **Typography**: Consistent font sizing and spacing
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Data Flow

### Current Implementation
1. **Frontend**: React components render static banking content
2. **Backend**: Express server with basic route structure
3. **Storage**: In-memory storage with user management interface
4. **Database**: PostgreSQL schema defined but not actively used

### Planned Flow
1. **Client** → API requests to Express server
2. **Express** → Storage layer for data operations
3. **Storage** → Database queries via Drizzle ORM
4. **Response** → JSON data back to client
5. **Client** → TanStack Query manages caching and state

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Build Tools**: Vite, TypeScript, PostCSS

### Backend Dependencies
- **Server**: Express.js, Node.js native modules
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Utilities**: Various form handling and validation libraries

### Development Tools
- **Code Quality**: TypeScript for type safety
- **Development**: Vite dev server with HMR
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for server, Vite dev server for client
- **Production**: Node.js serves bundled server code and static files
- **Database**: PostgreSQL connection via environment variable

### Key Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database migration execution

### Hosting Requirements
- Node.js environment for Express server
- PostgreSQL database (Neon serverless compatible)
- Static file serving capability
- Environment variable support for database connection

The application is structured for easy deployment on platforms like Replit, Vercel, or traditional hosting providers with proper environment configuration.