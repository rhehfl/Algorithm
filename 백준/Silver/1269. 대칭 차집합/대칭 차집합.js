const [_, A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');
//1, 2, 4 에서 2, 3, 4, 5, 6  포함되어있지 않으면 ++
//  1
//2, 3, 4, 5, 6 에서 1, 2, 4 포함되어있지 않으면 ++
//3
// 시간복잡도 n제곱 될거같은데
const arrayA = A.split(' ').map(Number);
const arrayB = B.split(' ').map(Number);
const mapA = new Set(arrayA);
const mapB = new Set(arrayB);

const ABCount = arrayA.filter((number) => {
  if (!mapB.has(number)) {
    return true;
  }
  return false;
}).length;

const BACount = arrayB.filter((number) => {
  if (!mapA.has(number)) {
    return true;
  }
  return false;
}).length;
console.log(ABCount + BACount);
