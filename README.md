# Manly Wisdom Blog

A blog about manly wisdom and insights, built with Next.js and Outstatic CMS.

## Features

- Modern UI built with Next.js 14 and TailwindCSS
- Content management with Outstatic CMS
- Responsive design for all devices
- Dark mode support
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18 or later
- A GitHub account (required for Outstatic CMS)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/manly-wisdom-blog.git
   cd manly-wisdom-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up GitHub OAuth for Outstatic:
   - Go to [GitHub OAuth Apps](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Fill in the details:
     - Application name: `Manly Wisdom Blog`
     - Homepage URL: `http://localhost:3000`
     - Authorization callback URL: `http://localhost:3000/api/outstatic/callback`
   - Register application
   - Generate a new client secret
   - Copy the Client ID and Client Secret

4. Create a `.env.local` file in the root directory with the following content:
   ```
   # Outstatic CMS Configuration
   OST_GITHUB_ID=your_github_client_id
   OST_GITHUB_SECRET=your_github_client_secret
   OST_TOKEN_SECRET=random_string_at_least_32_characters_long
   OST_REPO_SLUG=your_github_repository_name
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

7. Access the CMS at [http://localhost:3000/outstatic](http://localhost:3000/outstatic)

## Using Outstatic CMS

1. Navigate to `/outstatic` and login with your GitHub account
2. Create your first collection (e.g., "posts")
3. Add documents to your collection with markdown content
4. Publish your content

When you save content in Outstatic, it will be committed to your GitHub repository in the `/outstatic/content` directory.

## Production Deployment

For a production deployment, you'll need to:

1. Create a second GitHub OAuth App with your production URLs
2. Add the environment variables to your hosting provider (Vercel, Netlify, etc.)
3. Deploy your application

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Outstatic Documentation](https://outstatic.com/docs/introduction)
- [TailwindCSS Documentation](https://tailwindcss.com/docs) 