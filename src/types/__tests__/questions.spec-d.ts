/**
 * @file Type Tests - Questions
 * @module commitlint-config/types/tests/unit-d/Questions
 */

import { PromptKind, Scope, Type } from '#src/enums'
import type Question from '../question'
import type QuestionEnum from '../question-enum'
import type TestSubject from '../questions'

describe('unit-d:types/Questions', () => {
  it('should extend Record<PromptKind, Question>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<PromptKind, Question>>()
  })

  it('should match [PromptKind.SCOPE: Question<Scope>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(PromptKind.SCOPE)
      .toEqualTypeOf<Question<Scope>>()
  })

  it('should match [PromptKind.TYPE: Question<Type, Required<QuestionEnum>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(PromptKind.TYPE)
      .toEqualTypeOf<Question<Type, Required<QuestionEnum>>>()
  })
})
