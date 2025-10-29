# Animation Guide

Use Framer Motion to add smooth, interactive animations to your components.

## Basic animation

```tsx
import { motion } from 'framer-motion';

export const FadeIn = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Hello, world!
  </motion.div>
);
```

## Slide in

```tsx
<motion.div
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Slide from left
</motion.div>
```

## Stagger children

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const List = ({ items }) => (
  <motion.div variants={container} initial="hidden" animate="show">
    {items.map((item) => (
      <motion.div key={item.id} variants={item}>
        {item.label}
      </motion.div>
    ))}
  </motion.div>
);
```

## Hover animations

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => alert('Clicked!')}
>
  Hover me
</motion.button>
```

## Drag

```tsx
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
>
  Drag me around
</motion.div>
```

## Scroll animations

```tsx
import { useScroll, useTransform } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollY } = useScroll();
  const scaleX = useTransform(scrollY, [0, 1000], [0, 1]);

  return <motion.div style={{ scaleX }} className="h-1 bg-blue-600" />;
};
```

## In Storybook

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FadeIn } from './animations';

const meta: Meta = {
  title: 'Animations/FadeIn',
  render: () => <FadeIn />,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
```

See [Framer Motion docs](https://www.framer.com/motion/) for advanced patterns.
