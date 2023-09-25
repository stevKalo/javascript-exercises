const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let array = [1, 1];
  let fib;
  for (let i = 2; i < num; i++) {
    fib = array.at(-1) + array.at(-2);
    array.push(fib);
  }
  return array.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
