/**
 * @file Type Tests - Note
 * @module commitlint-config/interfaces/tests/unit-d/Note
 */

import type { NoteKeyword } from '#src/types'
import type TestSubject from '../note'

describe('unit-d:interfaces/Note', () => {
  it('should match [text: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('text').toBeString()
  })

  it('should match [title: NoteKeyword]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('title')
      .toEqualTypeOf<NoteKeyword>()
  })
})
