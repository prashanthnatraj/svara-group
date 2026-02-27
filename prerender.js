/**
 * prerender.js
 * 
 * Runs AFTER `vite build` to generate real HTML for each route.
 * This ensures search engines and LLMs see actual content instead of an empty <div id="root">.
 * 
 * How it works:
 * 1. Spins up a local server serving the built `dist/` folder
 * 2. Uses Puppeteer to visit each route and capture the fully-rendered HTML
 * 3. Saves the rendered HTML as static files (e.g., dist/brandpilot-ai/index.html)
 * 4. Shuts down the server
 * 
 * Usage: node prerender.js (run from project root after `npm run build`)
 */

import { launch } from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';

const DIST_DIR = 'dist';
const PORT = 4173;

// Add all your public routes here
const ROUTES = [
  '/',
  '/brandpilot-ai/',
];

// Simple static file server for the dist folder
function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
  };

  const server = createServer((req, res) => {
    let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
    
    // If no extension, try serving index.html from that directory or fallback to root index.html
    if (!extname(filePath)) {
      const dirIndex = join(filePath, 'index.html');
      if (existsSync(dirIndex)) {
        filePath = dirIndex;
      } else {
        filePath = join(DIST_DIR, 'index.html');
      }
    }

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      // Fallback to index.html for SPA routing
      const content = readFileSync(join(DIST_DIR, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`  Server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('\n🔍 Pre-rendering routes for SEO...\n');

  const server = await startServer();
  const browser = await launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });

  for (const route of ROUTES) {
    console.log(`  Rendering: ${route}`);
    const page = await browser.newPage();
    
    await page.goto(`http://localhost:${PORT}${route}`, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait a bit for any animations/transitions to settle
    await new Promise(r => setTimeout(r, 1000));

    const html = await page.content();

    // Determine output path
    const outputDir = join(DIST_DIR, route);
    const outputFile = join(outputDir, 'index.html');

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(outputFile, html);
    console.log(`  ✅ Saved: ${outputFile}`);
    
    await page.close();
  }

  await browser.close();
  server.close();

  console.log('\n✅ Pre-rendering complete! All routes now have static HTML.\n');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
