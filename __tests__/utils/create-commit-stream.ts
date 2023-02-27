/**
 * @file Utilities - createCommitStream
 * @module tests/utils/createCommitStream
 */

import parserPreset from '#src/config/parser-preset'
import pathe from '@flex-development/pathe'
import fs from 'node:fs'
import stream from 'node:stream'
import split from 'split2'

/**
 * Creates a commit transform stream.
 *
 * @see {@linkcode stream.Transform}
 *
 * @param {string} log - Commit log basename
 * @param {split.Matcher?} [separator] - Commit separator
 * @return {stream.Transform} Commit transform stream
 */
const createCommitStream = (
  log: string,
  separator: split.Matcher = /(?<=[+-]\d+)\n\n/
): stream.Transform => {
  /**
   * Path to commit log.
   *
   * @const {string} path
   */
  const path: string = pathe.resolve('__fixtures__', log + '.git.log')

  return fs
    .createReadStream(path)
    .on('error', (error: Error): void => {
      const { warn } = parserPreset.parserOpts
      return void warn(`Failed to read file ${path}`, error)
    })
    .pipe(split(separator))
}

export default createCommitStream
