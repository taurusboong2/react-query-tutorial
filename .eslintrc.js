module.exports = {
  plugins: ['prettier', 'react', 'react-hooks'],
  extends: ['prettier', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    AUTHNAME: 'readonly',
    AUTHPASS: 'readonly',
    PHASE: 'readonly',
  },
  rules: {
    'prettier/prettier': ['error'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-undef': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': ['warn'],
  },
};
