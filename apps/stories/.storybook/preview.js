import '@pillar/core/main.min.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'dark', color: 'hsl(0deg 0% 5%)' },
      { name: 'light', class: 'light', color: 'hsl(0deg 0% 95%)' },
    ],
  },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
