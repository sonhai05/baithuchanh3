function ensureFiniteNumber(value, name) {
  if (typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

function ensureInteger(value, name) {
  ensureFiniteNumber(value, name);
  if (!Number.isInteger(value)) {
    throw new TypeError(`${name} must be an integer`);
  }
}

function rectanglePerimeter(a, b) {
  ensureFiniteNumber(a, "a");
  ensureFiniteNumber(b, "b");
  if (a <= 0 || b <= 0) {
    throw new RangeError("a and b must be > 0");
  }
  return 2 * (a + b);
}

function rectangleArea(a, b) {
  ensureFiniteNumber(a, "a");
  ensureFiniteNumber(b, "b");
  if (a <= 0 || b <= 0) {
    throw new RangeError("a and b must be > 0");
  }
  return a * b;
}

function solveQuadratic(a, b, c) {
  ensureFiniteNumber(a, "a");
  ensureFiniteNumber(b, "b");
  ensureFiniteNumber(c, "c");

  const EPS = 1e-12;

  if (Math.abs(a) < EPS) {
    if (Math.abs(b) < EPS) {
      if (Math.abs(c) < EPS) {
        return { type: "infinite_solutions" };
      }
      return { type: "no_solution" };
    }
    return { type: "linear", x: -c / b };
  }

  const delta = b * b - 4 * a * c;

  if (delta > EPS) {
    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b + sqrtDelta) / (2 * a);
    const x2 = (-b - sqrtDelta) / (2 * a);
    return { type: "two_distinct_roots", x1, x2, delta };
  }

  if (Math.abs(delta) <= EPS) {
    return { type: "double_root", x: -b / (2 * a), delta: 0 };
  }

  return { type: "no_real_root", delta };
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function daysInMonth(month, year) {
  ensureInteger(month, "month");
  ensureInteger(year, "year");

  if (month < 1 || month > 12) {
    throw new RangeError("month must be in [1, 12]");
  }
  if (year <= 0) {
    throw new RangeError("year must be > 0");
  }

  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];

  if (month31.includes(month)) {
    return 31;
  }
  if (month30.includes(month)) {
    return 30;
  }
  return isLeapYear(year) ? 29 : 28;
}

function isPrime(n) {
  ensureInteger(n, "n");

  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function alternatingSum(n) {
  ensureInteger(n, "n");
  if (n < 1) {
    throw new RangeError("n must be >= 1");
  }

  return n % 2 === 0 ? -(n / 2) : (n + 1) / 2;
}

function gcd(a, b) {
  ensureInteger(a, "a");
  ensureInteger(b, "b");

  if (a === 0 && b === 0) {
    throw new RangeError("gcd is undefined for a = 0 and b = 0");
  }

  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const temp = x % y;
    x = y;
    y = temp;
  }

  return x;
}

function factorialSum(n) {
  ensureInteger(n, "n");
  if (n < 1 || n > 20) {
    throw new RangeError("n must be in [1, 20]");
  }

  let sum = 0n;
  let fact = 1n;

  for (let i = 1n; i <= BigInt(n); i += 1n) {
    fact *= i;
    sum += fact;
  }

  return sum;
}

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  solveQuadratic,
  daysInMonth,
  isPrime,
  alternatingSum,
  gcd,
  factorialSum
};
