module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'turbo',
        'prettier',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react-hooks', 'prettier', 'jsx-a11y'],
    rules: {
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
