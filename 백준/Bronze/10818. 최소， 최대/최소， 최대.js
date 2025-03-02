const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const array = input[1].split(' ').map(Number);

let min = array[0];
let max = array[0];
for (let i = 0; i < input[0]; i++) {
  if (min >= array[i]) {
    min = array[i];
  }
  if (max <= array[i]) {
    max = array[i];
  }
}
console.log(min, max);
