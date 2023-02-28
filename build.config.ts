/**
 * @file Configuration - Build
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { EXT_DTS_REGEX } from '@flex-development/ext-regex'
import {
  defineBuildConfig,
  type Config,
  type OutputMetadata
} from '@flex-development/mkbuild'
import * as mlly from '@flex-development/mlly'
import pathe from '@flex-development/pathe'
import type { BuildResult, OutputFile, PluginBuild } from 'esbuild'
import util from 'node:util'
import pkg from './package.json' assert { type: 'json' }

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  entries: [
    {},
    {
      format: 'cjs',
      plugins: [
        {
          name: 'named-exports',
          setup({ initialOptions, onEnd }: PluginBuild): void {
            const { absWorkingDir = process.cwd(), format } = initialOptions

            // do nothing if format is not commonjs
            if (format !== 'cjs') return void format

            // add named exports
            return void onEnd(
              async (
                result: BuildResult<{ metafile: true; write: false }>
              ): Promise<void> => {
                /**
                 * Named exports.
                 *
                 * @const {Set<string>} names
                 */
                const names: Set<string> = new Set<string>()

                /**
                 * Output file objects.
                 *
                 * @const {OutputFile[]} outputFiles
                 */
                const outputFiles: OutputFile[] = []

                /**
                 * Adds named exports to the given `output` file content.
                 *
                 * @param {string} output - Output file content
                 * @param {string[]} exports - Named exports
                 * @return {string} Output file content with named exports
                 */
                const nameExports = (
                  output: string,
                  exports: string[]
                ): string => {
                  if (exports.length > 0) {
                    // get sourceMappingURL comment
                    const [sourcemap = ''] = /\/\/#.+\n/.exec(output) ?? []

                    /**
                     * Output file content.
                     *
                     * @var {string} text
                     */
                    let text: string = output.replace(sourcemap, '')

                    // add named exports
                    for (const name of exports) {
                      names.add(name)
                      text += `exports.${name} = module.exports.${name};\n`
                    }

                    // alias default export
                    text += 'exports = module.exports;\n'

                    // re-add sourceMappingURL comment
                    return (text += sourcemap)
                  }

                  return output
                }

                // add named exports to output file content
                for (const output of result.outputFiles) {
                  // skip declaration files
                  if (EXT_DTS_REGEX.test(output.path)) {
                    outputFiles.push(output)
                    continue
                  }

                  // skip interface and type definition files
                  if (/(?:interfaces|types)\/.*$/.test(output.path)) {
                    outputFiles.push(output)
                    continue
                  }

                  /**
                   * Relative path to output file.
                   *
                   * **Note**: Relative to {@linkcode absWorkingDir}.
                   *
                   * @const {string} outfile
                   */
                  const outfile: string = output.path
                    .replace(absWorkingDir, '')
                    .replace(/^\//, '')

                  /**
                   * {@linkcode output} metadata.
                   *
                   * @const {OutputMetadata} metadata
                   */
                  const metadata: OutputMetadata =
                    result.metafile.outputs[outfile]!

                  // skip output files without entry points
                  if (!metadata.entryPoint) {
                    outputFiles.push(output)
                    continue
                  }

                  /**
                   * TypeScript source code for current output file.
                   *
                   * @const {string} code
                   */
                  const code: string = (await mlly.getSource(
                    pathe.resolve(absWorkingDir, metadata.entryPoint)
                  )) as string

                  /**
                   * Output file content.
                   *
                   * @const {string} text
                   */
                  const text: string = nameExports(
                    output.text,
                    mlly
                      .findExports(code)
                      .filter(s => s.syntax === mlly.StatementSyntaxKind.NAMED)
                      .flatMap(statement => statement.exports)
                      .map(name => name.replace(/^default as /, ''))
                      .filter(name => name !== 'default')
                  )

                  // add output file with named exports
                  outputFiles.push({
                    ...output,
                    contents: new util.TextEncoder().encode(text),
                    text
                  })
                }

                return void (result.outputFiles = outputFiles.map(output => {
                  // add named exports to package entry point
                  if (output.path.endsWith('dist/index.cjs')) {
                    /**
                     * Output file content.
                     *
                     * @const {string} text
                     */
                    const text: string = nameExports(output.text, [...names])

                    return {
                      ...output,
                      contents: new util.TextEncoder().encode(text),
                      text
                    }
                  }

                  return output
                }))
              }
            )
          }
        }
      ]
    }
  ],
  sourcemap: true,
  sourcesContent: false,
  target: 'node' + pkg.engines.node.replace(/^\D+/, ''),
  tsconfig: 'tsconfig.build.json'
})

export default config
