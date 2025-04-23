const convertToCelsius = function(fahrenheit) {
  let withoutRounding = (fahrenheit - 32) * 5 / 9;
  return Math.round(withoutRounding * 10)/10;
};


const convertToFahrenheit = function(celsius) {
  let withoutRounding = celsius * 9 / 5  + 32;
  return Math.round(withoutRounding * 10)/10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
