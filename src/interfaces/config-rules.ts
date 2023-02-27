/**
 * @file Interfaces - RulesConfig
 * @module commitlint-config/interfaces/RulesConfig
 */

import type * as commitlint from '@commitlint/types'
import type { RuleConfigQuality } from '@commitlint/types'

/**
 * Object representing commit rules for [Flex Development][1].
 *
 * [1]: https://flexdevelopment.llc
 *
 * @see https://commitlint.js.org/#/reference-rules
 *
 * @extends {Required<commitlint.RulesConfig<RuleConfigQuality.Qualified>>}
 */
interface RulesConfig
  extends Required<commitlint.RulesConfig<RuleConfigQuality.Qualified>> {}

export type { RulesConfig as default }
