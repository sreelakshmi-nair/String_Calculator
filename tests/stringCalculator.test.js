const add = require("../src/stringCalculator");

test('should return 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself when one number is provided', () => {
  expect(add("10")).toBe(10);
});

test('should return the sum of numbers separated by commas', () => {
  expect(add("1,3")).toBe(4);
});