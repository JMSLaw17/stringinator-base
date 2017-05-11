const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(17)).toBe(17);
  });

  it('returns the same array if given an array', () => {
    const array = [1, 7];
    expect(_.identity(array)).toBe(array);
  });

  it('returns the same object if given an object', () => {
    const object = {
      name: 'bob',
      age: 30
      };
    expect(_.identity(object)).toBe(object);
  });
});