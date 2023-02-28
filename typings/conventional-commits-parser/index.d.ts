import type { Commit } from '@flex-development/commitlint-config'
import {} from 'conventional-commits-parser'

declare module 'conventional-commits-parser' {
  interface CommitBase extends Commit {}
}
