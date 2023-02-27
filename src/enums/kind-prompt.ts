/**
 * @file Enums - PromptKind
 * @module commitlint-config/enums/PromptKind
 */

import type { PromptName } from '@commitlint/types'

/**
 * Prompt names.
 *
 * @see https://commitlint.js.org/#/reference-prompt
 *
 * @enum {PromptName}
 */
enum PromptKind {
  BODY = 'body',
  BREAKING = 'breaking',
  BREAKING_BODY = 'breakingBody',
  ISSUES = 'issues',
  ISSUES_BODY = 'issuesBody',
  IS_BREAKING = 'isBreaking',
  IS_ISSUE_AFFECTED = 'isIssueAffected',
  SCOPE = 'scope',
  SUBJECT = 'subject',
  TYPE = 'type'
}

export default PromptKind
