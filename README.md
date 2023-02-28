# commitlint-config

[![npm](https://img.shields.io/npm/v/@flex-development/commitlint-config.svg)](https://npmjs.com/package/@flex-development/commitlint-config)
[![codecov](https://codecov.io/gh/flex-development/commitlint-config/branch/main/graph/badge.svg?token=hJhCIS5UIM)](https://codecov.io/gh/flex-development/commitlint-config)
[![module type: cjs+esm](https://img.shields.io/badge/module%20type-cjs%2Besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/commitlint-config.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

Shareable [`commitlint`][1] config enforcing [conventional commits][2]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
  - [Customizing scopes and types](#customizing-scopes-and-types)
- [API](#api)
  - [`config`](#config)
  - `defaultIgnores`
  - `formatter`
  - `helpUrl`
  - `ignores`
  - [`max(array)`](#maxarray)
  - [`min(array)`](#minarray)
  - `parserPreset`
  - `plugins`
  - `prompt`
  - `rules`
  - [`scopes([extras])`](#scopesextras)
  - [`types([extras])`](#typesextras)
- [Types](#types)
  - [Enums](#enums)
  - [Interfaces](#interfaces)
  - [Type Definitions](#type-definitions)
- [Contribute](#contribute)

## What is this?

This package exports a shareable [`commitlint`][1] configuration that enforces [conventional commits][2].

It also includes a set of utilities for customizing rules.

## When should I use this?

This package can be used with [`@commitlint/cli`][3] and [`@commitlint/prompt-cli`][4].

Commit parsing options can also be used with [`conventional-changelog`][5] and [`conventional-commits-parser`][6].

## Install

```sh
yarn add -D @flex-development/commitlint-config @commitlint/cli
```

From Git:

```sh
yarn add -D @flex-development/commitlint-config@flex-development/commitlint-config @commitlint/cli
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```sh
echo '{\n  "extends": "@flex-development"\n}' > .commitlintrc.json
commitlint --from HEAD~1 --to HEAD --verbose
```

### Customizing scopes and types

Due to [an unresolved `commitlint` issue][7], extended `commitlint` configurations do not concatenate [`scope-enum`][8],
nor [`type-enum`][9]. Follow the example below to customize commit scopes and types losslessly.

```sh
touch .commitlintrc.cts
```

```ts
/**
 * @file Configuration - commitlint
 * @module config/commitlint
 * @see https://commitlint.js.org
 */

import {
  RuleConfigSeverity as Severity,
  type UserConfig
} from '@commitlint/types'
import { scopes } from '@flex-development/commitlint-config'

/**
 * `commitlint` configuration object.
 *
 * @const {UserConfig} config
 */
const config: UserConfig = {
  extends: ['@flex-development'],
  rules: {
    'scope-enum': [Severity.Error, 'always', scopes(['bundle', 'transpile'])]
  }
}

export default config
```

You may need to set [`TS_NODE_PROJECT`][10] if running `commitlint` from the command line.

See [`docs/examples/commitlint.config.cjs`](docs/examples/commitlint.config.cjs) for an example config written in pure CommonJS.

## API

This package exports the following identifiers:

- [`config`](#config)
- `defaultIgnores`
- `formatter`
- `helpUrl`
- `ignores`
- [`max`](#maxarray)
- [`min`](#minarray)
- `parserPreset`
- `plugins`
- `prompt`
- `rules`
- [`scopes`](#scopesextras)
- [`types`](#typesextras)

The default export is `config`.

### `config`

`commitlint` configuration object.

Properties:

- `defaultIgnores`
- `formatter`
- `helpUrl`
- `ignores`
- `parserPreset`
- `plugins`
- `prompt`
- `rules`

See the [configuration reference][11] for more details.

### Utilities

#### `max(array)`

Returns the length of the longest string in the given `array`.

##### Parameters

- `{string[]}` **`array`** &mdash; Array to evaluate

##### Returns

`{number}` Length of longest string in `array`.

##### Source

> [`src/utils/max.ts`](src/utils/max.ts)

#### `min(array)`

Returns the length of the shortest string in the given `array`.

##### Parameters

- `{string[]}` **`array`** &mdash; Array to evaluate

##### Returns

`{number}` Length of shortest string in `array`.

##### Source

> [`src/utils/min.ts`](src/utils/min.ts)

#### `scopes([extras])`

Returns an array containing valid commit scopes.

##### Parameters

- `{(Set<string> | string[])?}` **`[extras=[]]`** &mdash; Additional commit scopes

##### Returns

`{LiteralUnion<Scope, string>[]}` Commit scopes array.

##### Source

> [`src/utils/scopes.ts`](src/utils/scopes.ts)

#### `types([extras])`

Returns an array containing valid commit types.

##### Parameters

- `{(Set<string> | string[])?}` **`[extras=[]]`** &mdash; Additional commit types

##### Returns

`{LiteralUnion<Type, string>[]}` Commit types array.

##### Source

> [`src/utils/types.ts`](src/utils/types.ts)

## Types

This package is fully typed with [TypeScript][12].

### Enums

- [`PromptKind`](src/enums/kind-prompt.ts)
- [`ReferenceAction`](src/enums/reference-action.ts)
- [`Scope`](src/enums/scope.ts)
- [`Type`](src/enums/type.ts)

### Interfaces

- [`Commit`](src/interfaces/commit.ts)
- [`Config`](src/interfaces/config.ts)
- [`Note`](src/interfaces/note.ts)
- [`ParserOptions`](src/interfaces/options-parser.ts)
- [`PromptConfig`](src/interfaces/config-prompt.ts)
- [`Reference`](src/interfaces/reference.ts)
- [`Revert`](src/interfaces/revert.ts)
- [`RulesConfig`](src/interfaces/config-rules.ts)

### Type Definitions

- [`NoteKeyword`](src/types/note-keyword.ts)
- [`ParserPreset`](src/types/parser-preset.ts)
- [`QuestionEnum`](src/types/question-enum.ts)
- [`Question`](src/types/question.ts)
- [`Questions`](src/types/questions.ts)

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://commitlint.js.org/
[2]: https://conventionalcommits.org/
[3]: https://commitlint.js.org/#/reference-cli
[4]: https://commitlint.js.org/#/guides-use-prompt
[5]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog
[6]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser
[7]: https://github.com/conventional-changelog/commitlint/issues/528
[8]: https://commitlint.js.org/#/reference-rules?id=scope-enum
[9]: https://commitlint.js.org/#/reference-rules?id=type-enum
[10]: https://typestrong.org/ts-node/docs/options#project
[11]: https://commitlint.js.org/#/reference-configuration
[12]: https://www.typescriptlang.org
