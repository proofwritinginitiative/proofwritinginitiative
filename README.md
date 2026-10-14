# Proof Writing Initiative

React-powered multi-page website for the Proof Writing Initiative. It is built with Vite and deployed as static files on GitHub Pages.

## Develop

```sh
pnpm install
pnpm dev
```

## Build for GitHub Pages

```sh
pnpm build
```

The build writes the compiled pages and assets into the repository root so the existing GitHub Pages project-site URL continues to work. React components and styles live in `src/`, with the five HTML entry points in `src/pages/`. The legacy `classes.html`, `know.html`, and `mission.html` files redirect to the consolidated pages.
