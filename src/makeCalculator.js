'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (num) => calculator.result + num,
    subtract: (num) => calculator.result - num,
    multiply: (num) => calculator.result * num,
    divide: (num) =>
      num !== 0 ? calculator.result / num : 'Error: Division by zero',

    operate(callback, num) {
      calculator.result = callback(num);

      return this;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
