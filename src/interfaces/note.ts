/**
 * @file Interfaces - Note
 * @module commitlint-config/interfaces/Note
 */

import type { NoteKeyword } from '#src/types'

/**
 * Object representing a "BREAKING CHANGE" note.
 */
interface Note {
  /**
   * Note content.
   */
  text: string

  /**
   * Note title.
   */
  title: NoteKeyword
}

export type { Note as default }
