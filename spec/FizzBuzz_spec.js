describe("Fizz Buzz tests ", function() {
  var path = require('../app/fizzBuzz.js');

  it("should return `Fizz` for number divisible by 3", function() {
    expect(path.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(path.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(path.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(path.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(path.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(path.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(path.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(path.fizzBuzz(101)).toBe(101);
  });
  it("should return 61 since its indivisible by 3 and 5", function() {
    expect(path.fizzBuzz(61)).toBe(61);
  });
  it("should return `FizzBuzz` for 18000", function() {
    expect(path.fizzBuzz(18000)).toBe('FizzBuzz');
  });

});