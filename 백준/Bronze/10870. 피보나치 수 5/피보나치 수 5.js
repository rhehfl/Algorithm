const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString();

const memo = {};
function fibo(n) {
  if (n === 0 || n === 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibo(n - 1) + fibo(n - 2);
  return memo[n];
}
console.log(fibo(Number(input)));
