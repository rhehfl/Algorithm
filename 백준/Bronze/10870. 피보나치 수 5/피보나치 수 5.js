const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString();

function fibo(n) {
  if (n === 0 || n === 1) return n;

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(Number(input)));
