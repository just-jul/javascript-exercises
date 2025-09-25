const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce( (sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current);
}; 

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {

  if (num < 0) return undefined;

	let result = 1;

  for (let i=2; i <= num; i++){
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
