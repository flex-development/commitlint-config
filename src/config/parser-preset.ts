/**
 * @file Config - parserPreset
 * @module commitlint-config/config/parserPreset
 */

import { ReferenceAction } from '#src/enums'
import type { ParserPreset } from '#src/types'
import consola from 'consola'

/**
 * Commit parser preset.
 *
 * Pattern regex:
 *
 * - `headerPattern`: https://regex101.com/r/WAJeLp
 * - `revertPattern`: https://regex101.com/r/78TbQq
 *
 * @const {ParserPreset} parserPreset
 */
const parserPreset: ParserPreset = {
  name: 'conventional-changelog-conventionalcommits',
  parserOpts: {
    commentChar: '#',
    fieldPattern: /^-(?<field>.*?)-(?=\n*)$/m,
    headerCorrespondence: ['type', 'scope', 'breaking', 'subject', 'pr'],
    headerPattern:
      /^(?<type>[a-z]+)(?:\((?<scope>[a-z-]+)\))?(?<breaking>!)?: +(?<subject>(?:.+ \(#(?<pr>\d+)\))|.+)/i,
    issuePrefixes: ['#', 'GH-'],
    issuePrefixesCaseSensitive: true,
    mergeCorrespondence: null,
    mergePattern: null,
    noteKeywords: ['BREAKING-CHANGE'],
    referenceActions: Object.values(ReferenceAction),
    revertCorrespondence: [
      'type',
      'scope',
      'breaking',
      'owner',
      'repository',
      'user',
      'hash'
    ],
    revertPattern:
      /^(?<type>revert)(?:\((?<scope>[a-z-]+)\))?(?<breaking>!)?: (?:|(?:.+\n\n(?:- )?))(?:(?:(?:(?<owner>[\d*a-z~-][\w*.~-]*)\/(?<repository>[\da-z~-][\w.~-]*))|(?<user>[\da-z~-][\w.~-]*))@)?(?<hash>[\da-z]+)/,
    warn: consola.warn.bind(consola)
  }
}

export default parserPreset
