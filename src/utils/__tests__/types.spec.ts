/**
 * @file Unit Tests - types
 * @module commitlint-config/utils/tests/unit/types
 */

import { Type } from '#src/enums'
import testSubject from '../types'

describe('unit:utils/types', () => {
  it('should return array containing valid commit types', () => {
    // Arrange
    const extras: string[] = ['release', 'wip']

    // Act + Expect
    expect(testSubject(extras)).to.include.members([
      ...new Set<string>([...Object.values(Type), ...extras])
    ])
  })
})
