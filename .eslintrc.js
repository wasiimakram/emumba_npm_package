module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "airbnb",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:jsx-a11y/strict",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:import/typescript",
    // prettier will through error
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react", "jsx-a11y", "import", "@typescript-eslint"],
  rules: {
    // G E N E R A L
    "import/extensions": "off", // Disable Import Extention Check
    yoda: "error",
    quotes: ["error", "double", { avoidEscape: true }],
    "no-empty-function": "error",
    "no-duplicate-imports": "error",
    "no-lone-blocks": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-script-url": "error",
    "default-case": "error",
    "dot-notation": "error",
    "no-useless-concat": "error",
    "no-unneeded-ternary": "error",
    "one-var": ["error", "never"],
    "no-template-curly-in-string": "error",
    "prefer-template": "error",
    // 'import/no-cycle': 'error',
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    // T Y P E S C R I P T
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "local",
        varsIgnorePattern: "^(React|e|i|it|expect)$",
        argsIgnorePattern: "^(props|error|reject|response)$",
      },
    ],
 
    // R E A C T
    // "react/jsx-no-literals": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "jsx-a11y/label-has-for": "off",
    // I M P O R T
    "import/newline-after-import": ["warn", { count: 1 }],
    "import/no-cycle": "error",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
          {
            pattern: "src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    // Disable Import Extention Check
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
