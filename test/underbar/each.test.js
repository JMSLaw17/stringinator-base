const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = ['a', 'b', 'c'];
    let iterations = 0;
    _.each(array, function(element, index, arr) {
      expect(element).toEqual(arr[index]);
      iterations += 1;
    });
    expect(iterations).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLike = {
      length: 3,
      0: 1,
      1: 2,
      2: 3
    };
    let iterations = 0;
    _.each(arrayLike, function(element, index, arr) {
      expect(element).toEqual(arr[index]);
      iterations += 1;
    });
    expect(iterations).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      0: 1,
      1: 2,
      2: 3
    };
    let iterations = 0;
    _.each(obj, function(element, index, arr) {
      expect(element).toEqual(arr[index]);
      iterations += 1;
    });
    expect(iterations).toBe(3);
  });
});

