const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const array = [2, 3, 4];
    expect(_.some(array, function(number) {
      return number % 2 === 1;
    })).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const array = [2, 4, 6];
    expect(_.some(array, function(number) {
      return number % 2 === 1;
    })).toBe(false);
  });

});