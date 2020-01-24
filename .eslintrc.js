module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    useJSXTextNode: true
  },
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'prettier',
    'react'
  ],
  settings: {
  },
  // add your custom rules here
  rules: {
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'spaced-comment': [
      'error',
      'always',
      { markers: ['/ <reference'] }
    ],
    'prettier/prettier': 'error',
    'max-len': ['error', {'code': 100}],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'import/extensions': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'no-return-assign': ['off']
  }
}
