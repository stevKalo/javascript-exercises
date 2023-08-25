const sumAll = function (num1, num2) {
  let result = 0;
  let x;
  let y;
  if (num1 < 0 || num2 < 0) {
    result = "ERROR";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    result = "ERROR";
  } else {
    if (num1 < num2) {
      x = num1;
      y = num2;
    } else if (num1 > num2) {
      x = num2;
      y = num1;
    }
    for (let i = x; i <= y; i++) {
      result += i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
