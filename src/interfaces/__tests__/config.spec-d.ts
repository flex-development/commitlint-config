/**
 * @file Type Tests - Config
 * @module commitlint-config/interfaces/tests/unit-d/Config
 */

import type { ParserPreset } from '#src/types'
import type * as commitlint from '@commitlint/types'
import type TestSubject from '../config'
import type PromptConfig from '../config-prompt'
import type RulesConfig from '../config-rules'

describe('unit-d:interfaces/Config', () => {
  it('should extend Required<Omit<commitlint.UserConfig, "extends">>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<
      Required<Omit<commitlint.UserConfig, 'extends'>>
    >()
  })

  it('should match [formatter: "@commitlint/format"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('formatter')
      .toEqualTypeOf<'@commitlint/format'>()
  })

  it('should match [parserPreset: ParserPreset]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parserPreset')
      .toEqualTypeOf<ParserPreset>()
  })

  it('should match [prompt: PromptConfig]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prompt')
      .toEqualTypeOf<PromptConfig>()
  })

  it('should match [rules: RulesConfig]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rules')
      .toEqualTypeOf<RulesConfig>()
  })
})
