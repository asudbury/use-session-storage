import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      description: {
        component:
          'A powerful React hook for SessionStorage management with TypeScript support, serialization, and comprehensive event handling.',
      },
    },
    options: {
      storySort: {
        order: [
          '1. Introduction',
          '2. Basic Usage',
          '3. Advanced Usage',
          '4. Validation',
          '5. Performance',
        ],
      },
    },
  },
};

export default preview;
