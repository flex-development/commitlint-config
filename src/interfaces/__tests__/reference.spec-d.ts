/**
 * @file Type Tests - Reference
 * @module commitlint-config/interfaces/tests/unit-d/Reference
 */

import type { ReferenceAction } from '#src/enums'
import type { Nullable } from '@flex-development/tutils'
import type TestSubject from '../reference'

describe('unit-d:interfaces/Reference', () => {
  it('should match [action: Nullable<ReferenceAction>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('action')
      .toEqualTypeOf<Nullable<ReferenceAction>>()
  })

  it('should match [issue: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('issue').toBeString()
  })

  it('should match [owner: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('owner')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [prefix: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('prefix').toBeString()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('raw').toBeString()
  })

  it('should match [repository: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('repository')
      .toEqualTypeOf<Nullable<string>>()
  })
})
