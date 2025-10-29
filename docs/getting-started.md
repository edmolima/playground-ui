# Getting Started

Get up and running with Playground UI in 2 minutes.

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

## Install

```bash
pnpm install
```

## Run Storybook

```bash
pnpm dev
```

Storybook opens at `http://localhost:6006`.

## What's next

- Browse the component library in Storybook
- Read [Creating Components](creating-components.md) to build your first component
- Check [Writing Stories](writing-stories.md) to learn Storybook patterns

## Build for production

```bash
pnpm build
pnpm build-storybook
```

- `dist/` — your built components (if exporting)
- `storybook-static/` — static Storybook site (ready to deploy)
