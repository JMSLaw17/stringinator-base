const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const array = [1, 2, 3];
    expect(_.contains(array, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const array = [1, 2, 3];
    expect(_.contains(array, 4)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const object = {
    name: 'sunny',
    age: 2 
    };
    expect(_.contains(object, 2)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const object = {
    name: 'sunny',
    age: 2 
    };
    expect(_.contains(object, 4)).toBe(false);
  });

});