// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(Math.max(0, array.length - n));
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  const length = obj['length'];
  return typeof length === 'number' && length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (isArrayLike(obj)) {
    for (let i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  let results = [];
  each(obj, function(currentVal, currentKey, obj) {
    results.push(callback(currentVal, currentKey, obj))
  });
  return results;
};

// Return an array of the values of a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  return map(obj, function(value) {
    return value[key];
  });
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  let accumulator = initialValue;
  let initializer = initialValue === undefined;
  each(obj, function(currentVal, currentKey, collection) {
    if (initializer) {
      initializer = false;
      accumulator = currentVal;
    } else {
      accumulator = callback(accumulator, currentVal, currentKey, collection);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  return reduce(obj, function(accumulator, value, key) {
    return accumulator || value === target;
  }, false);
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, function(accumulator, value) {
    return accumulator && !!callback(value);
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  return reduce(obj, function(accumulator, value) {
    return accumulator || !!callback(value);
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  results = [];
  each(obj, function(value) {
    if (callback(value)) {
      results.push(value);
    }
  });
  return results;
};

// Return object without the elements / object values that were rejected by the callback.
const reject = function(arr, callback=identity) {
  return filter(arr, function(value) {
    return !callback(value);
  });
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  let results = [];
  each(obj, function(value) {
    if (!contains(results, value)) {
      results.push(value);
    }
  });
  return results;
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
