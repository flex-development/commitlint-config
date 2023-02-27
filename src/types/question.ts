/**
 * @file Type Definitions - Question
 * @module commitlint-config/types/Question
 */

import type QuestionEnum from './question-enum'

/**
 * Object representing a prompt question.
 *
 * @see https://commitlint.js.org/#/reference-prompt?id=questions
 *
 * @template N - Question enum names
 * @template Q - Question enum type
 */
type Question<
  N extends string = string,
  Q extends QuestionEnum = QuestionEnum
> = {
  /**
   * Question description.
   */
  description: string

  /**
   * Question enums.
   */
  enum?: { [key in N]: Q }

  /**
   * Message hints.
   */
  messages?: { [key in string]: string }
}

export type { Question as default }
