import type { Preview } from '@storybook/vue3'
import '../src/assets/index.css'; // replace with the name of your tailwind css file
import { withThemeByClassName } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
