/**
 * @file Type Definitions - ParserPreset
 * @module commitlint-config/types/ParserPreset
 */

import type { ParserOptions } from '#src/interfaces'

/**
 * Object representing a commit parser preset.
 *
 * @see https://commitlint.js.org/#/reference-configuration?id=parser-presets
 */
type ParserPreset = {
  /**
   * Preset name.
   */
  name: 'conventional-changelog-conventionalcommits'

  /**
   * Commit parser options.
   *
   * @see {@linkcode ParserOptions}
   */
  parserOpts: ParserOptions
}

export type { ParserPreset as default }
