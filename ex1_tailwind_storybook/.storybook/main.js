/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|mjs)", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // stories: ['../src/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },
  //find . -name ".cache" -type d -prune -exec rm -rf '{}' +
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
