/**
 * @file Custom Matchers - ruleOutcome
 * @module tests/setup/matchers/ruleOutcome
 */

import type { MatcherState, SyncExpectationResult } from '@vitest/expect'
import { get } from 'radash'

/**
 * Expects a commit linting rule to be of a certain severity level.
 *
 * @this {MatcherState}
 *
 * @param {MatcherState} this - Matcher state
 * @param {unknown} received - Received value
 * @param {0 | 1 | 2} level - Expected rule config severity
 * @return {SyncExpectationResult} Expectation result
 */
function level(
  this: MatcherState,
  received: unknown,
  level: 0 | 1 | 2
): SyncExpectationResult {
  /**
   * Constructs an expectation result message.
   *
   * @return {string} Expectation result message
   */
  const message = (): string => {
    return `expected rule to have severity ${level}`
  }

  return Array.isArray(received)
    ? {
        actual: received,
        expected: level,
        message,
        pass: get(received, received.length === 1 ? '0' : '2') === level
      }
    : { actual: received, expected: level, message, pass: false }
}

expect.extend({ level })
