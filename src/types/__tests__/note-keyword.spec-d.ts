/**
 * @file Type Tests - NoteKeyword
 * @module commitlint-config/types/tests/unit-d/NoteKeyword
 */

import type TestSubject from '../note-keyword'

describe('unit-d:types/NoteKeyword', () => {
  it('should extract "BREAKING-CHANGE"', () => {
    expectTypeOf<TestSubject>().extract('BREAKING-CHANGE').toBeString()
  })
})
