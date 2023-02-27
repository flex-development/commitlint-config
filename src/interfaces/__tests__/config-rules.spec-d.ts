/**
 * @file Type Tests - RulesConfig
 * @module commitlint-config/interfaces/tests/unit-d/RulesConfig
 */

import type * as commitlint from '@commitlint/types'
import type TestSubject from '../config-rules'

describe('unit-d:interfaces/RulesConfig', () => {
  it('should extend Required<commitlint.RulesConfig<commitlint.RuleConfigQuality.Qualified>>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<
      Required<commitlint.RulesConfig<commitlint.RuleConfigQuality.Qualified>>
    >()
  })
})
