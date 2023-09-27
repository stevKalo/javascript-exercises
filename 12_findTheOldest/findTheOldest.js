const findTheOldest = function (arr) {
  return arr.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// make get age function
// function compares object birth and death years
// uses current year if still alive new Date().getFullYear()

// reduce arr
// oldest vs current person
// compare ages with getAge
// assign oldest to obj with greater age
// return obj.name of oldest person
// Do not edit below this line
module.exports = findTheOldest;
