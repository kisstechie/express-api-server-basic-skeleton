// eslint.config.js

const globals = require('globals');

module.exports = [
    {
        languageOptions: {
            sourceType: 'commonjs',
            /* flat config uses globals package which replaces old env https://www.npmjs.com/package/globals,
and https://eslint.org/blog/2022/08/new-config-system-part-2/#goodbye-environments%2C-hello-globals */
            /*for further understanding of eslint-flat-config-and-new-system https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b*/
            globals: {
                ...globals.node,
            },
        },
    },
    {
        rules: {
            // indent: ['error', 2],
            indent: 'off',
            'prefer-const': 'error',
            'no-eval': 'error',
            eqeqeq: 'error',
            'no-implicit-globals': 'error', // Disallow declarations in the global scope, best practice to avoid ‘polluting’ the global scope and leaks
            'no-const-assign': 'error',
            'no-undef': 'error',
            'no-unexpected-multiline': 'error',
            'no-unreachable': 'error',
            'no-unused-vars': 'error',
            'max-lines': ['error', 300], // This rule enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity
            'no-duplicate-case': 'error', // This rule disallows duplicate test expressions in case clauses of switch statements.
            // camelcase rule helps to enforce camelcase naming convention - it looks for any underscores (_) located within the source code (https://eslint.org/docs/latest/rules/camelcase#allow)
            camelcase: [
                'error',
                {
                    properties: 'always',
                    ignoreDestructuring: false,
                    ignoreImports: true,
                    ignoreGlobals: true,
                },
            ],
        },
    },
];
