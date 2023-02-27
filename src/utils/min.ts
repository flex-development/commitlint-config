/**
 * @file Utilities - min
 * @module commitlint-config/utils/min
 */

/**
 * Returns the length of the shortest string in the given `array`.
 *
 * @param {string[]} array - Array to evaluate
 * @return {number} Length of shortest string in `array`
 */
const min = (array: string[]): number => {
  return array.reduce((min: number, str: string, index: number): number => {
    return index === 0 || str.length < min ? str.length : min
  }, 0)
}

export default min
