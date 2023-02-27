/**
 * @file Type Tests - PromptConfig
 * @module commitlint-config/interfaces/tests/unit-d/PromptConfig
 */

import type { Questions } from '#src/types'
import type * as commitlint from '@commitlint/types'
import type TestSubject from '../config-prompt'

describe('unit-d:interfaces/PromptConfig', () => {
  it('should extend commitlint.PromptConfig', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<commitlint.PromptConfig>()
  })

  it('should match [questions: Questions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('questions')
      .toEqualTypeOf<Questions>()
  })
})
