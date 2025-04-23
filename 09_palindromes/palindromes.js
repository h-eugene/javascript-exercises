const palindromes = function (s) {
  let lower = s.toLowerCase();
  let cleaned = lower.replace(/[.,!? ]/g, "");
  
  let reversed = cleaned.split("").reverse().join("");
  return reversed == cleaned;
};

// Do not edit below this line
module.exports = palindromes;
