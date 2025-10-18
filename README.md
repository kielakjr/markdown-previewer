# Markdown Previewer

Small React + Vite application that renders live HTML preview from Markdown input.

What it does
- Type Markdown in the Editor; the Previewer renders HTML in real time.
- Uses marked for Markdown → HTML conversion and DOMPurify to sanitize output before insertion.
- Minimal, single-page layout with Editor and Previewer components.

How it works (brief)
- src/App.jsx holds the shared markdown state.
- src/components/Editor.jsx is a controlled textarea that updates the state.
- src/components/Previewer.jsx converts markdown to HTML with marked.parse and sanitizes it with DOMPurify before rendering via dangerouslySetInnerHTML.
- Vite handles development server, HMR and builds.

Security note
- marked outputs raw HTML. This project uses DOMPurify to sanitize before injecting into the DOM.

Quick start

Requirements
- Node.js (18+ recommended)
- npm

Install
1. Install dependencies:
   npm install

Development
1. Start dev server:
   npm run dev
2. Open the URL printed by Vite (usually http://localhost:5173).

Build / Preview
- Build production bundle:
  npm run build
- Preview the production build:
  npm run preview

Project structure (important files)
- index.html — app entry
- src/main.jsx — React bootstrap
- src/App.jsx — app state and layout
- src/components/Editor.jsx — input textarea
- src/components/Previewer.jsx — markdown rendering (marked + DOMPurify)
- src/styles.scss / src/index.css — styling
- vite.config.js — Vite config
- package.json — scripts and dependencies
