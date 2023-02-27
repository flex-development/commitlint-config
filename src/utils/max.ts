/**
 * @file Utilities - max
 * @module commitlint-config/utils/max
 */

/**
 * Returns the length of the longest string in the given `array`.
 *
 * @param {string[]} array - Array to evaluate
 * @return {number} Length of longest string in `array`
 */
const max = (array: string[]): number => {
  return array.reduce((max: number, str: string): number => {
    return str.length > max ? str.length : max
  }, 0)
}

export default max
