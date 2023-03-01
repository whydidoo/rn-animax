module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['unused-imports'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  ignorePatterns: [
    '.eslintrc.js',
    '*.config.js',
    'storyLoader.js',
    'platform/scripts/*.js',
    '*.d.ts',
    '*.test.ts',
    '*.test.js',
    '__tests__',
  ],
};
