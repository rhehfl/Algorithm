const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');
const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

const fn = a1 * n0 + a0;
const gn = c * n0;
if (fn <= gn && c >= a1) {
  console.log(1);
} else {
  console.log(0);
}
