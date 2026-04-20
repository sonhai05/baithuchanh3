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

test("Bai 1: rectanglePerimeter voi du lieu hop le", () => {
  assert.equal(rectanglePerimeter(5, 3), 16);
  assert.equal(rectanglePerimeter(0.5, 2.5), 6);
});

test("Bai 1: rectanglePerimeter du lieu khong hop le va bien", () => {
  assert.throws(() => rectanglePerimeter(0, 3), RangeError);
  assert.throws(() => rectanglePerimeter(-1, 3), RangeError);
  assert.throws(() => rectanglePerimeter("a", 3), TypeError);
});

test("Bai 2: rectangleArea voi du lieu hop le", () => {
  assert.equal(rectangleArea(5, 3), 15);
  assert.ok(Math.abs(rectangleArea(0.2, 0.4) - 0.08) < 1e-12);
});

test("Bai 2: rectangleArea du lieu khong hop le va bien", () => {
  assert.throws(() => rectangleArea(0, 2), RangeError);
  assert.throws(() => rectangleArea(-3, 2), RangeError);
  assert.throws(() => rectangleArea(1.5, "x"), TypeError);
});

test("Bai 3: solveQuadratic voi cac lop hop le", () => {
  const twoRoots = solveQuadratic(1, -3, 2);
  assert.equal(twoRoots.type, "hai_nghiem_phan_biet");
  assert.equal(twoRoots.x1, 2);
  assert.equal(twoRoots.x2, 1);

  const doubleRoot = solveQuadratic(1, 2, 1);
  assert.equal(doubleRoot.type, "nghiem_kep");
  assert.equal(doubleRoot.x, -1);

  const noRealRoot = solveQuadratic(1, 0, 1);
  assert.equal(noRealRoot.type, "vo_nghiem_thuc");
});

test("Bai 3: solveQuadratic cho gia tri bien va ngoai le logic", () => {
  assert.deepEqual(solveQuadratic(0, 2, -4), { type: "bac_1", x: 2 });
  assert.deepEqual(solveQuadratic(0, 0, 1), { type: "vo_nghiem" });
  assert.deepEqual(solveQuadratic(0, 0, 0), { type: "vo_so_nghiem" });
  assert.throws(() => solveQuadratic("a", 2, 1), TypeError);
});

test("Bai 4: daysInMonth voi du lieu hop le", () => {
  assert.equal(daysInMonth(1, 2025), 31);
  assert.equal(daysInMonth(4, 2025), 30);
  assert.equal(daysInMonth(2, 2024), 29);
  assert.equal(daysInMonth(2, 2023), 28);
});

test("Bai 4: daysInMonth du lieu khong hop le va bien", () => {
  assert.throws(() => daysInMonth(0, 2024), RangeError);
  assert.throws(() => daysInMonth(13, 2024), RangeError);
  assert.throws(() => daysInMonth(2, 0), RangeError);
  assert.throws(() => daysInMonth("2a", 2024), TypeError);
});

test("Bai 5: isPrime voi du lieu hop le", () => {
  assert.equal(isPrime(2), true);
  assert.equal(isPrime(17), true);
  assert.equal(isPrime(97), true);
});

test("Bai 5: isPrime voi du lieu khong hop le va bien", () => {
  assert.equal(isPrime(1), false);
  assert.equal(isPrime(0), false);
  assert.equal(isPrime(-7), false);
  assert.throws(() => isPrime("abc"), TypeError);
});

test("Bai 6: alternatingSum voi du lieu hop le", () => {
  assert.equal(alternatingSum(1), 1);
  assert.equal(alternatingSum(4), -2);
  assert.equal(alternatingSum(5), 3);
  assert.equal(alternatingSum(10), -5);
});

test("Bai 6: alternatingSum du lieu khong hop le va bien", () => {
  assert.throws(() => alternatingSum(0), RangeError);
  assert.throws(() => alternatingSum(-5), RangeError);
  assert.throws(() => alternatingSum(3.5), TypeError);
});

test("Bai 7: gcd voi du lieu hop le", () => {
  assert.equal(gcd(12, 18), 6);
  assert.equal(gcd(7, 13), 1);
  assert.equal(gcd(-24, 60), 12);
  assert.equal(gcd(0, 15), 15);
});

test("Bai 7: gcd voi du lieu khong hop le va ngoai le", () => {
  assert.throws(() => gcd(0, 0), RangeError);
  assert.throws(() => gcd("x", 5), TypeError);
});

test("Bai 8: factorialSum voi du lieu hop le", () => {
  assert.equal(factorialSum(1), 1n);
  assert.equal(factorialSum(3), 9n);
  assert.equal(factorialSum(5), 153n);
  assert.equal(factorialSum(10), 4037913n);
});

test("Bai 8: factorialSum du lieu khong hop le va bien", () => {
  assert.throws(() => factorialSum(0), RangeError);
  assert.throws(() => factorialSum(-2), RangeError);
  assert.throws(() => factorialSum(21), RangeError);
  assert.throws(() => factorialSum("abc"), TypeError);
});
