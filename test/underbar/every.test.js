const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const array = [1, 2, 3];
      expect(_.every(array)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const array = [1, 3, 5];
      expect(_.every(array, function(number) {
        return number % 2 === 1;
      })).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const array = [1, 3, 4];
      expect(_.every(array, function(number) {
        return number % 2 === 1;
      })).toBe(false);
    });

  });
});