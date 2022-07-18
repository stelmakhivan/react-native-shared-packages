module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jest-formatting/strict',
    'plugin:lodash/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'lodash',
    '@typescript-eslint',
    'jest',
    'testing-library',
    'jest-formatting',
  ],
  rules: {
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks:
          '(useCode|useDerivedValue|useAnimatedStyle|useAnimatedProps|useAnimatedGestureHandler|useAnimatedScrollHandler)',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-restricted-globals': [
      'error',
      {
        name: 'test',
        message: 'Use `it` alias instead.',
      },
      {
        name: 'jest.resetAllMocks',
        message: 'We use `clearMocks: true` in jest.config.js',
      },
      {
        name: 'jest.clearAllMocks',
        message: 'We use `clearMocks: true` in jest.config.js',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/ban-ts-comment': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/newline-after-import': ['error', { count: 1 }],
    'lodash/prefer-noop': 0,
    'lodash/prefer-constant': 0,
    'lodash/prefer-lodash-method': 0,
    'import/export': 0,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'internal',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '{react,react-native}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native', 'builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debug': 'warn',
        'testing-library/prefer-screen-queries': 'off',
        'testing-library/render-result-naming-convention': 'off',
        'testing-library/no-node-access': 'off',
      },
    },
    {
      files: ['e2e/**/*.[jt]s'],
      extends: ['plugin:jest/recommended', 'plugin:jest-formatting/strict'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
  globals: {
    NodeJS: true,
    Window: true,
  },
};
