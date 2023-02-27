/**
 * @file Integration Tests - parserPreset
 * @module commitlint-config/config/tests/integration/parserPreset
 */

import createCommitStream from '#tests/utils/create-commit-stream'
import type { ObjectPlain } from '@flex-development/tutils'
import parser from 'conventional-commits-parser'
import stream from 'node:stream'
import streamToArray from 'stream-to-array'
import testSubject from '../parser-preset'

describe('integration:config/parserPreset', () => {
  describe('conventional-commits-parser', () => {
    let cs: stream.Transform

    beforeEach(() => {
      cs = createCommitStream('ext-regex')
    })

    it('should parse commits', async () => {
      // Arrange
      const data: ObjectPlain[] = []

      // Act
      cs.pipe(parser(testSubject.parserOpts)).on('data', data.push.bind(data))
      await streamToArray(cs)

      // Expect
      expect(data).toMatchSnapshot()
    })
  })
})
