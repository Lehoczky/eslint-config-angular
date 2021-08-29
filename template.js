module.exports = {
  extends: ["plugin:@angular-eslint/template/recommended"],
  rules: {
    "@angular-eslint/template/accessibility-elements-content": "warn",
    "@angular-eslint/template/accessibility-label-has-associated-control":
      "warn",
    "@angular-eslint/template/accessibility-valid-aria": "warn",
    "@angular-eslint/template/conditional-complexity": [
      "warn",
      { maxComplexity: 3 },
    ],
    "@angular-eslint/template/no-duplicate-attributes": "warn",
  },
};
