const palindromes = function (string) {
  let str = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s/g, "")
    .toLowerCase()
    .split("");
  if (str.join("") === str.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = palindromes;
