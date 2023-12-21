module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:astro/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  plugins: ["@typescript-eslint", "react", "tailwindcss", "filenames"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["public", "dist", "node_modules"],
  rules: {
    "tailwindcss/classnames-order": "error",
    "filenames/match-regex": ["error", "^[a-z0-9]+(-[a-z0-9]+)*(.test|.mock|.config|.d)?$"],
    "@typescript-eslint/no-non-null-assertion": "warn",
  },
};
