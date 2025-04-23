const removeFromArray = function() {
  let arr = arguments[0];
  let elementsToRemove = Array.from(arguments).slice(1);
  let result = [];
  outer: 
  for (element of arr) {
    for (toRemove of elementsToRemove) {
      if (toRemove === element) continue outer;
    }
    result.push(element);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
