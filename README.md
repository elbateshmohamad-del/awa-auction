# AWA Auction Platform

Commercial-grade auction and bike sales platform built with Next.js 14, standardizing the flow from inventory management to bidding and checkout.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Initialize the database (SQLite):
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🏗 System Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: **PostgreSQL (Production Ready)**
- **ORM**: Prisma
- **Styling**: TailwindCSS
- **Internationalization**: `next-intl` (/(en)/, /(ja)/)

### Implemented Features
- **Real-time Bidding**: Transaction-safe bidding engine (Prisma transactions).
- **Secure Authentication**: Session-based auth with RBAC (Admin/Staff/User).
- **SNS Campaign Integration**: Automated reward tracking linked to purchase history.
- **Dynamic Content**: Database-driven content for Bikes, Containers, and System Settings.

### Directory Structure
- `src/app/[locale]/(platform)`: Core app functionality (Auction, Dashboard, Admin)
- `src/lib`: Core logic (Database access, Auth, Utilities)

---

## 🛠️ Setup & Deployment

### 1. Environment Setup
Copy the example environment file:
```bash
cp ENV_EXAMPLE.md .env
```
Update `.env` with your PostgreSQL connection string (`DATABASE_URL`) and `JWT_SECRET`.

### 2. Database Initialization
Initialize the database schema and seed initial data:
```bash
# Apply migrations
npx prisma migrate deploy

# Seed database (Admin user, initial settings)
npx prisma db seed
```

### 3. Running Locally
```bash
npm run dev
```

## ⚠️ Deployment Notes

User authentication and data persistence are fully implemented using PostgreSQL. ensuring seamless deployment to Vercel or other serverless platforms.
Mock data has been removed from critical paths.

---

## 🧪 Testing

Run the automated API test suite:

```bash
node run-tests.js
```

Covers:
- SNS Submission API validation
- Duplicate URL checks
- Admin verification logic
