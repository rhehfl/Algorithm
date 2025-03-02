const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const array = input[1].split(' ').map(Number);
let numCount = 0;
for (let i = 0; i < input[0]; i++) {
  if (array[i] === Number(input[2])) {
    ++numCount;
  }
}

console.log(numCount);
