# pausevilla.com

Source code of my personal site, [pausevilla.com](https://pausevilla.com): who I am, my work at inLab FIB, the apps I've published and my CV.

## Stack

- [Astro 5](https://astro.build), static output
- Tailwind CSS 3 and TypeScript (`astro check` runs before every build)
- Three languages: English (default), Spanish and Catalan, using Astro's i18n routing
- Deployed to GitHub Pages with GitHub Actions on every push to `main`, under a custom domain

## Where things are

- `src/data/site.ts`: all the content (projects, experience, texts) in the three languages
- `src/i18n/`: language config and helpers
- `src/components/` and `src/layouts/`: the page and its sections
- `public/`: CV PDFs, favicons, `robots.txt` and `sitemap.xml`
- `.github/workflows/deploy.yml`: build and deploy

## Run it locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # type check and build to dist/
```
