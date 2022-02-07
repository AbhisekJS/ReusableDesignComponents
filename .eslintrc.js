module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",    
        "airbnb",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "import"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": "off",
        "react/react-in-jsx-scope": "off",
        "import/extensions":"off",
        'import/no-unresolved': 'off',
        'import/order': [
            'error',
            {
                groups:['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],

                pathGroups: [   
                    {
                    pattern: 'react',
                    group: 'external',
                    position:'before',
                },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'never',
            alphabetize: {
                order: 'asc',
                caseInsensitive: true,
            }
        
        },
        
    ],
},
    settings : {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {
                project: '.',
            }
        }
    }
};