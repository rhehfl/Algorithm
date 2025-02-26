const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

let sum = 0;
for (let i = 1; i <= input; i++) {
  sum += i;
}
console.log(sum);
