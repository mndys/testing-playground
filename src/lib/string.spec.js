import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a, b"', () => {
      const result = commaSeparatedToArray('a, b')
      expect(result).toEqual(['a', 'b'])
    })

    it('returns ["a", "b"] for text "  a ,   b   "', () => {
      const result = commaSeparatedToArray('  a ,   b   ')
      expect(result).toEqual(['a', 'b'])
    })

    it('returns ["a b", "c"] for text "a b, c"', () => {
      const result = commaSeparatedToArray('a b, c')
      expect(result).toEqual(['a b', 'c'])
    })

    /* it('returns ["Jane", "John", "Joe"] for text "a b, c"', () => {
      const result = commaSeparatedToArray('Jane, John, Joe')
      expect(result).toEqual(['Jane', 'John', 'Joe'])
    }) */

    it('returns the array in ascending alphabetical order', () => {
      const result = commaSeparatedToArray('Jane, John, Joe')
      expect(result).toEqual(['Jane', 'Joe', 'John'])
    })

    it('contains each string only once in the resulting array', () => {
      const result = commaSeparatedToArray(
        'Jane, John, Joe, John, John, Jane, Joe, Joe'
      )
      expect(result).toEqual(['Jane', 'Joe', 'John'])
    })

    it('returns all items in title case ("john" -> "John")', () => {
      const result = commaSeparatedToArray(
        'Jane Jean, John, joe, John, John, jane, joe, Joe, a'
      )
      expect(result).toEqual(['Jane', 'Jane Jean', 'Joe', 'John', 'a'])
    })
  })
})
