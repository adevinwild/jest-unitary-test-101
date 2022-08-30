const { isEven, substract } = require("./numbers");

test("Check if number is even", () => {
  expect(isEven(4)).toBeTruthy();
});

test("Check if number is odd", () => {
  expect(isEven(3)).toBeFalsy();
});

test("test substract function", () => {
  expect(substract(3, 2)).toBe(1);
});
