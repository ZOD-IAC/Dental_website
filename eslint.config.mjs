export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-unreachable": "error",
      "no-duplicate-case": "error",
      "no-constant-condition": "error",
      "constructor-super": "error",
    },
  },
  { ignores: [".next/**", "node_modules/**"] },
];
