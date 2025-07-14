import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [ 'plugin:@next/next/recommended','plugin:@typescript-eslint/recommended' ],
    rules: {
    },
    ignorePatterns: ['node_modules/**', '.next/**', 'out/**'],
  }),
];

export default eslintConfig;
