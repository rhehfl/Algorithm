const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ');

const result = createZeroArray(n);

for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(' ');

  for (let j = a - 1; j <= b - 1; j++) {
    result[j] = Number(c);
  }
}

console.log(...result);

function createZeroArray(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = 0;
  }
  return result;
}
