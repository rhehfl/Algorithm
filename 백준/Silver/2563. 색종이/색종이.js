const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const paper = createPaper();
let count = 0;
for (let i = 1; i <= input[0]; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  fillPaper(paper, x, y);
}

for (let i = 0; i < paper.length; i++) {
  const newPaper = paper[i].filter((value) => value);
  count += newPaper ? newPaper.length : 0;
}

console.log(count);

function createPaper() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array[i] = [];
    for (let j = 0; j < 100; j++) {
      array[i][j] = 0;
    }
  }
  return array;
}

function fillPaper(array, x, y) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      array[i][j] = 1;
    }
  }
}
