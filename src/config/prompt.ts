/**
 * @file Config - prompt
 * @module commitlint-config/config/prompt
 */

import { PromptKind, Type } from '#src/enums'
import type { PromptConfig } from '#src/interfaces'

/**
 * Prompt configuration used by [`@commitlint/cz-commitlint`][1].
 *
 * [1]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/cz-commitlint
 *
 * @see {@linkcode PromptConfig}
 * @see https://commitlint.js.org/#/reference-prompt
 *
 * @const {PromptConfig} prompt
 */
const prompt: PromptConfig = {
  messages: {
    emptyWarning: 'can not be empty',
    lowerLimitWarning: 'below limit',
    max: 'upper %d chars',
    min: '%d chars at least',
    skip: ':skip',
    upperLimitWarning: 'over limit'
  },
  questions: {
    [PromptKind.BODY]: {
      description: 'Longer description of change(s)'
    },
    [PromptKind.BREAKING]: {
      description: 'Describe the breaking change(s)'
    },
    [PromptKind.BREAKING_BODY]: {
      description: 'A BREAKING CHANGE commit requires a body'
    },
    [PromptKind.IS_BREAKING]: {
      description: 'Are there any breaking changes?'
    },
    [PromptKind.IS_ISSUE_AFFECTED]: {
      description: 'Does this change affect any open issues?'
    },
    [PromptKind.ISSUES]: {
      description: 'Add issue references (e.g. "fixes #123")'
    },
    [PromptKind.ISSUES_BODY]: {
      description: 'If issues are closed, the commit requires a body'
    },
    [PromptKind.SCOPE]: {
      description: 'Scope of change being committed'
    },
    [PromptKind.SUBJECT]: {
      description: 'Short, imperative tense description of the change'
    },
    [PromptKind.TYPE]: {
      description: 'Type of change being committed',
      enum: {
        [Type.BUILD]: {
          description: '',
          emoji: '📦',
          title: 'Build'
        },
        [Type.CHORE]: {
          description: '',
          emoji: '🏡',
          title: 'Housekeeping'
        },
        [Type.CI]: {
          description: '',
          emoji: '🤖',
          title: 'Continuous Integration'
        },
        [Type.DOCS]: {
          description: '',
          emoji: '📝',
          title: 'Documentation'
        },
        [Type.FEAT]: {
          description: '',
          emoji: '✨',
          title: 'Feature'
        },
        [Type.FIX]: {
          description: '',
          emoji: '🐛',
          title: 'Fix'
        },
        [Type.PERF]: {
          description: '',
          emoji: '🔥',
          title: 'Performance Improvement'
        },
        [Type.REFACTOR]: {
          description: '',
          emoji: '🦾',
          title: 'Refactor'
        },
        [Type.RELEASE]: {
          description: '',
          emoji: '🎯',
          title: 'Release'
        },
        [Type.REVERT]: {
          description: '',
          emoji: '🗑️',
          title: 'Revert'
        },
        [Type.STYLE]: {
          description: '',
          emoji: '🥸',
          title: 'Style'
        },
        [Type.TEST]: {
          description: '',
          emoji: '✅',
          title: 'Testing'
        },
        [Type.WIP]: {
          description: '',
          emoji: '🚧',
          title: 'Work in Progress'
        }
      }
    }
  },
  settings: {
    enableMultipleScopes: true,
    scopeEnumSeparator: ','
  }
}

export default prompt
