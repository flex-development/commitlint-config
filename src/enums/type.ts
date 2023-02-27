/**
 * @file Enums - Type
 * @module commitlint-config/enums/Type
 */

/**
 * Commit types.
 *
 * @see https://commitlint.js.org/#/reference-rules?id=type-enum
 *
 * @enum {Lowercase<string>}
 */
enum Type {
  BUILD = 'build',
  CHORE = 'chore',
  CI = 'ci',
  DOCS = 'docs',
  FEAT = 'feat',
  FIX = 'fix',
  PERF = 'perf',
  REFACTOR = 'refactor',
  REVERT = 'revert',
  STYLE = 'style',
  TEST = 'test',
  WIP = 'wip'
}

export default Type
