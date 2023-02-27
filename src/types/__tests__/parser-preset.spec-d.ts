/**
 * @file Type Tests - ParserPreset
 * @module commitlint-config/types/tests/unit-d/ParserPreset
 */

import type { ParserOptions } from '#src/interfaces'
import type TestSubject from '../parser-preset'

describe('unit-d:types/ParserPreset', () => {
  it('should match [name: "conventional-changelog-conventionalcommits"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<'conventional-changelog-conventionalcommits'>()
  })

  it('should match [parserOpts: ParserOptions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parserOpts')
      .toEqualTypeOf<ParserOptions>()
  })
})
