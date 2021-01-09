// recursive solution
// BigO --> O(2^n)
// very slow
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoized solution
// shortcircuit re-calculating things we've already calculated by storing the result at the corresponding index
// BigO --> O(N)
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  return res;
}

// tabulation solution
// no worries about stack overflow issue (recursive solutions take up a lot of space)
// BigO --> O(N)
function fibTabulate(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i + 2];
  }
  return fibNums[n];
}
