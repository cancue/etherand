module.exports = {
  env: {
    es6: true
  },
  extends: [
    "eslint:recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "operator-linebreak": ["error", "after"],
    "comma-dangle": [
      "error", {
        "arrays": "never",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "never"
      }
    ],
    "semi": [
      "error",
      "never"
    ],
  },
  "globals": {
    "process": true,
    "__dirname": true,
    "console": true
  }
}
