const _ = require('./underbar');

const first = function(str, n) {
  if (n === undefined) {
    return str.charAt(0);
  } else {
    return _.first(str.split(''), n).join('');
  }
};

const last = function(str, n) {
  if (n === undefined) {
    return str.charAt(str.length - 1);
  } else {
    return _.last(str.split(''), n).join('');
  }
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), function(value) {
    return value === target;
  }).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), function(value) {
    return value === target;
  });
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), function(value) {
    return !isNaN(parseInt(value));
  });
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};