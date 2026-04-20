const test = require("node:test");
const assert = require("node:assert/strict");

const {
  rectanglePerimeter,
  rectangleArea,
  solveQuadratic,
  daysInMonth,
  isPrime,
  alternatingSum,
  gcd,
  factorialSum
} = require("../src/blackboxPractice");

test("Bai 1: rectanglePerimeter with valid inputs", () => {
  assert.equal(rectanglePerimeter(5, 3), 16);
  assert.equal(rectanglePerimeter(0.5, 2.5), 6);
});

test("Bai 1: rectanglePerimeter invalid and boundary", () => {
  assert.throws(() => rectanglePerimeter(0, 3), RangeError);
  assert.throws(() => rectanglePerimeter(-1, 3), RangeError);
  assert.throws(() => rectanglePerimeter("a", 3), TypeError);
});

test("Bai 2: rectangleArea with valid inputs", () => {
  assert.equal(rectangleArea(5, 3), 15);
  assert.ok(Math.abs(rectangleArea(0.2, 0.4) - 0.08) < 1e-12);
});

test("Bai 2: rectangleArea invalid and boundary", () => {
  assert.throws(() => rectangleArea(0, 2), RangeError);
  assert.throws(() => rectangleArea(-3, 2), RangeError);
  assert.throws(() => rectangleArea(1.5, "x"), TypeError);
});

test("Bai 3: solveQuadratic with valid classes", () => {
  const twoRoots = solveQuadratic(1, -3, 2);
  assert.equal(twoRoots.type, "two_distinct_roots");
  assert.equal(twoRoots.x1, 2);
  assert.equal(twoRoots.x2, 1);

  const doubleRoot = solveQuadratic(1, 2, 1);
  assert.equal(doubleRoot.type, "double_root");
  assert.equal(doubleRoot.x, -1);

  const noRealRoot = solveQuadratic(1, 0, 1);
  assert.equal(noRealRoot.type, "no_real_root");
});

test("Bai 3: solveQuadratic boundary and exception logic", () => {
  assert.deepEqual(solveQuadratic(0, 2, -4), { type: "linear", x: 2 });
  assert.deepEqual(solveQuadratic(0, 0, 1), { type: "no_solution" });
  assert.deepEqual(solveQuadratic(0, 0, 0), { type: "infinite_solutions" });
  assert.throws(() => solveQuadratic("a", 2, 1), TypeError);
});

test("Bai 4: daysInMonth valid inputs", () => {
  assert.equal(daysInMonth(1, 2025), 31);
  assert.equal(daysInMonth(4, 2025), 30);
  assert.equal(daysInMonth(2, 2024), 29);
  assert.equal(daysInMonth(2, 2023), 28);
});

test("Bai 4: daysInMonth invalid and boundary", () => {
  assert.throws(() => daysInMonth(0, 2024), RangeError);
  assert.throws(() => daysInMonth(13, 2024), RangeError);
  assert.throws(() => daysInMonth(2, 0), RangeError);
  assert.throws(() => daysInMonth("2a", 2024), TypeError);
});

test("Bai 5: isPrime valid inputs", () => {
  assert.equal(isPrime(2), true);
  assert.equal(isPrime(17), true);
  assert.equal(isPrime(97), true);
});

test("Bai 5: isPrime invalid/boundary classes", () => {
  assert.equal(isPrime(1), false);
  assert.equal(isPrime(0), false);
  assert.equal(isPrime(-7), false);
  assert.throws(() => isPrime("abc"), TypeError);
});

test("Bai 6: alternatingSum valid inputs", () => {
  assert.equal(alternatingSum(1), 1);
  assert.equal(alternatingSum(4), -2);
  assert.equal(alternatingSum(5), 3);
  assert.equal(alternatingSum(10), -5);
});

test("Bai 6: alternatingSum invalid and boundary", () => {
  assert.throws(() => alternatingSum(0), RangeError);
  assert.throws(() => alternatingSum(-5), RangeError);
  assert.throws(() => alternatingSum(3.5), TypeError);
});

test("Bai 7: gcd valid inputs", () => {
  assert.equal(gcd(12, 18), 6);
  assert.equal(gcd(7, 13), 1);
  assert.equal(gcd(-24, 60), 12);
  assert.equal(gcd(0, 15), 15);
});

test("Bai 7: gcd invalid and exception", () => {
  assert.throws(() => gcd(0, 0), RangeError);
  assert.throws(() => gcd("x", 5), TypeError);
});

test("Bai 8: factorialSum valid inputs", () => {
  assert.equal(factorialSum(1), 1n);
  assert.equal(factorialSum(3), 9n);
  assert.equal(factorialSum(5), 153n);
  assert.equal(factorialSum(10), 4037913n);
});

test("Bai 8: factorialSum invalid and boundary", () => {
  assert.throws(() => factorialSum(0), RangeError);
  assert.throws(() => factorialSum(-2), RangeError);
  assert.throws(() => factorialSum(21), RangeError);
  assert.throws(() => factorialSum("abc"), TypeError);
});
