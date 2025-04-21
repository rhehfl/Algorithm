const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');
//쪼개기
const k = Number(input[0].split(' ')[1]);
const array = input[1].split(' ').map(Number);
let count = 0;
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  //가운데 인덱스스
  const centerIdx = Math.ceil(arr.length / 2);
  //가운데 인덱스 기준 절반을 mergeSort로 전달
  //내부적으로 계속 절반씩 나누다 1이면 리턴
  const left = mergeSort(arr.slice(0, centerIdx));
  const right = mergeSort(arr.slice(centerIdx));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  while (leftIdx < left.length) {
    result.push(left[leftIdx]);
    leftIdx++;
  }
  while (rightIdx < right.length) {
    result.push(right[rightIdx]);
    rightIdx++;
  }

  result.map((value) => {
    count++;
    if (k === count) {
      console.log(value);
    }
  });

  return result;
}

mergeSort(array);
if (count < k) {
  console.log(-1);
}
