# AItruistic

A non-profit organization website dedicated to education and discussion about modern AI safety, altruistic opportunity, and civilizational threats.

## Overview

AItruistic is a community media platform built with Next.js 14, designed to provide a space for informed public discourse about AI's impact on society. The platform features:

- **Topic-based content organization** covering AI Safety, Politics & Governance, Economic Impacts, Mental Health, Altruistic Opportunity, and Technology Demos
- **User authentication** with OAuth (Google, GitHub) and email/password
- **Role-based access control** with Admin and Moderator roles
- **Community interaction** through comments and likes
- **Media integration** ready for YouTube embeds and external article links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: NextAuth.js v5
- **Database**: Prisma with PostgreSQL (Vercel Postgres)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (or Vercel Postgres)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd AItruistic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Fill in the required environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `DIRECT_URL` - Direct database URL (for Vercel Postgres)
   - `AUTH_SECRET` - Generate with `openssl rand -base64 32`
   - `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` (optional)
   - `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` (optional)

4. Generate Prisma client and push schema:
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth routes
│   │   ├── comments/      # Comments API
│   │   └── likes/         # Likes API
│   ├── admin/             # Admin dashboard
│   ├── auth/              # Auth pages (signin, signup)
│   ├── topics/[slug]/     # Topic pages
│   └── about/             # About page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer
│   ├── comments/          # Comment components
│   └── providers.tsx      # Context providers
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── db.ts              # Prisma client
│   └── utils.ts           # Utility functions
├── types/
│   └── next-auth.d.ts     # NextAuth type extensions
└── middleware.ts          # Auth middleware
```

## Features

### Topics
The site organizes content into six main topic areas:
- **AI Safety** - Alignment, control problems, existential risk
- **Politics & Governance** - Regulation, policy, international cooperation
- **Economic Impacts** - Jobs, automation, UBI
- **Mental Health** - AI companions, digital wellness
- **Altruistic Opportunity** - Positive AI applications
- **Technology Demos** - Interactive demonstrations

### User Roles
- **USER** - Can view content, comment, and like
- **MODERATOR** - Can moderate comments and content
- **ADMIN** - Full access to admin dashboard and settings

### Content Types
- **Articles** - Written content (can link to Substack, Medium, etc.)
- **Videos** - YouTube video embeds
- **Demos** - Interactive technology demonstrations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The project is optimized for Vercel with:
- Vercel Postgres for database
- Edge middleware for authentication
- Automatic deployments on push

## Content Strategy

The platform is designed to integrate with existing media platforms:

- **Articles**: Link to or embed content from Substack, Medium, or store natively
- **Videos**: Embed YouTube videos with full API integration
- **Demos**: Host interactive AI demonstrations

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

## License

This project is licensed under the MIT License.

---

Built with ❤️ for the future of humanity
