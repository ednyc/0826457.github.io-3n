# Build Instructions for GitHub Pages Deployment

## The Problem
Your domain can access the `/docs` folder but not the files inside because the static files haven't been generated yet.

## Solution
Run the build command to generate the static files:

\`\`\`bash
# Install dependencies (if not already done)
npm install
# or
yarn install

# Build the static site (generates files in /docs folder)
npm run build
# or  
yarn build
\`\`\`

## What This Does
- Generates `index.html` in the `/docs` folder (the main entry point)
- Creates all static HTML files for each page
- Generates optimized CSS and JavaScript bundles
- Copies all assets and images

## After Building
1. The `/docs` folder will contain `index.html` and all necessary files
2. Your domain should be able to access all pages and assets
3. Commit and push the generated `/docs` folder to your repository

## GitHub Pages Settings
Make sure your repository settings have:
- Source: Deploy from a branch
- Branch: main
- Folder: /docs
