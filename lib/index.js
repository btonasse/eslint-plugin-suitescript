'use strict';

const { MODULES } = require('./util/modules');

const allRules = {
  'script-type': require('./rules/script-type'),
  'api-version': require('./rules/api-version'),
  'no-invalid-modules': require('./rules/no-invalid-modules'),
  'no-extra-modules': require('./rules/no-extra-modules'),
  'no-log-module': require('./rules/no-log-module'),
  'log-args': require('./rules/log-args'),
  'module-vars': require('./rules/module-vars'),
  'no-amd-name': require('./rules/no-amd-name'),
  'entry-points': require('./rules/entry-points'),
  'no-module-extensions': require('./rules/no-module-extensions'),
};

const plugin = {
  meta: { name: 'suitescript' },
  configs: {},
  rules: allRules,
  processors: {},
};

const configBase = {
  plugins: { suitescript: plugin },
};

Object.assign(plugin.configs, {
  all: [
    configBase,
    {
      rules: {
        'suitescript/api-version': 'error',
        'suitescript/entry-points': 'error',
        'suitescript/log-args': 'error',
        'suitescript/module-vars': ['error', MODULES],
        'suitescript/no-amd-name': 'error',
        'suitescript/no-extra-modules': 'error',
        'suitescript/no-invalid-modules': 'error',
        'suitescript/no-log-module': 'error',
        'suitescript/no-module-extensions': 'error',
        'suitescript/script-type': 'error',
      },
    },
  ],
  recommended: [
    configBase,
    {
      rules: {
        'suitescript/api-version': 'error',
        'suitescript/entry-points': 'error',
        'suitescript/log-args': 'error',
        'suitescript/module-vars': ['error', MODULES],
        'suitescript/no-amd-name': 'error',
        'suitescript/no-extra-modules': 'error',
        'suitescript/no-invalid-modules': 'error',
        'suitescript/no-log-module': 'error',
        'suitescript/no-module-extensions': 'error',
        'suitescript/script-type': 'error',
      },
    },
  ],
  suitescript1: require('./environments').suitescript1,
  suitescript2: require('./environments').suitescript2,
});

module.exports = plugin;
