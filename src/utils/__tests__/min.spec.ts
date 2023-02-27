/**
 * @file Unit Tests - min
 * @module commitlint-config/utils/tests/unit/min
 */

import { Type } from '#src/enums'
import testSubject from '../min'

describe('unit:utils/min', () => {
  it('should return length of shortest string in given array', () => {
    // Arrange
    const array: Type[] = [Type.BUILD, Type.DOCS, Type.REFACTOR]

    // Act + Expect
    expect(testSubject(array)).to.equal(Type.DOCS.length)
  })
})
