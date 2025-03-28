const [a, b, c] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sortedAngles = [a, b, c].sort((a, b) => a - b);
const shortSidesSum = sortedAngles[0] + sortedAngles[1];
const lognSide = sortedAngles[2];

if (shortSidesSum > lognSide) {
  console.log(shortSidesSum + lognSide);
} else {
  const newAngle = shortSidesSum - 1;
  console.log(shortSidesSum + newAngle);
}
