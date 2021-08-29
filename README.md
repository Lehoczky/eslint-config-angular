# eslint-config-angular

Strict ESLint configuration for Angular projects.

## Prerequisites

- Angular 12+ project with ESLint [already configured](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-v12-and-later).
- [prettier](https://prettier.io/).

## Install

```console
npm install -D \
  @lehoczky/eslint-config-angular \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-plugin-rxjs \
  eslint-plugin-unicorn
```

## Example

`.eslintrc.json`:

```json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": ["@lehoczky/eslint-config-angular"],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["@lehoczky/eslint-config-angular/template"],
      "rules": {}
    }
  ]
}
```
