# Mehdi Nasiri – Interactive Resume

A single-page resume built with Next.js 15, showcasing experience, education, and skills with a polished design optimised for GitHub Pages.

## Live Demo
- GitHub Pages: https://mmehdinasiri.github.io/Resume/

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser.

## Static Export & Deployment
```bash
npm run build
```
This runs `next build --turbopack` and exports the site to the `out/` directory. A GitHub Actions workflow (`.github/workflows/deploy.yml`) rebuilds and publishes the `out/` folder automatically on every push to `main`.

## Tech Stack
- Next.js 15 (App Router, Turbopack)
- React 19
- Tailwind CSS 4 (with custom theming)

## Project Structure
- `src/data/resume.ts` – resume content and types
- `src/components/resume/` – header, summary, experience, education, and skills sections
- `public/profile.png` – profile photo displayed in the header

## License
MIT
