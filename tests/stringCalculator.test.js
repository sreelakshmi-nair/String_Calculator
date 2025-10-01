const add = require("../src/stringCalculator");

//No input
test('should return 0 for empty string', () => {
  expect(add("")).toBe(0);
});

//One number as input
test('should return the number itself when one number is provided', () => {
  expect(add("10")).toBe(10);
});

//Two numbers as input separated by commas
test('should return the sum of numbers separated by commas', () => {
  expect(add("1,3")).toBe(4);
});

//Unknown numbers as input separated by commas
test('should return the sum of numbers separated by commas', () => {
  expect(add("1,3,9,6,2")).toBe(21);
});