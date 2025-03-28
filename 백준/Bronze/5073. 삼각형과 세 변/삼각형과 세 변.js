const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const triangleMap = {
  1: 'Equilateral',
  2: 'Isosceles',
  3: 'Scalene',
};

for (let i = 0; i < input.length - 1; i++) {
  const [x, y, z] = input[i].split(' ').map(Number);
  const triangleSet = new Set([x, y, z]);

  if (isTriAngle(x, y, z)) {
    console.log(triangleMap[triangleSet.size]);
  } else {
    console.log('Invalid');
  }
}

function isTriAngle(...angles) {
  const sortedAngles = [...angles].sort((a, b) => a - b);
  return sortedAngles[0] + sortedAngles[1] > sortedAngles[2];
}
