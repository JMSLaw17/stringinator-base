const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const array = [3, 7, 4, 7, 3, 5, 4, 2, 3];
    expect(_.uniq(array)).toEqual([3, 7, 4, 5, 2]);
  });

  it('when given an object, returns an array with each unique value', () => {
    const points = {
      gameOne: 5,
      gameTwo: 7,
      gameThree: 7,
      gameFour: 5
      };
    expect(_.uniq(points)).toEqual([5, 7]);
  });
});