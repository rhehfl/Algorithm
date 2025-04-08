const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split('\n');

const paper = Array.from(Array(100), () => Array(100).fill(null));

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      paper[j][k] = 1;
    }
  }
}
console.log(countPaper());
function countPaper() {
  let count = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      paper[i][j] === 1 ? count++ : null;
    }
  }
  return count;
}
