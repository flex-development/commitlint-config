/**
 * @file Test Utilities - signoff
 * @module tests/utils/signoff
 */

import SIGNED_OFF_BY from '#fixtures/signed-off-by'

/**
 * Adds a `Signed-off-by` trailer to the given `commit` message.
 *
 * @param {string} commit - Commit to sign
 * @param {number?} [lines=1] - Number of leading blank lines
 * @return {string} `commit` with `Signed-off-by` trailer
 */
const signoff = (commit: string, lines: number = 1): string => {
  return commit + `\n${'\n'.repeat(lines)}${SIGNED_OFF_BY}`
}

export default signoff
