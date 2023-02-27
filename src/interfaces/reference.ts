/**
 * @file Interfaces - Reference
 * @module commitlint-config/interfaces/Reference
 */

import type { ReferenceAction } from '#src/enums'
import type { Nullable } from '@flex-development/tutils'

/**
 * Object representing a reference action in a commit.
 */
interface Reference {
  /**
   * Reference action, if any.
   */
  action: Nullable<ReferenceAction>

  /**
   * Referenced issue.
   */
  issue: string

  /**
   * Repository owner.
   */
  owner: Nullable<string>

  /**
   * Issue prefix.
   */
  prefix: string

  /**
   * Raw reference from commit.
   */
  raw: string

  /**
   * Name of repository the reference belongs to.
   *
   * If `null`, reference is from `origin`.
   */
  repository: Nullable<string>
}

export type { Reference as default }
