const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.reject(array, function(number) {
      return number % 2 === 1;
    })).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const object = {
      type: 'rogue',
      health: 40,
      mana: null,
      stamina: 40,
      magic: null
    };
    expect(_.reject(object, function(value) {
      return value === null;
    })).toEqual(['rogue', 40, 40]);
  });
});