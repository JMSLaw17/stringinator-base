const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Sally', age: 12},
      { name: 'Johnny', age: 13},
      { name: 'Billy', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 13, 14]);
  });

});