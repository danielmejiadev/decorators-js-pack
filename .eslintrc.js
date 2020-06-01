module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/no-named-as-default': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'ts': 'never',
      }
    ],
    'no-param-reassign': ["error", { "props": false }],
    'object-curly-newline': [
      'error',
      {
        'ObjectPattern': {
          'multiline': true
        },
        'ImportDeclaration': 'never',
        'ExportDeclaration': {
          'multiline': true,
          'minProperties': 3
        }
      }
    ],
  },
  'settings': {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.ts'],
      }
    }
  }
};