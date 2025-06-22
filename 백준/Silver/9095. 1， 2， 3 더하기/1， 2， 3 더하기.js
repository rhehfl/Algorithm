const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const dp = Array.from({ length: 10 }, () => 0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 1; i < input.length; i++) {
  console.log(dp[input[i]]);
}
