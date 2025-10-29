# Publishing

Export and publish your component library to npm.

## Build components

```bash
pnpm build
```

This creates `dist/` with compiled components.

## Create package.json export config

```json
{
  "name": "playground-ui",
  "version": "0.1.0",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./dist/styles.css"
  },
  "files": ["dist"],
  "main": "dist/index.js",
  "types": "dist/index.d.ts"
}
```

## Create index file

Export all components in `src/index.ts`:

```ts
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Modal } from './components/Modal';

export type { ButtonProps } from './components/Button';
export type { CardProps } from './components/Card';
export type { ModalProps } from './components/Modal';
```

## Publish to npm

```bash
npm login
npm publish
```

## Use in other projects

```bash
npm install playground-ui
```

```tsx
import { Button, Card } from 'playground-ui';
import 'playground-ui/styles.css';

export default function App() {
  return (
    <Card>
      <Button>Hello from Playground UI</Button>
    </Card>
  );
}
```

## Versioning

Use semantic versioning:

- Patch (0.0.1): Bug fixes
- Minor (0.1.0): New features
- Major (1.0.0): Breaking changes

```bash
npm version patch   # 0.1.0 → 0.1.1
npm version minor   # 0.1.0 → 0.2.0
npm version major   # 0.1.0 → 1.0.0
npm publish
```

See [npm publishing docs](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages).
