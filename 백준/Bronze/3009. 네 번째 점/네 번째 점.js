const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const xMap = {};
const yMap = {};
let newX, newY;

for (let i = 0; i < 3; i++) {
  const [x, y] = input[i].trim().split(' ');
  xMap[x] = xMap[x] ? xMap[x] + 1 : 1;
  yMap[y] = yMap[y] ? yMap[y] + 1 : 1;
}

for (x in xMap) {
  if (xMap[x] === 1) {
    newX = x;
  }
}
for (y in yMap) {
  if (yMap[y] === 1) {
    newY = y;
  }
}
console.log(newX, newY);
