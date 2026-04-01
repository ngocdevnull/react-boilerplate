import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import boundaries from 'eslint-plugin-boundaries';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'boundaries': boundaries,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      'boundaries/elements': [
        { type: 'core', pattern: 'src/core/**/*' },
        { type: 'ui', pattern: 'src/_widgets/ui/**/*' },
        { type: 'shared', pattern: 'src/shared/**/*' },
        { type: 'module', pattern: 'src/modules/:name/**/*', capture: ['name'] },
        { type: 'asset', pattern: 'src/assets/**/*' },
        { type: 'router', pattern: 'src/router/**/*' },
        { type: 'context', pattern: 'src/context/**/*' },
        { type: 'locale', pattern: 'src/locale/**/*' },
      ],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      
      'boundaries/no-unknown': 'warn',
      'boundaries/element-types': [
        'error',
        {
          default: 'allow',
          rules: [
            { from: 'core', disallow: ['module', 'shared', 'ui'] },
            { from: 'ui', disallow: ['module', 'core', 'shared'] },
            { from: 'shared', disallow: ['module'] },
            {
              from: 'module',
              disallow: [['module', { name: '!${name}' }]],
              message: 'Module "${file.capture.name}" cannot import from other module "${dependency.capture.name}"',
            },
          ],
        },
      ],
    },
  }
);
