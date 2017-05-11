const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const array = [2, 4, 6];
    expect(_.indexOf(array, 2)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const array = [2, 4, 6];
    expect(_.indexOf(array, 6)).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const array = [2, 4, 6];
    expect(_.indexOf(array, 5)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const array = [2, 4, 2];
    expect(_.indexOf(array, 2)).toBe(0);
  });

  it('starts searching at the given offset', () => {
    const array = [2, 4, 2];
    expect(_.indexOf(array, 2, 1)).toBe(2);
  });

});