import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-styling-webpack",
       options: {
         rules: [
           // Replaces existing CSS rules to support PostCSS
           {
             test: /\.css$/,
             use: [
               "style-loader",
               {
                 loader: "css-loader",
                 options: { importLoaders: 1 },
               },
               {
                 // Gets options from `postcss.config.js` in +your project root
                 loader: "postcss-loader",
                 options: {
                   implementation: require.resolve("postcss"),
                 },
               },
             ],
           },
         ],
       },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['./public', '../public'],
};
export default config;
