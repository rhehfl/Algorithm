const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [row, column] = input[0].split(' ');

const [_, ...procession] = input.map((value) => value.trim().split(' '));

const totalProcession = [];
for (let i = 0; i < row; i++) {
  let rowSum = [];
  for (let j = 0; j < column; j++) {
    const firstNumber = Number(procession[i][j]);
    const secondNumber = Number(procession[i + Number(row)][j]);
    rowSum[j] = firstNumber + secondNumber;
  }
  totalProcession[i] = rowSum;
  console.log(...rowSum);
  rowSum = [];
}
