const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ');

const result = createBuket(n);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map((value) => value - 1);
  const c = result[a];
  result[a] = result[b];
  result[b] = c;
}

console.log(...result);

function createBuket(n) {
  let buket = [];
  for (let i = 1; i <= n; i++) {
    buket[i - 1] = i;
  }
  return buket;
}
