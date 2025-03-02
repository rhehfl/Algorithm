const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [n, x] = input[0].split(' ');
const array = input[1].split(' ').map(Number);
let result = '';
for (let i = 0; i < n; i++) {
  if (array[i] < x) {
    result += array[i] + ' ';
  }
}
console.log(result);
