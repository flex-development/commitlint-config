/**
 * @file Type Tests - Type
 * @module commitlint-config/enums/tests/unit-d/Type
 */

import type TestSubject from '../type'

describe('unit-d:enums/Type', () => {
  it('should match [BUILD = "build"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BUILD')
      .toMatchTypeOf<'build'>()
  })

  it('should match [CHORE = "chore"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CHORE')
      .toMatchTypeOf<'chore'>()
  })

  it('should match [CI = "ci"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CI')
      .toMatchTypeOf<'ci'>()
  })

  it('should match [DOCS = "docs"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DOCS')
      .toMatchTypeOf<'docs'>()
  })

  it('should match [FEAT = "feat"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FEAT')
      .toMatchTypeOf<'feat'>()
  })

  it('should match [FIX = "fix"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FIX')
      .toMatchTypeOf<'fix'>()
  })

  it('should match [PERF = "perf"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PERF')
      .toMatchTypeOf<'perf'>()
  })

  it('should match [REFACTOR = "refactor"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REFACTOR')
      .toMatchTypeOf<'refactor'>()
  })

  it('should match [REVERT = "revert"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REVERT')
      .toMatchTypeOf<'revert'>()
  })

  it('should match [STYLE = "style"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('STYLE')
      .toMatchTypeOf<'style'>()
  })

  it('should match [TEST = "test"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TEST')
      .toMatchTypeOf<'test'>()
  })

  it('should match [WIP = "wip"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('WIP')
      .toMatchTypeOf<'wip'>()
  })
})
