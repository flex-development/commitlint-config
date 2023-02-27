/**
 * @file Integration Tests - rules
 * @module commitlint-config/config/tests/integration/rules
 */

import signoff from '#tests/utils/signoff'
import lint from '@commitlint/lint'
import {
  RuleConfigSeverity as Severity,
  type LintOutcome
} from '@commitlint/types'
import parserPreset from '../parser-preset'
import testSubject from '../rules'

describe('integration:config/rules', () => {
  let linter: (commit: string) => Promise<LintOutcome>

  beforeAll(() => {
    /**
     * Lints the given `commit` message.
     *
     * @async
     *
     * @param {string} commit - Commit message to lint
     * @return {Promise<LintOutcome>} Lint result
     */
    linter = async (commit: string): Promise<LintOutcome> => {
      // @ts-expect-error ts(2322)
      return lint(commit, testSubject, { parserOpts: parserPreset.parserOpts })
    }
  })

  describe('@commitlint/lint', () => {
    describe('body-case', () => {
      it('should be disabled', () => {
        expect(testSubject['body-case']).to.be.level(Severity.Disabled)
      })
    })

    describe('body-empty', () => {
      it('should be disabled', () => {
        expect(testSubject['body-empty']).to.be.level(Severity.Disabled)
      })
    })

    describe('body-full-stop', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'body-full-stop'
        severity = Severity.Error
      })

      it('should error if body ends with "."', async () => {
        // Arrange
        const commit: string =
          'revert: be8b47e536c91bb0940b7bcfb0aae9cd53f794bd'

        // Act
        const result = await linter(signoff(commit) + '.')

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('body-leading-blank', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'body-leading-blank'
        severity = Severity.Warning
      })

      it('should warn if body does not have leading blank line', async () => {
        // Act
        const result = await linter(signoff('fix: some message\nbody'))

        // Expect
        expect(result.errors).to.be.an('array').that.is.empty
        expect(result.warnings).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).toMatchSnapshot()
      })
    })

    describe('body-max-length', () => {
      let rule: string

      beforeAll(() => {
        rule = 'body-max-length'
      })

      it('should allow footer length of Number.MAX_SAFE_INTEGER', () => {
        // Arrange
        const [, , length] = testSubject[rule] as readonly unknown[]

        // Expect
        expect(length).to.equal(Number.MAX_SAFE_INTEGER)
      })
    })

    describe('body-max-line-length', () => {
      let length: number
      let rule: string

      beforeAll(() => {
        rule = 'body-max-line-length'
        length = (testSubject[rule] as readonly unknown[])[2] as typeof length
      })

      it('should allow max URL length', () => {
        expect(length).to.be.at.least(2048)
      })

      it('should allow max URL length in list', () => {
        expect(length).to.equal(2050)
      })
    })

    describe('body-min-length', () => {
      it('should be disabled', () => {
        expect(testSubject['body-min-length']).to.be.level(Severity.Disabled)
      })
    })

    describe('footer-empty', () => {
      it('should be disabled', () => {
        expect(testSubject['footer-empty']).to.be.level(Severity.Disabled)
      })
    })

    describe('footer-leading-blank', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'footer-leading-blank'
        severity = Severity.Warning
      })

      it('should warn if footer does not have leading blank line', async () => {
        // Arrange
        const commit: string =
          'test: some message\n\nbody\nBREAKING CHANGE: It will be significant'

        // Act
        const result = await linter(signoff(commit, 0))

        // Expect
        expect(result.errors).to.be.an('array').that.is.empty
        expect(result.warnings).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).toMatchSnapshot()
      })
    })

    describe('footer-max-length', () => {
      let rule: string

      beforeAll(() => {
        rule = 'footer-max-length'
      })

      it('should allow footer length of Number.MAX_SAFE_INTEGER', () => {
        // Arrange
        const [, , length] = testSubject[rule] as readonly unknown[]

        // Expect
        expect(length).to.equal(Number.MAX_SAFE_INTEGER)
      })
    })

    describe('footer-max-line-length', () => {
      let length: number
      let rule: string

      beforeAll(() => {
        rule = 'footer-max-line-length'
        length = (testSubject[rule] as readonly unknown[])[2] as typeof length
      })

      it('should allow max URL length', () => {
        expect(length).to.be.at.least(2048)
      })

      it('should allow max URL length in list', () => {
        expect(length).to.equal(2050)
      })
    })

    describe('footer-min-length', () => {
      it('should be disabled', () => {
        expect(testSubject['footer-min-length']).to.be.level(Severity.Disabled)
      })
    })

    describe('header-case', () => {
      it('should be disabled', () => {
        expect(testSubject['header-case']).to.be.level(Severity.Disabled)
      })
    })

    describe('header-full-stop', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'header-full-stop'
        severity = Severity.Error
      })

      it('should error if header ends with "."', async () => {
        // Act
        const result = await linter(signoff('feat(utils): `extRegex`.'))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('header-max-length', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'header-max-length'
        severity = Severity.Error
      })

      it('should error if header is longer than maximum length', async () => {
        // Arrange
        const commit: string =
          'test: some message that is way too long and breaks the header-max-length rule by several characters because the max is 100 characters'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('header-min-length', () => {
      it('should be disabled', () => {
        expect(testSubject['header-min-length']).to.be.level(Severity.Disabled)
      })
    })

    describe('references-empty', () => {
      it('should be disabled', () => {
        expect(testSubject['references-empty']).to.be.level(Severity.Disabled)
      })
    })

    describe('scope-case', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'scope-case'
        severity = Severity.Error
      })

      it('should error on invalid scope casing', async () => {
        // Act
        const result = await linter(signoff('feat(UTILS): `extRegex`'))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('scope-empty', () => {
      it('should be disabled', () => {
        expect(testSubject['scope-empty']).to.be.level(Severity.Disabled)
      })
    })

    describe('scope-enum', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'scope-enum'
        severity = Severity.Error
      })

      it('should error on invalid scope', async () => {
        // Arrange
        const commit: string = 'feat(global): `CookieParserMiddleware`'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('scope-max-length', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'scope-max-length'
        severity = Severity.Error
      })

      it('should error if scope is longer than maximum length', async () => {
        // Arrange
        const commit: string = 'feat(interceptors-): `HttpCacheInterceptor`'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('scope-min-length', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'scope-min-length'
        severity = Severity.Error
      })

      it('should error if scope is shorter than minimum length', async () => {
        // Arrange
        const commit: string = 'ci(w): [`ci`] update job environments'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('signed-off-by', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'signed-off-by'
        severity = Severity.Error
      })

      it('should error without sign off', async () => {
        // Arrange
        const commit: string =
          'chore(tests): [codecov] label critical files\n\n- https://docs.codecov.com/docs/manual-critical-file-labelling'

        // Act
        const result = await linter(commit)

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('subject-case', () => {
      it('should be disabled', () => {
        expect(testSubject['subject-case']).to.deep.equal([Severity.Disabled])
      })
    })

    describe('subject-empty', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'subject-empty'
        severity = Severity.Error
      })

      it('should error on missing subject', async () => {
        // Act
        const result = await linter(signoff('feat(utils): '))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('subject-exclamation-mark', () => {
      it('should be disabled', () => {
        expect(testSubject['subject-exclamation-mark']).to.be.level(
          Severity.Disabled
        )
      })
    })

    describe('subject-full-stop', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'subject-full-stop'
        severity = Severity.Error
      })

      it('should error if subject ends with "."', async () => {
        // Arrange
        const commit: string = 'feat(internal): `validateString`.'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('subject-max-length', () => {
      it('should be disabled', () => {
        expect(testSubject['subject-max-length']).to.be.level(Severity.Disabled)
      })
    })

    describe('subject-min-length', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'subject-min-length'
        severity = Severity.Error
      })

      it('should error if subject is shorter than minimum length', async () => {
        // Act
        const result = await linter(signoff('ci: c'))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('trailer-exists', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'trailer-exists'
        severity = Severity.Error
      })

      it('should error on missing "Signed-off-by" trailer', async () => {
        // Act
        const result = await linter('feat(utils): `extRegex`')

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('type-case', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'type-case'
        severity = Severity.Error
      })

      it('should error on invalid type casing', async () => {
        // Act
        const result = await linter(signoff('DOCS: api'))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('type-empty', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'type-empty'
        severity = Severity.Error
      })

      it('should error on missing type', async () => {
        // Act
        const result = await linter(signoff('initial commit'))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('type-enum', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'type-enum'
        severity = Severity.Error
      })

      it('should error on invalid type', async () => {
        // Act
        const result = await linter(signoff('chores: initial commit'))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('type-max-length', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'type-max-length'
        severity = Severity.Error
      })

      it('should error if type is longer than maximum length', async () => {
        // Arrange
        const commit: string = 'refactors(regex): `EXPORT_LIST_REGEX`'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })

    describe('type-min-length', () => {
      let rule: string
      let severity: Severity

      beforeAll(() => {
        rule = 'type-min-length'
        severity = Severity.Error
      })

      it('should error if type is shorter than minimum length', async () => {
        // Arrange
        const commit: string = 'c(workflows): [`ci`] update job environments'

        // Act
        const result = await linter(signoff(commit))

        // Expect
        expect(result.errors).to.have.ruleOutcome(rule, severity)
        expect(result.warnings).to.be.an('array').that.is.empty
        expect(result.errors).toMatchSnapshot()
      })
    })
  })
})
