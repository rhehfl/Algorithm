const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function selectSort(array) {
  const copyArray = [...array];
  const sortedArray = [];

  for (let i = 0; i < copyArray.length; i++) {
    let minNumber = copyArray[i];
    let minNumberIndex = i;

    for (let j = i; j < copyArray.length; j++) {
      if (minNumber > copyArray[j]) {
        minNumber = copyArray[j];
        minNumberIndex = j;
      }
    }
    copyArray[minNumberIndex] = copyArray[i];
    copyArray[i] = minNumber;
    sortedArray.push(minNumber);
  }
  return sortedArray;
}
const sortedArray = selectSort(input.filter((_, idx) => idx !== 0));
for (let i = 0; i < sortedArray.length; i++) {
  console.log(sortedArray[i]);
}
