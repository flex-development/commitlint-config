import type { Commit } from '@flex-development/commitlint-config'
import {} from 'conventional-commits-parser'

declare module 'conventional-commits-parser' {
  export interface CommitBase extends Commit {}

  export interface ICommit extends CommitBase {
    raw: CommitBase
    version?: string | undefined
  }
}
