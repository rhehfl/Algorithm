const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const triangleSet = new Set(input);

let angleSum = 0;

for (angle of input) {
  angleSum += angle;
}

if (angleSum === 180 && triangleSet.size === 1) {
  console.log('Equilateral');
} else if (angleSum === 180 && triangleSet.size === 2) {
  console.log('Isosceles');
} else if (angleSum === 180 && triangleSet.size === 3) {
  console.log('Scalene');
} else {
  console.log('Error');
}
