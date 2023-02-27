/**
 * @file Type Definitions - Questions
 * @module commitlint-config/types/Questions
 */

import type { PromptKind, Scope, Type } from '#src/enums'
import type { Overwrite } from '@flex-development/tutils'
import type Question from './question'
import type QuestionEnum from './question-enum'

/**
 * Prompt questions.
 *
 * @see https://commitlint.js.org/#/reference-prompt?id=questions
 *
 * @extends {Record<PromptKind,Question>}
 */
type Questions = Overwrite<
  Record<PromptKind, Question>,
  {
    /**
     * Commit scope questions configuration.
     */
    [PromptKind.SCOPE]: Question<Scope>

    /**
     * Commit type questions configuration.
     */
    [PromptKind.TYPE]: Question<Type, Required<QuestionEnum>>
  }
>

export type { Questions as default }
