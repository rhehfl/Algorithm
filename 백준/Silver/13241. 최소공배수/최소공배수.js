const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
// 큰 수를 작은 수로 나눔
// 나눈 수와 나머지를 나머지가 0이 될때까지 나눔눔
const maxNum = Math.max(A, B);
let divided = Math.min(A, B);
let mod = maxNum % divided;

while (mod !== 0) {
  [mod, divided] = [divided % mod, mod];
}

console.log((A * B) / divided);
