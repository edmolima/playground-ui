# Playground UI

**Craft beautiful, animated components with speed and confidence.**

A modern React component library playground built with Storybook, Tailwind CSS, and Framer Motion. Design, prototype, and ship UI components at scale.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white) ![Storybook](https://img.shields.io/badge/Storybook-9-FF69B4?logo=storybook&logoColor=white)

## Why Playground UI

- **🎨 Design in the browser.** Storybook with hot reload means instant visual feedback. See every variant, state, and interaction in real time.
- **⚡ Animations included.** Framer Motion is baked in. Smooth transitions and interactive motion are no longer an afterthought.
- **🎯 Fully typed.** TypeScript everywhere. Props, variants, and state are enforced. Catch mistakes before they ship.
- **🚀 Build once, use everywhere.** Export components, stories, and tokens to your projects. Single source of truth.
- **♿ Accessible by default.** Built with semantic HTML and ARIA in mind. Components work for everyone.

## Get started in 2 minutes

```bash
pnpm install
pnpm dev
```

Storybook opens at `http://localhost:6006`. Start building.

For detailed setup, see [docs/getting-started.md](docs/getting-started.md).

## Your first component

1. Create a component in `src/components/`
2. Create a story file (`ComponentName.stories.tsx`)
3. Add stories in Storybook
4. See it live at `http://localhost:6006`

See [docs/creating-components.md](docs/creating-components.md) for a step-by-step guide.

## Stack

| What | Tool |
|------|------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Component Library | Storybook 9 |
| Build Tool | Vite 7 |
| Linting | ESLint 9 |

## Documentation

- **[Getting Started](docs/getting-started.md)** — Install, run, build.
- **[Creating Components](docs/creating-components.md)** — Build your first component with stories.
- **[Writing Stories](docs/writing-stories.md)** — Master Storybook controls, args, and interactions.
- **[Animation Guide](docs/animations.md)** — Framer Motion patterns and examples.
- **[Tailwind + Storybook](docs/styling.md)** — Design tokens, themes, customization.
- **[Publishing](docs/publishing.md)** — Export components and ship to npm.
- **[Contributing](docs/contributing.md)** — How to improve the library.

## Common tasks

### Start Storybook (dev mode with HMR)

```bash
pnpm dev
```

### Build Storybook static site

```bash
pnpm build-storybook
pnpm serve-storybook
```

### Lint and check types

```bash
pnpm lint
pnpm build
```

### Chromatic (cloud CI for visual changes)

```bash
pnpm build-storybook
chromatic
```

## Directory structure

```plaintext
src/
├── components/        # Your UI components
├── stories/          # Storybook stories
└── assets/           # Icons, images, etc.

.storybook/          # Storybook config
```

## FAQ

**Can I use this with Next.js / Remix / Astro?**  
Yes. Export components from this library and import them in your framework. No framework lock-in.

**How do I add animations?**  
Use Framer Motion. See [docs/animations.md](docs/animations.md) for copy-paste examples.

**Should I use component libraries like shadcn/ui?**  
Yes. This playground is where you create *your* components. Mix and match open-source components with custom designs.

**Can I publish to npm?**  
Yes. See [docs/publishing.md](docs/publishing.md) for a workflow.

**Is Storybook required?**  
Not strictly, but it's the best tool for designing and testing components in isolation. Highly recommended.

## Next steps

1. Clone or fork this repo.
2. Run `pnpm install && pnpm dev`.
3. Open Storybook at `http://localhost:6006`.
4. Create your first component in `src/components/`.
5. Write a story and see it live.

## Resources

- [Storybook docs](https://storybook.js.org/docs/react/get-started/introduction)
- [Framer Motion docs](https://www.framer.com/motion/)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
- [React docs](https://react.dev)

---

Build something amazing. We're here to help.
