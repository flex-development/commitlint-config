/**
 * @file Type Tests - PromptKind
 * @module commitlint-config/enums/tests/unit-d/PromptKind
 */

import type TestSubject from '../kind-prompt'

describe('unit-d:enums/PromptKind', () => {
  it('should match [BODY = "body"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BODY')
      .toMatchTypeOf<'body'>()
  })

  it('should match [BREAKING = "breaking"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BREAKING')
      .toMatchTypeOf<'breaking'>()
  })

  it('should match [BREAKING_BODY = "breakingBody"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BREAKING_BODY')
      .toMatchTypeOf<'breakingBody'>()
  })

  it('should match [ISSUES = "issues"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ISSUES')
      .toMatchTypeOf<'issues'>()
  })

  it('should match [ISSUES_BODY = "issuesBody"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ISSUES_BODY')
      .toMatchTypeOf<'issuesBody'>()
  })

  it('should match [IS_BREAKING = "isBreaking"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IS_BREAKING')
      .toMatchTypeOf<'isBreaking'>()
  })

  it('should match [IS_ISSUE_AFFECTED = "isIssueAffected"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IS_ISSUE_AFFECTED')
      .toMatchTypeOf<'isIssueAffected'>()
  })

  it('should match [SCOPE = "scope"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SCOPE')
      .toMatchTypeOf<'scope'>()
  })

  it('should match [SUBJECT = "subject"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SUBJECT')
      .toMatchTypeOf<'subject'>()
  })

  it('should match [TYPE = "type"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TYPE')
      .toMatchTypeOf<'type'>()
  })
})
