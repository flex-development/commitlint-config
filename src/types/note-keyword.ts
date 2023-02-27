/**
 * @file Type Definitions - NoteKeyword
 * @module commitlint-config/types/NoteKeyword
 */

/**
 * Keywords for important notes.
 *
 * @see https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-commits-parser/README.md#notekeywords
 */
type NoteKeyword = 'BREAKING CHANGE' | 'BREAKING-CHANGE'

export type { NoteKeyword as default }
