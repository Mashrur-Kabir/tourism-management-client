module.exports = {
    root: true, // Ensures ESLint uses this config as the root
    env: {
      browser: true, // Enables browser globals like window and document
      es2021: true, // Allows modern JavaScript features
      node: true, // Enables Node.js global variables and scope
    },
    parser: "@babel/eslint-parser", // Optional: use Babel parser for modern syntax
    parserOptions: {
      ecmaVersion: "latest", // Supports the latest ECMAScript features
      sourceType: "module", // Allows ES modules
      ecmaFeatures: {
        jsx: true, // Enables JSX parsing
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    plugins: ["react", "react-hooks", "jsx-a11y"], // Plugins for React and accessibility
    extends: [
      "eslint:recommended", // ESLint's recommended rules
      "plugin:react/recommended", // React-specific linting rules
      "plugin:react-hooks/recommended", // Rules for hooks
      "plugin:jsx-a11y/recommended", // Accessibility rules
      "prettier", // Disables rules that conflict with Prettier
    ],
    rules: {
      // Customize your rules here
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Turn off prop-types if using TypeScript
      "jsx-a11y/anchor-is-valid": "warn", // Warn about invalid anchor tags
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused vars with underscore
      "prettier/prettier": ["warn"], // Warn about Prettier formatting issues
    },
    ignorePatterns: ["node_modules/", "build/"], // Ignore these folders
  };
  