const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const parseXy = (xy) => {
  return xy.split(' ').map(Number);
};

let [minX, minY] = parseXy(input[1]);
let [maxX, maxY] = parseXy(input[1]);
for (let i = 1; i <= input[0]; i++) {
  const [x, y] = parseXy(input[i]);
  if (minX > x) {
    minX = x;
  }
  if (maxX < x) {
    maxX = x;
  }
  if (minY > y) {
    minY = y;
  }
  if (maxY < y) {
    maxY = y;
  }
}
console.log((maxX - minX) * (maxY - minY));
