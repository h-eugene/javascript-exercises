const findTheOldest = function(people) {
  let today = new Date();
  people.forEach(x => {if (!x.yearOfDeath) x.yearOfDeath = today.getFullYear()});
  return people.reduce((largest, current) =>{
    let dif1 = largest.yearOfDeath - largest.yearOfBirth;
    let dif2 = current.yearOfDeath - current.yearOfBirth;  
    if (dif1 < dif2) {
      largest = current;
    }
    return largest;
  }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
