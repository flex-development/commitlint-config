/**
 * @file Type Tests - ParserOptions
 * @module commitlint-config/interfaces/tests/unit-d/ParserOptions
 */

import type { ReferenceAction } from '#src/enums'
import type { NoteKeyword } from '#src/types'
import type * as parser from 'conventional-commits-parser'
import type TestSubject from '../options-parser'

describe('unit-d:interfaces/ParserOptions', () => {
  it('should extend Required<parser.Options>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Required<parser.Options>>()
  })

  it('should match [commentChar: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('commentChar').toBeString()
  })

  it('should match [fieldPattern: RegExp]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fieldPattern')
      .toEqualTypeOf<RegExp>()
  })

  it('should match [headerCorrespondence: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('headerCorrespondence')
      .toEqualTypeOf<string[]>()
  })

  it('should match [headerPattern: RegExp]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('headerPattern')
      .toEqualTypeOf<RegExp>()
  })

  it('should match [issuePrefixes: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('issuePrefixes')
      .toEqualTypeOf<string[]>()
  })

  it('should match [issuePrefixesCaseSensitive: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('issuePrefixesCaseSensitive')
      .toBeBoolean()
  })

  it('should match [mergeCorrespondence: null]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('mergeCorrespondence').toBeNull()
  })

  it('should match [mergePattern: null]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('mergePattern').toBeNull()
  })

  it('should match [noteKeywords: NoteKeyword[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noteKeywords')
      .toEqualTypeOf<NoteKeyword[]>()
  })

  it('should match [referenceActions: ReferenceAction[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('referenceActions')
      .toEqualTypeOf<ReferenceAction[]>()
  })

  it('should match [revertCorrespondence: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('revertCorrespondence')
      .toEqualTypeOf<string[]>()
  })

  it('should match [revertPattern: RegExp]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('revertPattern')
      .toEqualTypeOf<RegExp>()
  })

  it('should match [warn: Console["warn"]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('warn')
      .toEqualTypeOf<Console['warn']>()
  })
})
