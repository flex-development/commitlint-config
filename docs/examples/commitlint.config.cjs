/**
 * @file Examples - commitlint.config.cjs
 * @module docs/examples/config/cjs
 * @see https://commitlint.js.org
 */

const { RuleConfigSeverity: Severity } = require('@commitlint/types')
const { scopes } = require('@flex-development/commitlint-config')

/**
 * `commitlint` configuration object.
 *
 * @type {import('@commitlint/types').UserConfig}
 * @const config
 */
const config = {
  extends: ['@flex-development'],
  rules: {
    'scope-enum': [Severity.Error, 'always', scopes(['bundle', 'transpile'])]
  }
}

module.exports = config
