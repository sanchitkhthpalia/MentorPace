# Deployment Guide for MentorPace

This guide will help you deploy the MentorPace website to Vercel or Netlify.

## Prerequisites
- GitHub repository: https://github.com/sanchitkhthpalia/MentorPace
- Node.js 20+ installed (for local testing)

## Option 1: Deploy to Vercel (Recommended for Next.js)

Vercel is the recommended platform for Next.js applications as it's made by the creators of Next.js.

### Steps:

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign up or login with your GitHub account

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select your GitHub account
   - Find and select the `MentorPace` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `venus-nextjs-1.0.0/venus-nextjs-1.0.0` (if your project is nested)
   - **Build Command**: `npm run build` (or `npm run build` if using npm)
   - **Output Directory**: `.next` (default for Next.js)
   - **Install Command**: `npm install` (or `npm install`)

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - For this project, you may not need any initially

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a URL like: `https://mentorpace.vercel.app`

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `mentorpace.com`)
   - Follow DNS configuration instructions

### Automatic Deployments
- Every push to `main` branch will automatically trigger a new deployment
- Pull requests will create preview deployments

---

## Option 2: Deploy to Netlify

### Steps:

1. **Sign up/Login to Netlify**
   - Go to https://www.netlify.com
   - Sign up or login with your GitHub account

2. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub" and authorize Netlify
   - Find and select the `MentorPace` repository

3. **Configure Build Settings**
   - **Base directory**: `venus-nextjs-1.0.0/venus-nextjs-1.0.0` (if your project is nested)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (for Next.js static export) OR leave empty for server-side rendering
   
   **Note**: For Next.js on Netlify, you may need to:
   - Use `next export` for static sites, OR
   - Use Netlify's Next.js runtime plugin for full Next.js support

4. **Install Netlify Next.js Plugin** (Recommended)
   - Create `netlify.toml` in your project root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

5. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - You'll get a URL like: `https://mentorpace.netlify.app`

6. **Custom Domain** (Optional)
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Follow DNS configuration instructions

### Automatic Deployments
- Every push to `main` branch will automatically trigger a new deployment
- Pull requests will create deploy previews

---

## Important Notes:

### For Vercel:
- ✅ Best Next.js support (made by Next.js creators)
- ✅ Zero configuration needed
- ✅ Automatic optimizations
- ✅ Serverless functions support
- ✅ Edge functions support

### For Netlify:
- ✅ Good Next.js support with plugin
- ✅ May need additional configuration
- ✅ Good for static exports
- ✅ Form handling and serverless functions

### Build Commands Reference:
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server (local testing)
npm start

# Development server
npm run dev
```

### Troubleshooting:

1. **Build Fails**: Check build logs in the deployment dashboard
2. **404 Errors**: Ensure all routes are properly configured
3. **Environment Variables**: Add them in the platform's dashboard
4. **Custom Domain**: Update DNS records as instructed by the platform

---

## Quick Start Commands:

### Vercel CLI (Alternative):
```bash
npm i -g vercel
cd venus-nextjs-1.0.0/venus-nextjs-1.0.0
vercel
```

### Netlify CLI (Alternative):
```bash
npm i -g netlify-cli
cd venus-nextjs-1.0.0/venus-nextjs-1.0.0
netlify deploy
```

---

## Recommended: Vercel
For Next.js projects, Vercel is the recommended choice due to:
- Native Next.js support
- Zero configuration
- Automatic optimizations
- Better performance
- Free tier with generous limits

