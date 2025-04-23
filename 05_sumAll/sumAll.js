const sumAll = function(a, b, ...other) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || other.length) {
    const typeOfNumber = typeof a;
    const typeOfNumber1 = typeof b;
    return "ERROR";
  }
  let sum = 0;
  for (let i = Math.min(a,b); i<=Math.max(a,b); ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
