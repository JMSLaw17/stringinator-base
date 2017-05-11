const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const array = [1, 2, 3];
    expect(_.isArrayLike(array)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLike = {
      length: 3,
      0: 1,
      1: 2,
      2: 3
    };
    expect(_.isArrayLike(arrayLike)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
      0: 1,
      1: 2,
      2: 3
    };
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
