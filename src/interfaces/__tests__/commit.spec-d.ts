/**
 * @file Type Tests - Commit
 * @module commitlint-config/interfaces/tests/unit-d/Commit
 */

import type { Scope, Type } from '#src/enums'
import type { LiteralUnion, Nullable } from '@flex-development/tutils'
import type TestSubject from '../commit'
import type Note from '../note'
import type Reference from '../reference'
import type Revert from '../revert'

describe('unit-d:interfaces/Commit', () => {
  it('should match [body: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('body')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [breaking: Nullable<"!">]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('breaking')
      .toEqualTypeOf<Nullable<'!'>>()
  })

  it('should match [committerDate: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('committerDate').toBeString()
  })

  it('should match [footer: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('footer')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [gitTags: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('gitTags').toBeString()
  })

  it('should match [hash: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('hash').toBeString()
  })

  it('should match [header: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('header').toBeString()
  })

  it('should match [mentions: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mentions')
      .toEqualTypeOf<string[]>()
  })

  it('should match [merge: null]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('merge').toBeNull()
  })

  it('should match [notes: Note[]]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('notes').toEqualTypeOf<Note[]>()
  })

  it('should match [pr: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pr')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [references: Reference[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('references')
      .toEqualTypeOf<Reference[]>()
  })

  it('should match [revert: Nullable<Revert>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('revert')
      .toEqualTypeOf<Nullable<Revert>>()
  })

  it('should match [scope: Nullable<LiteralUnion<Scope, string>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('scope')
      .toEqualTypeOf<Nullable<LiteralUnion<Scope, string>>>()
  })

  it('should match [shortHash: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('shortHash')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [subject: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('subject').toBeString()
  })

  it('should match [type: LiteralUnion<Type, string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<LiteralUnion<Type, string>>()
  })
})
