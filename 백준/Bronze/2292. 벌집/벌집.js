const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const n = Number(input);
let i = 1;
let sum = 1;
while (n > sum) {
  sum += i * 6;
  i++;
}

console.log(i);
