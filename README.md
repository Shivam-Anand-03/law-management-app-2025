# LawCrew - Legal Practice Management System

A comprehensive legal practice management system built with modern web technologies, designed to streamline law firm operations, case management, and client relationships.

## 🏗️ Architecture

LawCrew is built as a **monorepo** using modern development practices:

- **Monorepo Management**: Nx workspace with pnpm package manager
- **Frontend**: Next.js 15 with React 18, TypeScript, and Tailwind CSS
- **Backend**: Node.js with Express, tRPC, and Prisma ORM
- **Database**: PostgreSQL with Prisma migrations
- **Authentication**: Session-based authentication with role-based access control
- **Real-time Features**: Socket.io for live updates
- **File Storage**: Cloudinary integration for document management
- **AI Integration**: Google Generative AI for legal assistance

## 📁 Project Structure

```
lawcrew/
├── apps/
│   ├── api/                    # Backend API (Express + tRPC + Prisma)
│   │   ├── src/
│   │   │   ├── routers/        # tRPC routers (case, client, user, etc.)
│   │   │   ├── services/       # Business logic services
│   │   │   ├── middleware/     # Express middleware
│   │   │   └── prisma/         # Database schema and migrations
│   │   └── dist/               # Compiled JavaScript output
│   └── web/                    # Frontend Application (Next.js)
│       ├── src/
│       │   ├── app/            # Next.js app router pages
│       │   │   ├── (auth)/     # Authentication pages
│       │   │   ├── (home)/     # Landing pages
│       │   │   └── (lawcrew)/  # Main application pages
│       │   ├── components/    # Reusable UI components
│       │   ├── hooks/         # Custom React hooks
│       │   ├── store/         # State management (Zustand)
│       │   └── utils/          # Utility functions
│       └── public/            # Static assets
├── packages/
│   ├── db/                    # Shared database package
│   ├── navigations/           # Navigation utilities
│   └── trpc-client/           # tRPC client configuration
└── node_modules/              # Dependencies
```

## 🚀 Key Features

### 👥 User Management
- **Role-based Access Control**: Admin, Member, and Client roles
- **User Authentication**: Secure session-based authentication
- **Profile Management**: User profiles with address management
- **Team Management**: Admin can manage team members and clients

### ⚖️ Case Management
- **Case Creation & Tracking**: Comprehensive case lifecycle management
- **Practice Areas**: Support for multiple legal practice areas (Criminal, Civil, Commercial, etc.)
- **Case Status Tracking**: Open, Closed, Pending status management
- **Priority Management**: Low, Medium, High priority classification
- **Case Stages**: From Reconciliation Committee to Court proceedings
- **Case Notes**: Detailed case documentation and notes
- **Case Reminders**: Automated reminder system for important dates

### 💰 Financial Management
- **Billing System**: Multiple billing types (Fixed, Hourly, Retainer)
- **Payment Tracking**: Payment status and method management
- **Invoice Generation**: Automated invoice creation and management
- **Financial Reporting**: Revenue and expense tracking

### 📄 Document Management
- **File Upload**: Secure document storage with Cloudinary
- **Document Organization**: Case-related document management
- **Version Control**: Document version tracking
- **Document Sharing**: Secure document sharing between team members

### 📊 Dashboard & Analytics
- **Real-time Dashboard**: Live updates on case status and metrics
- **Data Visualization**: Charts and graphs for case analytics
- **Client Overview**: Comprehensive client information display
- **Task Management**: Kanban board for task organization
- **Calendar Integration**: Important dates and deadlines tracking

### 💬 Communication
- **Real-time Chat**: Socket.io powered live communication
- **Case Discussions**: Dedicated chat for each case
- **Team Collaboration**: Internal team communication
- **Client Communication**: Secure client-lawyer communication

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Radix UI components
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod validation
- **Rich Text Editor**: Tiptap
- **Charts**: Recharts
- **Real-time**: Socket.io client

### Backend
- **Runtime**: Node.js with Express
- **API**: tRPC for type-safe APIs
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Express sessions with bcrypt
- **File Upload**: Multer with Cloudinary
- **Real-time**: Socket.io server
- **AI**: Google Generative AI integration
- **Email**: Nodemailer for email services

### Development Tools
- **Monorepo**: Nx workspace
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier
- **Type Safety**: TypeScript throughout
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm package manager
- PostgreSQL database
- Cloudinary account (for file storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lawcrew
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env
   ```

4. **Database Setup**
   ```bash
   # Navigate to API directory
   cd apps/api
   
   # Generate Prisma client
   pnpm prisma generate
   
   # Run database migrations
   pnpm prisma migrate dev
   
   # (Optional) Seed the database
   pnpm prisma db seed
   ```

5. **Start Development Servers**
   ```bash
   # From root directory
   pnpm dev:api    # Start backend server
   pnpm dev:web    # Start frontend server
   
   # Or run both simultaneously
   pnpm monorepo
   ```


## 📱 Available Scripts

### Root Level
- `pnpm dev:web` - Start frontend development server
- `pnpm dev:api` - Start backend development server
- `pnpm monorepo` - Start both frontend and backend
- `pnpm build:web` - Build frontend for production
- `pnpm start:web` - Start production frontend server

### API (apps/api)
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm prisma generate` - Generate Prisma client
- `pnpm prisma migrate dev` - Run database migrations
- `pnpm prisma studio` - Open Prisma Studio

### Web (apps/web)
- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 🗄️ Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users**: User accounts with role-based access
- **Cases**: Legal cases with full lifecycle management
- **Clients**: Client information and case associations
- **Team Members**: Internal team management
- **Documents**: File storage and case associations
- **Billing**: Financial tracking and invoicing
- **Reminders**: Automated notification system

## 🔐 Authentication & Authorization

- **Session-based Authentication**: Secure session management
- **Role-based Access Control**: Admin, Member, and Client roles
- **Protected Routes**: Route protection based on user roles
- **Password Security**: Bcrypt hashing for password security

## 📈 Deployment

### Production Build
```bash
# Build both applications
pnpm build:web
cd apps/api && pnpm build

# Start production servers
pnpm start:web
cd apps/api && pnpm start
```

### Environment Configuration
Ensure all environment variables are properly configured for production deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shivam** - *Initial work* - [GitHub](https://github.com/shivam)

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**LawCrew** - Streamlining legal practice management with modern technology.
