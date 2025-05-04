# GitHub Pages Deployment Instructions for Vite Project

## 1. Configuration Files Setup (Already Done)

The following files have been configured for GitHub Pages deployment:

- **vite.config.ts** - Base path set to `/gunjaomprakash.github.io/` for production
- **App.tsx** - Router basename set to `/gunjaomprakash.github.io/` for production
- **404.html** - Special handling for SPA routing on GitHub Pages
- **index.html** - Includes SPA redirect script for proper routing

## 2. Build the Project

Run:
```
npm run build
```
This creates a `dist` folder with the production build.

## 3. Deploy to GitHub Pages

### Manual Deployment
If you're deploying manually:

1. Push the contents of your repository to GitHub
2. In your GitHub repository settings, set up GitHub Pages:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"
   - Choose "Static HTML" workflow or create a custom one

### Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```

2. Push this file to your repository
3. GitHub Actions will automatically build and deploy your site when you push to main

## 4. Verify Your Deployment

Once deployed, your site should be available at:
`https://gunjaomprakash.github.io/`

## 5. Troubleshooting

- If assets fail to load, check browser console for errors
- Ensure all paths in your app use relative paths rather than absolute paths
- If using custom domains, update the CNAME file and base paths accordingly

---

Keep this file updated if your repo name changes or you move to a custom domain.
