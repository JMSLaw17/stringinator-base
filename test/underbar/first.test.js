const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
  	const array = [2, 4, 6];
    expect(_.first(array, 1)).toEqual(2);
  });

  it('returns the first 2 elements of an array', () => {
    const array = [2, 4, 6];
    expect(_.first(array, 2)).toEqual([2, 4]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = [2, 4, 6];
    expect(_.first(array, 4)).toEqual([2, 4, 6]);
  });
});