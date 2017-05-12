const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.filter(array, function(number) {
      return number % 2 === 1;
    })).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const object = {
      type: 'Warrior',
      health: 50,
      mana: 20,
      stamina: 40
    }
    expect(_.filter(object, function(value) {
      return typeof value === 'number';
    })).toEqual([50, 20, 40]);
  });
});