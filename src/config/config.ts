/**
 * @file Config - config
 * @module commitlint-config/config/config
 */

import type { Config } from '#src/interfaces'
import defaultIgnores from './default-ignores'
import formatter from './formatter'
import helpUrl from './help-url'
import ignores from './ignores'
import parserPreset from './parser-preset'
import plugins from './plugins'
import prompt from './prompt'
import rules from './rules'

/**
 * `commitlint` configuration object.
 *
 * @see https://commitlint.js.org/#/reference-configuration
 *
 * @const {Config} config
 */
const config: Config = {
  defaultIgnores,
  formatter,
  helpUrl,
  ignores,
  parserPreset,
  plugins,
  prompt,
  rules
}

export default config
