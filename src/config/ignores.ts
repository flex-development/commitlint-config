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
const ignores: ((commit: string) => boolean)[] = []

export default ignores
