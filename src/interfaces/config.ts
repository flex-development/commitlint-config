/**
 * @file Interfaces - Config
 * @module commitlint-config/interfaces/Config
 */

import type { ParserPreset } from '#src/types'
import type * as commitlint from '@commitlint/types'
import type PromptConfig from './config-prompt'
import type RulesConfig from './config-rules'

/**
 * Object representing `commitlint` configuration for [Flex Development][1].
 *
 * [1]: https://flexdevelopment.llc
 *
 * @see https://commitlint.js.org/#/reference-configuration
 *
 * @extends {Required<Omit<commitlint.UserConfig,'extends'>>}
 */
interface Config extends Required<Omit<commitlint.UserConfig, 'extends'>> {
  /**
   * Use default ignore rules.
   *
   * @default true
   */
  defaultIgnores: boolean

  /**
   * Report formatter.
   */
  formatter: '@commitlint/format'

  /**
   * URL to show upon failure.
   *
   * @default 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
   */
  helpUrl: string

  /**
   * Functions that return `true` if `commitlint` should ignore the given
   * message.
   *
   * @default []
   */
  ignores: ((commit: string) => boolean)[]

  /**
   * Commit parser preset.
   *
   * @see {@linkcode ParserPreset}
   *
   * @default parserPreset
   */
  parserPreset: ParserPreset

  /**
   * Plugins to apply.
   *
   * @see {@linkcode commitlint.Plugin}
   * @see https://commitlint.js.org/#/reference-plugins
   *
   * @default []
   */
  plugins: (commitlint.Plugin | string)[]

  /**
   * Prompt configuration used by [`@commitlint/cz-commitlint`][1].
   *
   * [1]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/cz-commitlint
   *
   * @see {@linkcode PromptConfig}
   * @see https://commitlint.js.org/#/reference-prompt
   *
   * @default prompt
   */
  prompt: PromptConfig

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
   * @default rules
   */
  rules: RulesConfig
}

export type { Config as default }
