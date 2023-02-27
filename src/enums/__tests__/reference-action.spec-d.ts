/**
 * @file Type Tests - ReferenceAction
 * @module commitlint-config/enums/tests/unit-d/ReferenceAction
 */

import type TestSubject from '../reference-action'

describe('unit-d:enums/ReferenceAction', () => {
  it('should match [CLOSE = "closes"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CLOSE')
      .toMatchTypeOf<'closes'>()
  })

  it('should match [FIX = "fixes"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FIX')
      .toMatchTypeOf<'fixes'>()
  })

  it('should match [RELEASE = "releases"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RELEASE')
      .toMatchTypeOf<'releases'>()
  })

  it('should match [RESOLVE = "resolves"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RESOLVE')
      .toMatchTypeOf<'resolves'>()
  })
})
