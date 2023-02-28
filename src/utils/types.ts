/**
 * @file Utilities - types
 * @module commitlint-config/utils/types
 */

import { Type } from '#src/enums'
import type { LiteralUnion } from '@flex-development/tutils'

/**
 * Returns an array containing valid commit types.
 *
 * @param {(Set<string> | string[])?} [extras=[]] - Additional commit types
 * @return {LiteralUnion<Type, string>[]} Commit types array
 */
const types = (
  extras: Set<string> | string[] = []
): LiteralUnion<Type, string>[] => {
  return [...new Set([...Object.values(Type), ...extras])].sort((t1, t2) => {
    return t1.localeCompare(t2)
  })
}

export default types
