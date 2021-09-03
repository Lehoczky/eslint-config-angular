module.exports = {
  plugins: [
    "unicorn",
    "jsdoc",
    "import",
    "rxjs",
    "simple-import-sort",
    "sonarjs",
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "prettier",
  ],
  rules: {
    // Possible Errors
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-promise-executor-return": "error",
    "no-unsafe-optional-chaining": "error",

    // Best Practices
    "array-callback-return": "error",
    complexity: ["error", { max: 15 }],
    "default-case-last": "error",
    eqeqeq: "error",
    "no-alert": "error",
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    yoda: "error",

    // Stylistic Issues
    "max-depth": ["error", { max: 5 }],
    "no-negated-condition": "error",
    "no-unneeded-ternary": "error",

    // ECMAScript 6
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",

    // TypeScript
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/ban-tslint-comment": "warn",
    "@typescript-eslint/class-literal-property-style": ["warn", "fields"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        accessibility: "no-public",
      },
    ],
    camelcase: "error",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-return-this-type": "warn",
    "@typescript-eslint/promise-function-async": [
      "warn",
      { checkArrowFunctions: false },
    ],

    // Turned off
    "@typescript-eslint/consistent-type-imports": "off", // Don't work with angular DI
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-extraneous-class": "off", // Does not work with NGXS

    // Conflicts with ESLint
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "warn",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "warn",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": ["error"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],

    // Conflicts with unicorn
    "unicorn/no-for-loop": "off",
    "@typescript-eslint/prefer-for-of": "warn",
    "unicorn/prefer-includes": "off",
    "@typescript-eslint/prefer-includes": "warn",
    "unicorn/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",

    // Unicorn
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-destructuring": "warn",
    "unicorn/error-message": "warn",
    "unicorn/no-array-method-this-argument": "warn",
    "unicorn/no-array-push-push": "warn",
    "unicorn/no-array-reduce": "warn",
    "unicorn/no-instanceof-array": "warn",
    "unicorn/no-object-as-default-parameter": "warn",
    "unicorn/no-unreadable-array-destructuring": "warn",
    "unicorn/no-useless-spread": "warn",
    "unicorn/prefer-array-find": "warn", // might have false-positives
    "unicorn/prefer-array-flat": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-array-index-of": "warn",
    "unicorn/prefer-array-some": "warn", // might have false-positives
    "unicorn/prefer-date-now": "warn",
    "unicorn/prefer-default-parameters": "warn",
    "unicorn/prefer-spread": "warn",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        allowList: {
          db: true,
          docs: true,
          i: true,
          j: true,
          param: true,
          params: true,
          prod: true,
          prop: true,
          props: true,
          ref: true,
          refs: true,
          req: true,
          res: true,
          src: true,
          temp: true,
        },
      },
    ],

    // JSdoc
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-param-names": "warn",
    "jsdoc/check-property-names": "warn",
    "jsdoc/newline-after-description": "warn",
    "jsdoc/no-defaults": "warn",
    "jsdoc/no-types": "warn",

    // Import
    "import/no-useless-path-segments": "warn",
    "import/first": "warn",
    "import/no-duplicates": "warn",
    "import/newline-after-import": "warn",

    // Simple import sort
    "simple-import-sort/imports": "error",

    // SonarJS
    "sonarjs/no-all-duplicated-branches": "warn",
    "sonarjs/no-element-overwrite": "warn",
    "sonarjs/no-identical-conditions": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/no-useless-catch": "warn",
    "sonarjs/prefer-single-boolean-return": "warn",

    // RXjs
    "rxjs/finnish": [
      "error",
      {
        functions: true,
        methods: true,
        names: {
          "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false,
        },
        parameters: true,
        properties: true,
        strict: false,
        types: {
          "^EventEmitter$": false,
        },
        variables: true,
      },
    ],
    "rxjs/no-async-subscribe": "warn",
    "rxjs/no-exposed-subjects": ["error", { allowProtected: true }],
    "rxjs/no-ignored-takewhile-value": "warn",
    "rxjs/no-nested-subscribe": "warn",
    "rxjs/no-subject-unsubscribe": "warn",
    "rxjs/no-topromise": "warn",
    "rxjs/no-unbound-methods": "warn",
    "rxjs/no-unsafe-switchmap": "warn",
    "rxjs/no-unsafe-takeuntil": "warn",
    "rxjs/suffix-subjects": [
      "error",
      {
        parameters: true,
        properties: true,
        suffix: "Subject",
        types: {
          "^EventEmitter$": false,
        },
        variables: true,
      },
    ],

    // Angular
    "@angular-eslint/contextual-decorator": "warn",
    "@angular-eslint/directive-selector": "off",
    "@angular-eslint/no-forward-ref": "warn",
    "@angular-eslint/no-lifecycle-call": "warn",
    "@angular-eslint/no-pipe-impure": "warn",
    "@angular-eslint/sort-ngmodule-metadata-arrays": "warn",
    "@angular-eslint/use-component-view-encapsulation": "warn",
  },
};
