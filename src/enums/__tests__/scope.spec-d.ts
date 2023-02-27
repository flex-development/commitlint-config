/**
 * @file Type Tests - Scope
 * @module commitlint-config/enums/tests/unit-d/Scope
 */

import type TestSubject from '../scope'

describe('unit-d:enums/Scope', () => {
  it('should match [BUILD = "build"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BUILD')
      .toMatchTypeOf<'build'>()
  })

  it('should match [CJS = "cjs"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CJS')
      .toMatchTypeOf<'cjs'>()
  })

  it('should match [CLI = "cli"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CLI')
      .toMatchTypeOf<'cli'>()
  })

  it('should match [COMPONENTS = "components"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('COMPONENTS')
      .toMatchTypeOf<'components'>()
  })

  it('should match [CONFIG = "config"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONFIG')
      .toMatchTypeOf<'config'>()
  })

  it('should match [CONTROLLERS = "controllers"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONTROLLERS')
      .toMatchTypeOf<'controllers'>()
  })

  it('should match [DECORATORS = "decorators"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DECORATORS')
      .toMatchTypeOf<'decorators'>()
  })

  it('should match [DEPS = "deps"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEPS')
      .toMatchTypeOf<'deps'>()
  })

  it('should match [DEPS_BUNDLE = "deps-bundle"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEPS_BUNDLE')
      .toMatchTypeOf<'deps-bundle'>()
  })

  it('should match [DEPS_DEV = "deps-dev"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEPS_DEV')
      .toMatchTypeOf<'deps-dev'>()
  })

  it('should match [DEPS_OPT = "deps-opt"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEPS_OPT')
      .toMatchTypeOf<'deps-opt'>()
  })

  it('should match [DEPS_PEER = "deps-peer"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEPS_PEER')
      .toMatchTypeOf<'deps-peer'>()
  })

  it('should match [DTOS = "dtos"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DTOS')
      .toMatchTypeOf<'dtos'>()
  })

  it('should match [ENTITIES = "entities"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENTITIES')
      .toMatchTypeOf<'entities'>()
  })

  it('should match [ENUMS = "enums"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENUMS')
      .toMatchTypeOf<'enums'>()
  })

  it('should match [ESM = "esm"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESM')
      .toMatchTypeOf<'esm'>()
  })

  it('should match [EXCEPTIONS = "exceptions"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXCEPTIONS')
      .toMatchTypeOf<'exceptions'>()
  })

  it('should match [EXPORTS = "exports"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXPORTS')
      .toMatchTypeOf<'exports'>()
  })

  it('should match [FACTORIES = "factories"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FACTORIES')
      .toMatchTypeOf<'factories'>()
  })

  it('should match [FILTERS = "filters"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FILTERS')
      .toMatchTypeOf<'filters'>()
  })

  it('should match [GITHUB = "github"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GITHUB')
      .toMatchTypeOf<'github'>()
  })

  it('should match [GUARDS = "guards"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GUARDS')
      .toMatchTypeOf<'guards'>()
  })

  it('should match [HOOKS = "hooks"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HOOKS')
      .toMatchTypeOf<'hooks'>()
  })

  it('should match [HYBRID = "hybrid"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HYBRID')
      .toMatchTypeOf<'hybrid'>()
  })

  it('should match [INSTALL = "install"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INSTALL')
      .toMatchTypeOf<'install'>()
  })

  it('should match [INTERCEPTORS = "interceptors"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERCEPTORS')
      .toMatchTypeOf<'interceptors'>()
  })

  it('should match [INTERFACES = "interfaces"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERFACES')
      .toMatchTypeOf<'interfaces'>()
  })

  it('should match [INTERNAL = "internal"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERNAL')
      .toMatchTypeOf<'internal'>()
  })

  it('should match [LIB = "lib"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LIB')
      .toMatchTypeOf<'lib'>()
  })

  it('should match [LOADER = "loader"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOADER')
      .toMatchTypeOf<'loader'>()
  })

  it('should match [MIDDLEWARE = "middleware"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MIDDLEWARE')
      .toMatchTypeOf<'middleware'>()
  })

  it('should match [MIXINS = "mixins"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MIXINS')
      .toMatchTypeOf<'mixins'>()
  })

  it('should match [MODELS = "models"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MODELS')
      .toMatchTypeOf<'models'>()
  })

  it('should match [MODULES = "modules"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MODULES')
      .toMatchTypeOf<'modules'>()
  })

  it('should match [NAMESPACES = "namespaces"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NAMESPACES')
      .toMatchTypeOf<'namespaces'>()
  })

  it('should match [NODE = "node"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NODE')
      .toMatchTypeOf<'node'>()
  })

  it('should match [NVM = "nvm"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NVM')
      .toMatchTypeOf<'nvm'>()
  })

  it('should match [PATCHES = "patches"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PATCHES')
      .toMatchTypeOf<'patches'>()
  })

  it('should match [PIPES = "pipes"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PIPES')
      .toMatchTypeOf<'pipes'>()
  })

  it('should match [PKG = "pkg"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PKG')
      .toMatchTypeOf<'pkg'>()
  })

  it('should match [PLUGINS = "plugins"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PLUGINS')
      .toMatchTypeOf<'plugins'>()
  })

  it('should match [PONYFILL = "ponyfill"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PONYFILL')
      .toMatchTypeOf<'ponyfill'>()
  })

  it('should match [PROPS = "props"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROPS')
      .toMatchTypeOf<'props'>()
  })

  it('should match [PROVIDERS = "providers"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROVIDERS')
      .toMatchTypeOf<'providers'>()
  })

  it('should match [PUBLIC = "public"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PUBLIC')
      .toMatchTypeOf<'public'>()
  })

  it('should match [REGEX = "regex"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REGEX')
      .toMatchTypeOf<'regex'>()
  })

  it('should match [RELEASE = "release"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RELEASE')
      .toMatchTypeOf<'release'>()
  })

  it('should match [RULES = "rules"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RULES')
      .toMatchTypeOf<'rules'>()
  })

  it('should match [SCRIPTS = "scripts"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SCRIPTS')
      .toMatchTypeOf<'scripts'>()
  })

  it('should match [SERVICES = "services"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SERVICES')
      .toMatchTypeOf<'services'>()
  })

  it('should match [SPELLING = "spelling"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SPELLING')
      .toMatchTypeOf<'spelling'>()
  })

  it('should match [STORYBOOK = "storybook"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('STORYBOOK')
      .toMatchTypeOf<'storybook'>()
  })

  it('should match [STYLES = "styles"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('STYLES')
      .toMatchTypeOf<'styles'>()
  })

  it('should match [SUBDOMAINS = "subdomains"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SUBDOMAINS')
      .toMatchTypeOf<'subdomains'>()
  })

  it('should match [TESTS = "tests"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TESTS')
      .toMatchTypeOf<'tests'>()
  })

  it('should match [TS = "ts"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TS')
      .toMatchTypeOf<'ts'>()
  })

  it('should match [TS_NEXT = "ts-next"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TS_NEXT')
      .toMatchTypeOf<'ts-next'>()
  })

  it('should match [TYPES = "types"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TYPES')
      .toMatchTypeOf<'types'>()
  })

  it('should match [UTILS = "utils"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UTILS')
      .toMatchTypeOf<'utils'>()
  })

  it('should match [VERCEL = "vercel"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VERCEL')
      .toMatchTypeOf<'vercel'>()
  })

  it('should match [VITE = "vite"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VITE')
      .toMatchTypeOf<'vite'>()
  })

  it('should match [VSCODE = "vscode"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VSCODE')
      .toMatchTypeOf<'vscode'>()
  })

  it('should match [WORKFLOWS = "workflows"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('WORKFLOWS')
      .toMatchTypeOf<'workflows'>()
  })

  it('should match [YARN = "yarn"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('YARN')
      .toMatchTypeOf<'yarn'>()
  })
})
