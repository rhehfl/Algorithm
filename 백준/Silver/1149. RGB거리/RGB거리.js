const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const rgb = [];
const dp = [];
dp[0] = [0, 0, 0];

for (let i = 1; i <= input[0]; i++) {
  const [r, g, b] = input[i].trim().split(' ').map(Number);
  dp.push([]);

  const prevDp = dp[i - 1];
  dp[i][0] = r + Math.min(prevDp[1], prevDp[2]);
  dp[i][1] = g + Math.min(prevDp[0], prevDp[2]);
  dp[i][2] = b + Math.min(prevDp[0], prevDp[1]);
}

console.log(Math.min(...dp.pop()));
