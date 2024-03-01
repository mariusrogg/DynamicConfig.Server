module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: ["jsdoc"],
  extends: ["plugin:jsdoc/recommended-typescript-error"],
  rules: {
    "jsdoc/require-jsdoc": [
      "error",
      {
        contexts: [
          "ClassDeclaration",
          "ClassProperty",
          "FunctionDeclaration",
          "MethodDefinition",
          "TSInterfaceDeclaration",
        ],
      },
    ],
    "jsdoc/require-description": [
      "error",
      {
        contexts: [
          "ClassDeclaration",
          "ClassProperty",
          "FunctionDeclaration",
          "MethodDefinition",
          "TSInterfaceDeclaration",
        ],
      },
    ],
    "jsdoc/require-returns": [
      "error",
      {
        contexts: ["FunctionDeclaration", "MethodDefinition"],
      },
    ],
    "jsdoc/require-returns-check": ["error"],
    "jsdoc/require-returns-description": [
      "error",
      {
        contexts: ["FunctionDeclaration", "MethodDefinition"],
      },
    ],
  },
};
