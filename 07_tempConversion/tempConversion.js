const convertToCelsius = function(degrees) {
  let result = (degrees - 32) / 1.8;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  let result = degrees * 1.8 + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
