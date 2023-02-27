/**
 * @file Interfaces - Commit
 * @module commitlint-config/interfaces/Commit
 */

import type { Scope, Type } from '#src/enums'
import type {
  LiteralUnion,
  Nullable,
  OneOrMany
} from '@flex-development/tutils'
import type Note from './note'
import type Reference from './reference'
import type Revert from './revert'

/**
 * Object representing a parsed commit.
 */
interface Commit {
  [field: string]: Note[] | Nullable<OneOrMany<string>> | Reference[] | Revert

  /**
   * Commit body text.
   *
   * @see https://commitlint.js.org/#/concepts-commit-conventions
   */
  body: Nullable<string>

  /**
   * Breaking change indicator.
   */
  breaking: Nullable<'!'>

  /**
   * Commit date in ISO 8601-like format (`%ci`).
   *
   * @see https://git-scm.com/docs/pretty-formats/2.21.0
   */
  committerDate: string

  /**
   * Commit footer text.
   *
   * @see https://commitlint.js.org/#/concepts-commit-conventions
   */
  footer: Nullable<string>

  /**
   * Tags associated with commit.
   */
  gitTags: string

  /**
   * Commit SHA.
   */
  hash: string

  /**
   * Commit {@linkcode type}, {@linkcode scope}, {@linkcode breaking} change
   * indicator (if any), and {@linkcode subject}.
   */
  header: string

  /**
   * Users and/or organizations mentioned in commit.
   */
  mentions: string[]

  /**
   * Merge commit data.
   */
  merge: null

  /**
   * Breaking change notes.
   */
  notes: Note[]

  /**
   * Pull request number if commit {@linkcode subject} includes pull request
   * reference.
   */
  pr: Nullable<string>

  /**
   * Reference actions parsed from commit.
   */
  references: Reference[]

  /**
   * Reverted commit metadata if {@linkcode type} is {@linkcode Type.REVERT}.
   */
  revert: Nullable<Revert>

  /**
   * Commit scope.
   *
   * @see https://commitlint.js.org/#/concepts-commit-conventions
   */
  scope: Nullable<LiteralUnion<Scope, string>>

  /**
   * Abbreviated commit SHA.
   */
  shortHash: Nullable<string>

  /**
   * Commit subject.
   *
   * @see https://commitlint.js.org/#/concepts-commit-conventions
   */
  subject: string

  /**
   * Commit type.
   *
   * @see https://commitlint.js.org/#/concepts-commit-conventions
   */
  type: LiteralUnion<Type, string>
}

export type { Commit as default }
