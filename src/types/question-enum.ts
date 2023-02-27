/**
 * @file Type Definitions - QuestionEnum
 * @module commitlint-config/types/QuestionEnum
 */

/**
 * Object representing prompt question metadata.
 *
 * @see https://commitlint.js.org/#/reference-prompt?id=questions
 */
type QuestionEnum = {
  /**
   * Enum description.
   */
  description?: string

  /**
   * Emoji to display next to {@linkcode title}.
   */
  emoji?: string

  /**
   * Prompt title.
   */
  title?: string
}

export type { QuestionEnum as default }
