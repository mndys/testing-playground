import { add } from './math'

describe('lib/math', () => {
  describe('add', () => {
    it('returns the sum of 4 + 3, which is 7', () => {
      const result = add(4, 3)
      // assertion library
      expect(result).toBe(7)
    })
    it('returns the sum of -4 + -3, which is -1', () => {
      const result = add(-4, -3)
      expect(result).toBe(-1)
    })
    it('returns the sum of 4 + 0, which is 4', () => {
      const result = add(4, 0)
      expect(result).toBe(4)
    })
    it('returns the sum of 1, 2, 3, 4, 5 (=15)', () => {
      const result = add(1, 2, 3, 4, 5)
      expect(result).toBe(15)
    })
  })
})
