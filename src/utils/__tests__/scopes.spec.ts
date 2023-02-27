/**
 * @file Unit Tests - scopes
 * @module commitlint-config/utils/tests/unit/scopes
 */

import { Scope } from '#src/enums'
import testSubject from '../scopes'

describe('unit:utils/scopes', () => {
  it('should return array containing valid commit scopes', () => {
    // Arrange
    const extras: string[] = ['build', 'bundle', 'transpile']

    // Act + Expect
    expect(testSubject(extras)).to.include.members([
      ...new Set<string>([...Object.values(Scope), ...extras])
    ])
  })
})
