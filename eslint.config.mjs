import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // ignore build output early
  globalIgnores(["dist"]),

  // base JS + TS flat configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    // ✅ flat-config style plugins: object map of id -> plugin object
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    // Pull in the hooks rules from the plugin’s flat preset,
    // and manually add the react-refresh rule you want.
    rules: {
      // from react-hooks 'recommended-latest'
      ...reactHooks.configs["recommended-latest"].rules,

      // equivalent to the vite preset’s core rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]);
