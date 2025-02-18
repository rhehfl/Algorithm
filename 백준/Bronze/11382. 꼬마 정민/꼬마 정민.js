const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split(' ')
  .map(Number);

const [a, b, c] = input;

console.log(a + b + c);
