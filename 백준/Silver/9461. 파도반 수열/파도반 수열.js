const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const P = [];
let result = '';
P[1] = 1;
P[2] = 1;
P[3] = 1;

for (let i = 1; i <= input[0]; i++) {
  const num = Number(input[i]);
  result += `${padoban(num)}\n`;
}

console.log(result);

function padoban(n) {
  if (P[n]) return P[n];
  for (let i = 4; i <= n; i++) {
    P[i] = P[i - 2] + P[i - 3];
  }
  return P[n];
}
