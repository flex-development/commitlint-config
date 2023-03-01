/**
 * @file Config - rules
 * @module commitlint-config/config/rules
 */

import type { RulesConfig } from '#src/interfaces'
import { max, min, scopes, types } from '#src/utils'
import { RuleConfigSeverity as Severity } from '@commitlint/types'

/**
 * Commit rules.
 *
 * Enforces [conventional commits][1].
 *
 * [1]: https://www.conventionalcommits.org
 *
 * @see {@linkcode RulesConfig}
 * @see https://commitlint.js.org/#/reference-rules
 *
 * @const {RulesConfig} rules
 */
const rules: RulesConfig = {
  'body-case': [Severity.Disabled],
  'body-empty': [Severity.Disabled],
  'body-full-stop': [Severity.Error, 'never', '.'],
  'body-leading-blank': [Severity.Error, 'always'],
  'body-max-length': [Severity.Error, 'always', Number.MAX_SAFE_INTEGER],
  'body-max-line-length': [Severity.Error, 'always', 2050],
  'body-min-length': [Severity.Disabled],
  'footer-empty': [Severity.Disabled],
  'footer-leading-blank': [Severity.Error, 'always'],
  'footer-max-length': [Severity.Error, 'always', Number.MAX_SAFE_INTEGER],
  'footer-max-line-length': [Severity.Error, 'always', 2050],
  'footer-min-length': [Severity.Disabled],
  'header-case': [Severity.Disabled],
  'header-full-stop': [Severity.Error, 'never', '.'],
  'header-max-length': [Severity.Error, 'always', 100],
  'header-min-length': [Severity.Disabled],
  'references-empty': [Severity.Disabled],
  'scope-case': [Severity.Error, 'always', ['kebab-case', 'lower-case']],
  'scope-empty': [Severity.Disabled],
  'scope-enum': [Severity.Error, 'always', scopes()],
  'scope-max-length': [Severity.Error, 'always', max(scopes())],
  'scope-min-length': [Severity.Error, 'always', min(scopes())],
  'signed-off-by': [Severity.Disabled],
  'subject-case': [Severity.Disabled],
  'subject-empty': [Severity.Error, 'never'],
  'subject-exclamation-mark': [Severity.Disabled],
  'subject-full-stop': [Severity.Error, 'never', '.'],
  'subject-max-length': [Severity.Disabled],
  'subject-min-length': [Severity.Error, 'always', 2],
  'trailer-exists': [Severity.Error, 'always', 'Signed-off-by:'],
  'type-case': [Severity.Error, 'always', ['lower-case']],
  'type-empty': [Severity.Error, 'never'],
  'type-enum': [Severity.Error, 'always', types()],
  'type-max-length': [Severity.Error, 'always', max(types())],
  'type-min-length': [Severity.Error, 'always', min(types())]
}

export default rules
