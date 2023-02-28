/**
 * @file Unit Tests - parserPreset
 * @module commitlint-config/config/tests/unit/parserPreset
 */

import { ReferenceAction } from '#src/enums'
import { isObjectPlain } from '@flex-development/tutils'
import testSubject from '../parser-preset'

describe('unit:config/parserPreset', () => {
  it('should be a ParserPreset object', () => {
    expect(testSubject).to.have.property('name').be.a('string').and.not.empty
    expect(testSubject).to.have.property('parserOpts').satisfy(isObjectPlain)
  })

  describe('.parserOpts', () => {
    describe('.commentChar', () => {
      it('should equal "#"', () => {
        expect(testSubject.parserOpts.commentChar).to.equal('#')
      })
    })

    describe('.fieldPattern', () => {
      let subject: RegExp

      beforeAll(() => {
        subject = testSubject.parserOpts.fieldPattern
      })

      it('should match commit field', () => {
        // Arrange
        const field: string = '-gitTags-'

        // Act
        const result = subject.exec(field)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit field that ends with new line', () => {
        // Arrange
        const field: string = '-hash-\n'

        // Act
        const result = subject.exec(field)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })
    })

    describe('.headerCorrespondence', () => {
      let groups: NonNullable<RegExpExecArray['groups']>
      let subject: string[]

      beforeAll(() => {
        const header = 'docs: api'
        const headerPattern = testSubject.parserOpts.headerPattern

        groups = headerPattern.exec(header)!.groups!
        subject = testSubject.parserOpts.headerCorrespondence
      })

      it('should only contain headerPattern capture group names', () => {
        expect(subject).to.deep.equal(Object.keys(groups))
      })
    })

    describe('.headerPattern', () => {
      let subject: RegExp

      beforeAll(() => {
        subject = testSubject.parserOpts.headerPattern
      })

      it('should match header with [type,breaking,subject,pr]', () => {
        // Arrange
        const header: string = 'refactor!: statements (#3)'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,breaking,subject]', () => {
        // Arrange
        const header: string = 'refactor!: statements'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,scope,breaking,subject,pr]', () => {
        // Arrange
        const header: string =
          'refactor(utils)!: [getFormat] enforce absolute module id (#3)'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,scope,breaking,subject]', () => {
        // Arrange
        const header: string =
          'refactor(utils)!: [getSource] enforce absolute module id'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,scope,subject,pr]', () => {
        // Arrange
        const header: string =
          'build(deps-dev): Bump cspell from 6.25.0 to 6.26.1 (#2)'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,scope,subject]', () => {
        // Arrange
        const header: string =
          'build(deps-dev): bump @flex-development/mkbuild from 1.0.0-alpha.11 to 1.0.0-alpha.13'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,subject,pr]', () => {
        // Arrange
        const header: string = 'release: 1.0.0 (#3)'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match header with [type,subject]', () => {
        // Arrange
        const header: string = 'docs: when should i use this?'

        // Act
        const result = subject.exec(header)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should not match header without colon', () => {
        expect(subject.exec('release 1.0.0')).to.be.null
      })

      it('should not match header without subject', () => {
        expect(subject.exec('release:')).to.be.null
      })

      it('should not match header without type', () => {
        expect(subject.exec('1.0.0')).to.be.null
      })
    })

    describe('.issuePrefixes', () => {
      let subject: string[]

      beforeAll(() => {
        subject = testSubject.parserOpts.issuePrefixes
      })

      it('should only contain 2 prefixes', () => {
        expect(subject).to.deep.equal(['#', 'GH-'])
      })
    })

    describe('.issuePrefixesCaseSensitive', () => {
      it('should equal true', () => {
        expect(testSubject.parserOpts.issuePrefixesCaseSensitive).to.be.true
      })
    })

    describe('.mergeCorrespondence', () => {
      it('should be null', () => {
        expect(testSubject.parserOpts.mergeCorrespondence).to.be.null
      })
    })

    describe('.mergePattern', () => {
      it('should be null', () => {
        expect(testSubject.parserOpts.mergePattern).to.be.null
      })
    })

    describe('.noteKeywords', () => {
      let subject: string[]

      beforeAll(() => {
        subject = testSubject.parserOpts.noteKeywords
      })

      it('should only contain 2 keywords', () => {
        expect(subject).to.deep.equal(['BREAKING CHANGE', 'BREAKING-CHANGE'])
      })
    })

    describe('.referenceActions', () => {
      let subject: ReferenceAction[]

      beforeAll(() => {
        subject = testSubject.parserOpts.referenceActions
      })

      it('should only contain ReferenceAction values', () => {
        expect(subject).to.deep.equal(Object.values(ReferenceAction))
      })
    })

    describe('.revertCorrespondence', () => {
      let groups: NonNullable<RegExpExecArray['groups']>
      let subject: string[]

      beforeAll(() => {
        const header = 'revert: bba88b5528826f698a75adf0a033bd5caf507903'
        const revertPattern = testSubject.parserOpts.revertPattern

        groups = revertPattern.exec(header)!.groups!
        subject = testSubject.parserOpts.revertCorrespondence
      })

      it('should only contain revertPattern capture group names', () => {
        expect(subject).to.deep.equal(Object.keys(groups))
      })
    })

    describe('.revertPattern', () => {
      let hash: string
      let subject: RegExp

      beforeAll(() => {
        hash = '4a04c8afb2b4ba1dfea3ff11e7a14d2850896e2d'
        subject = testSubject.parserOpts.revertPattern
      })

      it('should match commit with [type,breaking,hash]', () => {
        // Arrange
        const commit: string = 'revert!: "release: 2.0.0-alpha.1"\n\n- ' + hash

        // Act
        const result = subject.exec(commit)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,breaking,repo,hash]', () => {
        // Arrange
        const commit: string = 'revert!: flex-development/ext-regex@' + hash

        // Act
        const result = subject.exec(commit)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,breaking,user,hash]', () => {
        // Act
        const result = subject.exec(`revert!: flexdevelopment@${hash}`)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,hash]', () => {
        // Act
        const result = subject.exec(`revert: ${hash}`)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,repo,hash]', () => {
        // Arrange
        const commit: string = 'revert: flex-development/ext-regex@' + hash

        // Act
        const result = subject.exec(commit)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,scope,breaking,repo,hash]', () => {
        // Arrange
        const commit: string =
          'revert(release)!: flex-development/ext-regex@' + hash

        // Act
        const result = subject.exec(commit)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,scope,breaking,user,hash]', () => {
        // Act
        const result = subject.exec(`revert(release)!: flexdevelopment@${hash}`)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,scope,hash]', () => {
        // Act
        const result = subject.exec(`revert(release): ${hash}`)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,scope,repo,hash]', () => {
        // Arrange
        const commit: string =
          'revert(release): flex-development/ext-regex@' + hash

        // Act
        const result = subject.exec(commit)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,scope,user,hash]', () => {
        // Act
        const result = subject.exec(`revert(release): flexdevelopment@${hash}`)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should match commit with [type,user,hash]', () => {
        // Act
        const result = subject.exec(`revert: flexdevelopment@${hash}`)

        // Expect
        expect(result).to.not.be.null
        expect(result).toMatchSnapshot()
      })

      it('should not match commit without type "revert"', () => {
        expect(subject.exec('docs: what is this?')).to.be.null
      })
    })

    describe('.warn', () => {
      it('should be a function', () => {
        expect(testSubject.parserOpts.warn).to.be.a('function')
      })
    })
  })
})
