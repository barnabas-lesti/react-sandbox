import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

/**
 * Eslint plugin configuration.
 * @type {import('eslint').Linter.Config[]}
 */
const ESLINT_CONFIG = [
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "eol-last": ["error", "always"],
      "default-param-last": ["error"],
      "no-trailing-spaces": ["error"],
      "arrow-spacing": ["error"],
      "prefer-const": ["error"],
      "no-console": ["error", { allow: ["debug", "warn", "error"] }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "MethodDefinition[kind='set']",
          message: "Property setters are not allowed.",
        },
        {
          selector: "MethodDefinition[kind='get']",
          message: "Property getters are not allowed.",
        },
      ],
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },
];

/**
 * Import related eslint plugin configuration.
 * @type {import('eslint').Linter.Config[]}
 */
const IMPORTS_ESLINT_CONFIG = [
  eslintPluginImport.flatConfigs.recommended,
  {
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",

      "import/no-unresolved": "off",
      "no-restricted-imports": [
        "error",
        {
          paths: [{ name: "@mui/material" }, { name: "@mui/icons-material" }, { name: "@mui/x-date-pickers" }],
        },
      ],

      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^@?\\w"], ["^#?\\w"], ["^\\./", "^\\.\\./"], ["^/"], ["^.+\\.(css|scss)([?].*)?$"]],
        },
      ],
    },
  },
];

/**
 * Prettier plugin configuration to remove formatting related rules from eslint.
 * @type {import('eslint').Linter.Config[]}
 */
const PRETTIER_ESLINT_CONFIG = [eslintConfigPrettier];

/**
 * React framework eslint configuration.
 * @type {import('eslint').Linter.Config[]}
 */
const REACT_ESLINT_CONFIG = [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react": eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
      "jsx-a11y": eslintPluginJsxA11y,
    },
    rules: {
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginJsxA11y.flatConfigs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "error",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/no-autofocus": "off",
    },
  },
  {
    files: ["src/app/**/{page,layout}.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];

/**
 * Typescript eslint configuration.
 * @type {import('eslint').Linter.Config[]}
 */
const TYPESCRIPT_ESLINT_CONFIG = typescriptEslint.config(
  {
    files: ["**/*.{ts,tsx,js,cjs}"],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
        project: true,
      },
    },
    extends: [...typescriptEslint.configs.strict, ...typescriptEslint.configs.stylistic],
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },
  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  { ignores: ["dist/**"] },
  ...ESLINT_CONFIG,
  ...TYPESCRIPT_ESLINT_CONFIG,
  ...IMPORTS_ESLINT_CONFIG,
  ...REACT_ESLINT_CONFIG,
  ...PRETTIER_ESLINT_CONFIG,
];
