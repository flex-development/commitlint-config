declare global {
  interface CustomMatchers {
    level(level: 0 | 1 | 2): void
    ruleOutcome(name: string, level: 0 | 1 | 2): void
  }

  namespace Vi {
    interface Assertion extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
  }
}

export {}
