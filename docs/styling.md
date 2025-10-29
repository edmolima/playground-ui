# Tailwind + Storybook

Use Tailwind CSS with Storybook for fast styling and theming.

## Tailwind in components

Apply Tailwind classes directly:

```tsx
export const Card = ({ children, variant = 'default' }) => {
  const styles = {
    default: 'bg-white border border-gray-200 rounded-lg shadow-sm',
    elevated: 'bg-white rounded-lg shadow-lg',
    outlined: 'border-2 border-blue-600 rounded-lg',
  };

  return (
    <div className={`p-4 ${styles[variant]}`}>
      {children}
    </div>
  );
};
```

## Tailwind config

Customize in `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0066ff',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

## Storybook viewport

Set a default viewport in `meta`:

```tsx
const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};
```

## Decorators with Tailwind

Wrap stories with layout:

```tsx
const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <Story />
      </div>
    ),
  ],
};
```

## Dark mode

Add dark mode preview in Storybook by using `<html class="dark">`:

```tsx
decorators: [
  (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
];
```

## Design tokens in Storybook

Document your design system:

```tsx
export const Colors = () => (
  <div className="grid grid-cols-4 gap-4">
    <div className="p-4 bg-brand text-white rounded">
      Brand: #0066ff
    </div>
    <div className="p-4 bg-gray-600 text-white rounded">
      Neutral: #4b5563
    </div>
  </div>
);
```

See [Tailwind docs](https://tailwindcss.com/docs) and [Storybook design tokens](https://storybook.js.org/docs/react/configure/theming).
