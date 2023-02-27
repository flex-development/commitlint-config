/**
 * @file Interfaces - Revert
 * @module commitlint-config/interfaces/Revert
 */

import type { Scope, Type } from '#src/enums'
import type { LiteralUnion, Nullable } from '@flex-development/tutils'

/**
 * Object representing data extracted from a reverted commit.
 *
 * @see https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#commit-shas
 */
interface Revert {
  [field: string]: Nullable<string>

  /**
   * Breaking change indicator.
   */
  breaking: Nullable<'!'>

  /**
   * Reverted commit SHA.
   */
  hash: string

  /**
   * Name of {@linkcode repository} owner.
   */
  owner: Nullable<string>

  /**
   * Name of repository in reverted commit reference.
   */
  repository: Nullable<string>

  /**
   * Commit scope.
   */
  scope: Nullable<LiteralUnion<Scope, string>>

  /**
   * Commit subject.
   */
  subject: string

  /**
   * Commit type.
   */
  type: Type.REVERT

  /**
   * User named in reverted commit reference.
   */
  user: Nullable<string>
}

export type { Revert as default }
