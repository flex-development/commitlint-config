/**
 * @file Enums - ReferenceAction
 * @module commitlint-config/enums/ReferenceAction
 */

/**
 * Issue reference action types.
 *
 * @enum {Lowercase<string>}
 */
enum ReferenceAction {
  CLOSE = 'closes',
  FIX = 'fixes',
  RELEASE = 'releases',
  RESOLVE = 'resolves'
}

export default ReferenceAction
