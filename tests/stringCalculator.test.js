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

//New line and comma as delimiter
test('should handle new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

//Exception for negative numbers
test('should throw exception for negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("Negative numbers are not allowed");
});