/**
 * @file Unit Tests - config
 * @module commitlint-config/config/tests/unit/config
 */

import TEST_SUBJECT from '../config'
import parserPreset from '../parser-preset'
import prompt from '../prompt'
import rules from '../rules'

describe('unit:config/config', () => {
  describe('defaultIgnores', () => {
    it('should set default ignore rules', () => {
      expect(TEST_SUBJECT.defaultIgnores).to.be.true
    })
  })

  describe('formatter', () => {
    it('should be default report formatter', () => {
      expect(TEST_SUBJECT.formatter).to.equal('@commitlint/format')
    })
  })

  describe('helpUrl', () => {
    it('should be default help URL', () => {
      // Arrange
      const expected: string =
        'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'

      // Act + Expect
      expect(TEST_SUBJECT.helpUrl).to.equal(expected)
    })
  })

  describe('ignores', () => {
    it('should not set additional ignore rules', () => {
      expect(TEST_SUBJECT.ignores).to.be.an('array').of.length(0)
    })
  })

  describe('parserPreset', () => {
    it('should set commit parser preset', () => {
      expect(TEST_SUBJECT)
        .to.have.property('parserPreset')
        .deep.equal(parserPreset)
    })
  })

  describe('plugins', () => {
    it('should not push additional plugins', () => {
      expect(TEST_SUBJECT.plugins).to.be.an('array').of.length(0)
    })
  })

  describe('prompt', () => {
    it('should set prompt configuration', () => {
      expect(TEST_SUBJECT).to.have.property('prompt').deep.equal(prompt)
    })
  })

  describe('rules', () => {
    it('should set commit rules', () => {
      expect(TEST_SUBJECT).to.have.property('rules').deep.equal(rules)
    })
  })
})
