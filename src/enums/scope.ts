/**
 * @file Enums - Scope
 * @module commitlint-config/enums/Scope
 */

/**
 * Commit scopes.
 *
 * @see https://commitlint.js.org/#/reference-rules?id=scope-enum
 *
 * @enum {Lowercase<string>}
 */
enum Scope {
  BUILD = 'build',
  CJS = 'cjs',
  CLI = 'cli',
  COMPONENTS = 'components',
  CONFIG = 'config',
  CONTROLLERS = 'controllers',
  DECORATORS = 'decorators',
  DEPS = 'deps',
  DEPS_BUNDLE = 'deps-bundle',
  DEPS_DEV = 'deps-dev',
  DEPS_OPT = 'deps-opt',
  DEPS_PEER = 'deps-peer',
  DTOS = 'dtos',
  ENTITIES = 'entities',
  ENUMS = 'enums',
  ESM = 'esm',
  EXCEPTIONS = 'exceptions',
  EXPORTS = 'exports',
  FACTORIES = 'factories',
  FILTERS = 'filters',
  GITHUB = 'github',
  GUARDS = 'guards',
  HOOKS = 'hooks',
  HYBRID = 'hybrid',
  INSTALL = 'install',
  INTERCEPTORS = 'interceptors',
  INTERFACES = 'interfaces',
  INTERNAL = 'internal',
  LIB = 'lib',
  LOADER = 'loader',
  MIDDLEWARE = 'middleware',
  MIXINS = 'mixins',
  MODELS = 'models',
  MODULES = 'modules',
  NAMESPACES = 'namespaces',
  NODE = 'node',
  NVM = 'nvm',
  PATCHES = 'patches',
  PIPES = 'pipes',
  PKG = 'pkg',
  PLUGINS = 'plugins',
  PONYFILL = 'ponyfill',
  PROPS = 'props',
  PROVIDERS = 'providers',
  PUBLIC = 'public',
  REGEX = 'regex',
  RELEASE = 'release',
  RULES = 'rules',
  SCRIPTS = 'scripts',
  SERVICES = 'services',
  SPELLING = 'spelling',
  STORYBOOK = 'storybook',
  STYLES = 'styles',
  SUBDOMAINS = 'subdomains',
  TESTS = 'tests',
  TS = 'ts',
  TS_NEXT = 'ts-next',
  TYPES = 'types',
  UTILS = 'utils',
  VERCEL = 'vercel',
  VITE = 'vite',
  VSCODE = 'vscode',
  WORKFLOWS = 'workflows',
  YARN = 'yarn'
}

export default Scope
