# Local Development and GitHub Pages Deployment

## Local Development

1. **Run the development server:**
   ```
   npm run dev
   ```
   This will start the local development server, typically at http://localhost:8080

2. **Make your changes** to the site while developing locally.

3. **Test in the browser** to ensure everything works as expected.

## Manual Deployment to GitHub Pages

When you're ready to deploy to GitHub Pages:

1. **Prepare for production build:**
   - Edit `vite.config.ts` to change:
     ```javascript
     base: '/', // Local development
     ```
     to:
     ```javascript
     base: '/gunjaomprakash.github.io/', // GitHub Pages deployment
     ```

   - Edit `src/App.tsx` to change:
     ```javascript
     const basename = '/';
     ```
     to:
     ```javascript
     const basename = '/gunjaomprakash.github.io/';
     ```

2. **Build the project:**
   ```
   npm run build
   ```
   This creates a `dist` folder with the production build.

3. **Preview the production build locally** (optional):
   ```
   npm run preview
   ```

4. **Deploy to GitHub Pages:**
   - Push the contents of the `dist` folder to the `gh-pages` branch of your repository
   - You can use a tool like `gh-pages` npm package to simplify this process:
     ```
     npm install --save-dev gh-pages
     ```
     Then add to package.json scripts:
     ```
     "deploy": "gh-pages -d dist"
     ```
     And run:
     ```
     npm run deploy
     ```

5. **After deployment:**
   - Change the configuration back for local development if needed
   - Your site will be available at: https://gunjaomprakash.github.io/

## Important Notes

- Always test your site locally before deploying
- Remember to update the base path in both vite.config.ts and App.tsx when switching between local development and production
- The first deployment may take a few minutes for GitHub Pages to process
