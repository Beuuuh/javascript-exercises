const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a, b) {
	return a + b
};

const multiply = function(a, b) {
  return a * b
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let total = 1;
	for(i = 1; i < a; i++) {
    total *= i
  };
  return total;
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
