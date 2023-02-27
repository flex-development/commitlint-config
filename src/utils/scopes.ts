/**
 * @file Utilities - scopes
 * @module commitlint-config/utils/scopes
 */

import { Scope } from '#src/enums'
import type { LiteralUnion } from '@flex-development/tutils'

/**
 * Returns an array of valid commit scopes.
 *
 * @param {(Set<string> | string[])?} [extras=[]] - Additional commit scopes
 * @return {LiteralUnion<Scope, string>[]} Commit scopes array
 */
const scopes = (
  extras: Set<string> | string[] = []
): LiteralUnion<Scope, string>[] => {
  return [...new Set([...Object.values(Scope), ...extras])].sort((s1, s2) => {
    return s1.localeCompare(s2)
  })
}

export default scopes
