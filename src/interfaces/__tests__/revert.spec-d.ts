/**
 * @file Type Tests - Revert
 * @module commitlint-config/interfaces/tests/unit-d/Revert
 */

import type { Scope, Type } from '#src/enums'
import type { LiteralUnion, Nullable } from '@flex-development/tutils'
import type TestSubject from '../revert'

describe('unit-d:interfaces/Revert', () => {
  it('should match [breaking: Nullable<"!">]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('breaking')
      .toEqualTypeOf<Nullable<'!'>>()
  })

  it('should match [hash: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('hash').toBeString()
  })

  it('should match [owner: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('owner')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [repository: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('repository')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [scope: Nullable<LiteralUnion<Scope, string>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('scope')
      .toEqualTypeOf<Nullable<LiteralUnion<Scope, string>>>()
  })

  it('should match [type: Type.REVERT]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type.REVERT>()
  })

  it('should match [user: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('user')
      .toEqualTypeOf<Nullable<string>>()
  })
})
