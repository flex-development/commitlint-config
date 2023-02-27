/**
 * @file Interfaces - PromptConfig
 * @module commitlint-config/interfaces/PromptConfig
 */

import type { Questions } from '#src/types'
import type * as commitlint from '@commitlint/types'

/**
 * Object representing prompt configuration used by `@commitlint/cz-commitlint`.
 *
 * @see https://commitlint.js.org/#/reference-prompt
 * @see https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/cz-commitlint
 *
 * @extends {commitlint.PromptConfig}
 */
interface PromptConfig extends commitlint.PromptConfig {
  /**
   * Message hints.
   *
   * @see https://commitlint.js.org/#/reference-prompt?id=messages
   */
  messages: commitlint.PromptConfig['messages']

  /**
   * Interactive steps.
   *
   * @see https://commitlint.js.org/#/reference-prompt?id=questions
   */
  questions: Questions

  /**
   * Additional prompt settings.
   *
   * @see https://commitlint.js.org/#/reference-prompt?id=settings
   */
  settings: commitlint.PromptConfig['settings']
}

export type { PromptConfig as default }
