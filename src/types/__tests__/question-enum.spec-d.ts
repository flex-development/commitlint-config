/**
 * @file Type Tests - QuestionEnum
 * @module commitlint-config/types/tests/unit-d/QuestionEnum
 */

import type TestSubject from '../question-enum'

describe('unit-d:types/QuestionEnum', () => {
  it('should match [description?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('description')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [emoji?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emoji')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [title?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('title')
      .toEqualTypeOf<string | undefined>()
  })
})
