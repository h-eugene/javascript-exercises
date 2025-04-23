const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
