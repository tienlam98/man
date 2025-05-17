# Setting Up Outstatic CMS for Next.js 15

This guide will walk you through setting up Outstatic v2 with your Next.js 15 project.

## Prerequisites

- A GitHub account
- A Next.js 15 project
- Node.js installed

## Step 1: Install Outstatic

```bash
npm install outstatic --legacy-peer-deps
```

## Step 2: Set Up GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click on "New OAuth App"
3. Fill in the following details:
   - **Application name**: Your blog name or any name you prefer
   - **Homepage URL**: `http://localhost:3000` (for local development)
   - **Authorization callback URL**: `http://localhost:3000/api/outstatic/callback`
4. Click "Register application"
5. Generate a new client secret
6. Save your Client ID and Client Secret for the next step

## Step 3: Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# GitHub OAuth App credentials
OST_GITHUB_ID=your_github_oauth_app_id
OST_GITHUB_SECRET=your_github_oauth_app_secret

# A random string (min 32 chars) for token encryption
# Generate one at https://generate-secret.vercel.app/32
OST_TOKEN_SECRET=generate_a_32_character_random_string

# Your GitHub repository name where content will be stored
OST_REPO_SLUG=your_repository_name

# Optional: GitHub branch to use (defaults to main if not specified)
# OST_REPO_BRANCH=main
```

## Step 4: Access Outstatic Dashboard

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/outstatic` in your browser
3. Sign in with your GitHub account
4. You should now see the Outstatic dashboard where you can create and manage content

## Step 5: Create Your First Content

1. Click on "Posts" collection (or create a new collection)
2. Click "New Document"
3. Fill in the title, content, and other fields
4. Click "Save" to commit the changes to your GitHub repository

## Step 6: Deploy to Production

When deploying to production, you'll need to:

1. Create a new GitHub OAuth App for your production domain
   - Homepage URL: `https://yourdomain.com`
   - Authorization callback URL: `https://yourdomain.com/api/outstatic/callback`
   
2. Add the production environment variables to your hosting provider (e.g., Vercel)

## How Outstatic Works

Outstatic saves your content as Markdown files in your GitHub repository under the `/outstatic/content` directory. This means:

- No database required
- Content is version-controlled with Git
- You own your data
- Perfect for static site generation

For more information, visit the [Outstatic Documentation](https://outstatic.com/docs/introduction). 