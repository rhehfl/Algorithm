const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = input[1].split(' ').map(Number);
const sortedArray = quickSort([...new Set(numbers)]);
const sortedMap = new Map();

sortedArray.map((value, index) => sortedMap.set(value, index));

console.log(...numbers.map((value) => sortedMap.get(value)));

function quickSort(array) {
  if (array.length <= 1) return array;
  const left = [];
  const right = [];
  const pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
