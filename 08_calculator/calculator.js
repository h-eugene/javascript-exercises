const add = function(a ,b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(seq) {
	let sum = 0;
  for (el of seq) sum += el;
  return sum;
};

const multiply = function(seq) {
  if (seq.length == 0) return 0;
  let product = 1;
  for (el of seq) product *= el;
  return product;
};

const power = function(n, deg) {
  return n ** deg;
};

const factorial = function(n) {
	let result = 1;
  for (let i = 1; i<=n; i++) result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
