import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/app/globals.css';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
  ],
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
