const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const array = [2, 4, 6];
    expect(_.last(array, 1)).toEqual(6);
  });

  it('returns the last 2 elements of an array', () => {
  	const array = [2, 4, 6];
    expect(_.last(array, 2)).toEqual([4, 6]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
  	const array = [2, 4, 6];
    expect(_.last(array, 4)).toEqual([2, 4, 6]);
  });
});