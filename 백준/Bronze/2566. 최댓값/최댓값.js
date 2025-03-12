const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const maxNumbers = [];
const maxRow = [];

for (let i = 0; i < input.length; i++) {
  const row = input[i].trim().split(' ').map(Number);
  const { maxNumber, maxPosition } = max(row);
  maxNumbers[i] = maxNumber;
  maxRow[i] = maxPosition;
}

const { maxNumber, maxPosition } = max(maxNumbers);

console.log(maxNumber);
console.log(maxPosition, maxRow[maxPosition - 1]);

function max(array) {
  let maxNumber = array[0];
  let maxPosition = 1;
  for (let i = 0; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
      maxPosition = i + 1;
    }
  }
  return { maxNumber, maxPosition };
}
