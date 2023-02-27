/**
 * @file Unit Tests - max
 * @module commitlint-config/utils/tests/unit/max
 */

import { Scope } from '#src/enums'
import testSubject from '../max'

describe('unit:utils/max', () => {
  it('should return length of longest string in given array', () => {
    // Arrange
    const array: Scope[] = [Scope.BUILD, Scope.COMPONENTS, Scope.YARN]

    // Act + Expect
    expect(testSubject(array)).to.equal(Scope.COMPONENTS.length)
  })
})
