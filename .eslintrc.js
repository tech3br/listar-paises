module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "import", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: ["ts", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
  extends: {
    plugin: "import/typescript",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: ["ts", "tsx", "js", "json", "jsx", "node"],
        moduleDirectory: ["node_modules", "src/"],
      },
      webpack: {
        resolve: { modules: ["node_modules"] },
      },
    },
  },
};
