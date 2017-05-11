const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const numbers = [1, 2, 3];
    expect(_.map(numbers, function(value, index, obj) {
    	return value * value;
    })).toEqual([1, 4, 9]);
  });
});