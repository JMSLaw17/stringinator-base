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
  return _.filter(str.split(''), function(value) {
    return !isNaN(parseInt(value));
  }).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, function(value) {
    return truncateString(value, maxLength);
  });
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
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