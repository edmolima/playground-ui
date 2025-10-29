# Writing Stories

Master Storybook stories to showcase your components in every state.

## Story anatomy

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

// Define meta (title, component, default args)
const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Category/Component',
  args: {
    label: 'Default label',
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

// Define individual stories
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
```

## Controls

Storybook automatically generates controls from args:

```tsx
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};
```

## Interactions

Test user interactions:

```tsx
import { userEvent, within } from '@storybook/test';

export const Clickable: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
};
```

## Multiple variants

Show multiple states at once:

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Component variant="primary" />
      <Component variant="secondary" />
      <Component variant="danger" />
    </div>
  ),
};
```

## Decorators

Wrap stories with context (theme, layout, etc.):

```tsx
const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50">
        <Story />
      </div>
    ),
  ],
};
```

See [Storybook docs](https://storybook.js.org/docs/react/writing-stories/introduction) for more patterns.
