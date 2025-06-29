const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const n = input[0];

const dp = Array.from({ length: 301 }, () => 0);
dp[0] = 0;
dp[1] = input[1];
dp[2] = input[1] + input[2];
dp[3] = Math.max(input[1] + input[3], input[2] + input[3]);

for (let i = 4; i <= n; i++) {
  const current = input[i];
  const prev = input[i - 1];
  dp[i] = Math.max(current + dp[i - 2], current + prev + dp[i - 3]);
}

console.log(dp[n]);
