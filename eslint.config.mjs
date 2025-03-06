import globals from "globals";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  prettierConfig,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      next: nextPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Complete set of Next.js rules
      "next/google-font-display": "warn",
      "next/google-font-preconnect": "warn",
      "next/inline-script-id": "warn",
      "next/next-script-for-ga": "warn",
      "next/no-assign-module-variable": "error",
      "next/no-async-client-component": "error",
      "next/no-before-interactive-script-outside-document": "error",
      "next/no-css-tags": "error",
      "next/no-document-import-in-page": "error",
      "next/no-duplicate-head": "error",
      "next/no-head-element": "error",
      "next/no-head-import-in-document": "error",
      "next/no-html-link-for-pages": "error",
      "next/no-img-element": "error",
      "next/no-page-custom-font": "error",
      "next/no-script-component-in-head": "error",
      "next/no-styled-jsx-in-document": "error",
      "next/no-sync-scripts": "error",
      "next/no-title-in-document-head": "error",
      "next/no-typos": "error",
      "next/no-unwanted-polyfillio": "error",
      // Prettier rules
      "prettier/prettier": "error",
      // Turn off rules that conflict with Prettier
      indent: "off",
      semi: "off",
      quotes: "off",
    },
  },
];
