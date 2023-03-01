/**
 * @file Config - ignores
 * @module commitlint-config/config/ignores
 */

/**
 * Array of functions that return `true` if `commitlint` should ignore the given
 * `commit` message.
 *
 * @const {((commit: string) => boolean)[]} ignores
 */
const ignores: ((commit: string) => boolean)[] = [
  /**
   * Ignores commits signed off by `dependabot[bot]`.
   *
   * Dependabot commits are formatted in a way that renders their trailers
   * unparsable, and therefore useless. The `'updated-dependencies'` section in
   * these commits makes it so that `git interpret-trailers --parse` yields an
   * empty string. This fails the `trailer-exists` rule because `Signed-off-by`
   * trailers are required.
   *
   * @param {string} commit - Raw commit to evaluate
   * @return {boolean} `true` if `commit` was signed off by `dependabot[bot]`
   */
  (commit: string): boolean => /Signed-off-by: dependabot\[bot]/.test(commit)
]

export default ignores
