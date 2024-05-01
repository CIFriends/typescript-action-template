module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked", // Enable type checking, max strictness
    "plugin:prettier/recommended" // prettier rules
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },

  plugins: ["@typescript-eslint"],

  root: true,

  ignorePatterns: [
    ".eslintrc.js",
    "*.spec.ts",
    "*.test.ts",
    "dist/",
    "coverage/",
    "lib/"
  ], // ESLINT IGNORE

  env: {
    // ESLINT ENV
    node: true,
    jest: true
  },

  rules: {
    "no-else-return": ["error", { allowElseIf: false }],
    "consistent-return": "error",
    "no-console": "warn",
    "@typescript-eslint/typedef": [
      "error",
      {
        variableDeclaration: true,
        memberVariableDeclaration: true
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "class",
        format: ["PascalCase"]
      }
    ],
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "no-public",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit"
        }
      }
    ]
  }
};
