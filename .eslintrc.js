module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        amd: true,
        es6: true,
        es2020: true,
        // jest: true,
        // 'jest/globals': true,
        jquery: false,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        // 'plugin:jest/all',
        'plugin:prettier/recommended',
    ],
    // parser: '@babel/eslint-parser',
    // parserOptions: {
    //     babelOptions: {
    //         presets: ['@babel/preset-react'],
    //     },
    //     requireConfigFile: false,
    //     sourceType: 'module',
    // },
    plugins: [
        '@babel',
        'import',
        'react',
        'react-hooks',
        'jest',
        'jsx-a11y',
        'prettier',
    ],
    settings: {
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            pragma: 'React', // Pragma to use, default to "React"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
    // jest: {
    //        version: require('jest/package.json').version,
    // },
    rules: {
        semi: 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'prettier/prettier': ['error', { semi: false, singleQuote: true }],
        'react/react-in-jsx-scope': 0,
    },
}
