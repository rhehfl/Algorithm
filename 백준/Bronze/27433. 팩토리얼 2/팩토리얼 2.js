const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString();

function facto(n) {
  if (n === 0) return 1;
  if (n === 1) {
    return n;
  }
  return facto(n - 1) * n;
}

console.log(facto(Number(input)));
