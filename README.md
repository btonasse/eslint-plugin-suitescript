# eslint-plugin-suitescript

NetSuite SuiteScript v1/v2 linting rules for ESLint. This is a fork of the [original repo](https://github.com/acdvs/eslint-plugin-suitescript) of Adam Davies, which doesn't seem to be maintained anymore.

This fork uses the newer flat file configuration files instead of `eslintrc`.

## Installation

Installation per project is highly recommended:

```sh
$ npm i -D eslint eslint-plugin-suitescript
```

## Configuration

Add "suitescript" to the plugins section of your ESLint config file.

```json
"plugins": ["suitescript"]
```

Enable the rules that you would like to use.

```json
"rules": {
  "suitescript/script-type": "error",
  "suitescript/no-log-module": "error",
}
```

Or use a predefined setting for quick setup (choose one).

```js
import suitescript from @btonasse/eslint-plugin-suitescript


export default [
  suitescript.configs.suitescript1, // Add support for global nlapi functions
  suitescript.configs.suitescript2, // Add support for SS2 globals (define, require, log, util)
  ...suitescript.configs.all  // All available rules
]
```

## List of supported rules

- [suitescript/api-version](docs/rules/api-version.md): Enforces valid `@NApiVersion` tag values
- [suitescript/entry-points](docs/rules/entry-points.md): Enforces inclusion of at least one entry point based on `@NScriptType`
- [suitescript/log-args](docs/rules/log-args.md): Enforces correct log arguments
- [suitescript/module-vars](docs/rules/module-vars.md): Enforces correct module identifiers for each configured module
- [suitescript/no-amd-name](docs/rules/no-amd-name.md): Restricts naming of AMD modules
- [suitescript/no-extra-modules](docs/rules/no-extra-modules.md): Enforces equal number of module literals and identifiers
- [suitescript/no-invalid-modules](docs/rules/no-invalid-modules.md): Enforces valid SuiteScript modules in `define` array
- [suitescript/no-log-module](docs/rules/no-log-module.md): Restricts loading of the N/log module in favor of global `log`
- [suitescript/no-module-extensions](docs/rules/no-module-extensions.md): Restricts filename extensions on module dependencies
- [suitescript/script-type](docs/rules/script-type.md): Enforces valid `@NScriptType` tag values

## License

eslint-plugin-suitescript is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
