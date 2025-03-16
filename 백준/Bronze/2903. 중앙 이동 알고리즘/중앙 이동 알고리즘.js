const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const n = Number(input);
console.log((2 ** n + 1) ** 2);
