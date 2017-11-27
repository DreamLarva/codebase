let factorial = function (n, total) {
  "use strict";
  if (n === 1) {
    return total
  }
  return factorial(n - 1, n + total)
};
console.log(factorial(99999, 1));