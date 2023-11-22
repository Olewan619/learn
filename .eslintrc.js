module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-alert': 'off',
        'prefer-const': 'off',
        'arrow-spacing': ['error', { before: true, after: true }],
        'object-curly-spacing': ['error', 'always'],
        'no-trailing-spaces': 'error',
        'no-plusplus': 'off',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-continue': 'off',
        eqeqeq: 'off',
        'no-template-curly-in-string': 'off',
    },
};
