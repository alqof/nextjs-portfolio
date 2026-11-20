# Alqof's Portfolio

A personal portfolio for Alqof Nur Aji, a web developer based in South Jakarta. It showcases selected projects, professional experience, a development approach, and contact information.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Motion, Three.js, and Globe.gl power the interactive elements.

## Run locally

Use Node.js **20.9 or later** and **pnpm 10**. The portfolio does not require an environment file or API keys.

```bash
git clone https://github.com/alqof/nextjs-portfolio.git
cd nextjs-portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production preview

| Command | What it does |
| --- | --- |
| `pnpm lint` | Runs ESLint across the repository. |
| `pnpm audit` | Checks the dependency lockfile for known advisories. |
| `pnpm build` | Type-checks the project and creates a production build. |
| `pnpm start` | Serves the production build locally after `pnpm build`. |

The build may need access to Google Fonts to fetch Geist. The home page is prerendered. For a production deployment, use a Next.js-compatible host so the headers configured in [next.config.ts](next.config.ts) and the built-in image optimizer are served.

## Update the portfolio

| What to change | Where to edit |
| --- | --- |
| Projects, work history, navigation, contact email, and social links | [data/index.tsx](data/index.tsx) |
| Homepage section order | [app/page.tsx](app/page.tsx) |
| Introduction and profile copy | [components/Hero.tsx](components/Hero.tsx) |
| Page title, description, and fonts | [app/layout.tsx](app/layout.tsx) |
| Global styles and theme tokens | [app/globals.css](app/globals.css), [tailwind.config.ts](tailwind.config.ts) |
| Screenshots, logos, and icons | [public/](public/) |

When adding an image to `public/`, reference it from the site root. For example, `public/project.jpg` becomes `/project.jpg` in the project data.
