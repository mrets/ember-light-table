'use strict';

module.exports = {
  extends: 'recommended',

  ignore: [
    'dummy/',
    'dummy/**',
    'dummy/templates',
    'dummy/templates/**',
    'app/dummy/templates',
    'app/dummy/templates/**'
  ],

  rules: {
    "no-inline-styles": false,
    "block-indentation": false,
    "no-unused-block-params": false
  }
};
