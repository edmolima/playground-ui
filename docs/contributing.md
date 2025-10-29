# Contributing

Help improve Playground UI.

## Getting started

1. Fork the repo
2. `pnpm install`
3. `pnpm dev` (opens Storybook)
4. Create a branch: `git checkout -b feature/my-component`
5. Add your component and stories
6. Test in Storybook
7. Commit: `git commit -m "feat: add my-component"`
8. Push and open a PR

## Guidelines

- Keep components focused and composable
- Write TypeScript with proper types
- Create stories for all variants and states
- Follow Tailwind's utility-first approach
- Use Framer Motion for animations (not CSS animations)
- Test interactions in Storybook

## Code style

- Use ESLint: `pnpm lint`
- TypeScript: strict mode enabled
- Format: Prettier (auto on commit)

## Adding a new component

1. Create `src/components/MyComponent.tsx`
2. Create `src/MyComponent.stories.tsx`
3. Export in `src/index.ts`
4. Add a section in `README.md`

## Commit conventions

- `feat:` new feature or component
- `fix:` bug fix
- `docs:` documentation
- `style:` formatting
- `refactor:` code cleanup

## Questions?

Open an issue or start a discussion. We're here to help.
