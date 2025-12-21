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
          'Introduction',
          'String Storage',
          'Number Storage',
          'Boolean Storage',
          'Array Storage',
          'Complex Object Storage',
          'Custom Serializers',
          'Multi Instance Sync',
          'Number Validation',
          'Email Validation',
        ],
      },
    },
  },
};

export default preview;
