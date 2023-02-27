/**
 * @file Custom Matchers - ruleOutcome
 * @module tests/setup/matchers/ruleOutcome
 */

import type cl from '@commitlint/types'
import type { MatcherState, SyncExpectationResult } from '@vitest/expect'

/**
 * Expects an array of {@linkcode cl.RuleOutcome} objects to include a specific
 * {@linkcode cl.LintRuleOutcome}.
 *
 * @this {MatcherState}
 *
 * @param {MatcherState} this - Matcher state
 * @param {unknown} received - Received value
 * @param {string} name - Name of expected {@linkcode cl.LintRuleOutcome}
 * @param {0 | 1 | 2} level - Expected {@linkcode cl.RuleConfigSeverity}
 * @return {SyncExpectationResult} Expectation result
 */
function ruleOutcome(
  this: MatcherState,
  received: unknown,
  name: string,
  level: 0 | 1 | 2
): SyncExpectationResult {
  /**
   * Constructs an expectation result message.
   *
   * @return {string} Expectation result message
   */
  const message = (): string => {
    /**
     * Stringified version of {@linkcode received}.
     *
     * @const {string} rs
     */
    const rs: string = `${this.utils.printReceived(received)}`

    return `expected ${rs} to have rule outcome "${name}" of severity ${level}`
  }

  /**
   * Expected values.
   *
   * @const {[Pick<cl.LintRuleOutcome, 'name' | 'level'>]} expected
   */
  const expected: [Pick<cl.LintRuleOutcome, 'level' | 'name'>] = [
    { level: level, name }
  ]

  return Array.isArray(received)
    ? {
        actual: received,
        expected,
        message,
        pass: received.find((outcome: cl.LintRuleOutcome): boolean => {
          return outcome.name === name && outcome.level === level
        })
      }
    : { actual: received, expected, message, pass: false }
}

expect.extend({ ruleOutcome })
