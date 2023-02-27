/**
 * @file Interfaces - ParserOptions
 * @module commitlint-config/interfaces/ParserOptions
 */

import type { ReferenceAction } from '#src/enums'
import type { NoteKeyword } from '#src/types'
import type * as parser from 'conventional-commits-parser'

/**
 * Commit parser options.
 *
 * @see https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-commits-parser/README.md#options
 *
 * @extends {Required<parser.Options>}
 */
interface ParserOptions extends Required<parser.Options> {
  commentChar: string
  fieldPattern: RegExp
  headerCorrespondence: string[]
  headerPattern: RegExp
  issuePrefixes: string[]
  issuePrefixesCaseSensitive: boolean
  mergeCorrespondence: null
  mergePattern: null
  noteKeywords: NoteKeyword[]
  referenceActions: ReferenceAction[]
  revertCorrespondence: string[]
  revertPattern: RegExp
  warn: Console['warn']
}

export type { ParserOptions as default }
