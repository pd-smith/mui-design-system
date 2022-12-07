const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            resolve: {
                alias: [
                    {
                        find: '@my/design-system',
                        replacement: path.resolve(__dirname, '../../../packages/design-system/'),
                    },
                ],
            },
        });
    },
};
