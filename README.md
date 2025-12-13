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

## Local Development Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git
- A PostgreSQL database (local or cloud-hosted)

### Option A: Using Vercel Postgres (Recommended)

If the project is already deployed to Vercel with a Postgres database:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TensorWorksCo/aitruistic.git
   cd aitruistic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Vercel CLI and login:**
   ```bash
   npm install -g vercel
   vercel login
   ```

4. **Link to the Vercel project:**
   ```bash
   vercel link
   ```
   Select the existing project when prompted.

5. **Pull environment variables:**
   ```bash
   vercel env pull .env.local
   ```
   This creates `.env.local` with all the database and auth credentials.

6. **Add DIRECT_URL (if not present):**
   Check if `DIRECT_URL` exists in `.env.local`. If not, copy the value from `POSTGRES_URL_NON_POOLING`:
   ```bash
   echo "DIRECT_URL=<your-POSTGRES_URL_NON_POOLING-value>" >> .env.local
   ```

7. **Generate Prisma client:**
   ```bash
   npm run db:generate
   ```

8. **Start the development server:**
   ```bash
   npm run dev
   ```

9. **Open [http://localhost:3000](http://localhost:3000)**

### Option B: Fresh Setup with Local PostgreSQL

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TensorWorksCo/aitruistic.git
   cd aitruistic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up a local PostgreSQL database:**
   ```bash
   # macOS with Homebrew
   brew install postgresql@15
   brew services start postgresql@15
   createdb aitruistic
   
   # Or use Docker
   docker run --name aitruistic-db -e POSTGRES_DB=aitruistic -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:15
   ```

4. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

5. **Configure environment variables in `.env.local`:**
   ```env
   # Database
   DATABASE_URL="postgresql://postgres:password@localhost:5432/aitruistic"
   DIRECT_URL="postgresql://postgres:password@localhost:5432/aitruistic"
   
   # Auth - generate a secret
   AUTH_SECRET="$(openssl rand -base64 32)"
   
   # OAuth (optional - for Google/GitHub login)
   AUTH_GOOGLE_ID=""
   AUTH_GOOGLE_SECRET=""
   AUTH_GITHUB_ID=""
   AUTH_GITHUB_SECRET=""
   ```

6. **Generate Prisma client and push schema:**
   ```bash
   npm run db:generate
   npm run db:push
   ```

7. **Start the development server:**
   ```bash
   npm run dev
   ```

8. **Open [http://localhost:3000](http://localhost:3000)**

### Setting Up OAuth Providers (Optional)

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to APIs & Services → Credentials
4. Create OAuth 2.0 Client ID (Web application)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

#### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Homepage URL: `http://localhost:3000`
4. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
5. Copy Client ID and Secret to `.env.local`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Prisma Studio (database GUI) |

### Troubleshooting

**Build fails with "Failed to collect page data"**
- Ensure `DATABASE_URL` and `DIRECT_URL` are set correctly
- Run `npm run db:generate` before building

**"Cannot find module @prisma/client"**
- Run `npm run db:generate` to generate the Prisma client

**OAuth login not working**
- Check redirect URIs match exactly (including trailing slashes)
- Ensure `AUTH_SECRET` is set
- For production, update OAuth redirect URIs to your domain

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
