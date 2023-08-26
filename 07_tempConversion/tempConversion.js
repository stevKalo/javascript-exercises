const convertToCelsius = function (temp) {
  newTemp = (temp - 32) * (5 / 9);
  return Number(newTemp % 1 === 0 ? newTemp : newTemp.toFixed(1));
};

// (32°F − 32) × 5/9 = 0°C

const convertToFahrenheit = function (temp) {
  newTemp = temp * (9 / 5) + 32;
  return Number(newTemp % 1 == 0 ? newTemp : newTemp.toFixed(1));
};

// (0°C × 9/5) + 32 = 32°F

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
