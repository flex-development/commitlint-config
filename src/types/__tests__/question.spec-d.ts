/**
 * @file Type Tests - Question
 * @module commitlint-config/types/tests/unit-d/Question
 */

import type TestSubject from '../question'
import type QuestionEnum from '../question-enum'

describe('unit-d:types/Question', () => {
  it('should match [description: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('description').toBeString()
  })

  it('should match [enum?: { [key in N]: Q }]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enum')
      .toEqualTypeOf<{ [key in string]: QuestionEnum } | undefined>()
  })

  it('should match [messages?: { [key in string]: string }]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('messages')
      .toEqualTypeOf<{ [key in string]: string } | undefined>()
  })
})
