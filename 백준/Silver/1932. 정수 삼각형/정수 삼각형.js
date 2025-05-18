const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');
//점화식구하기
// [0], [7], []
// dp[i] <= dp[i - 1] + list[j]
// 왼쪽 대각, 오른쪽 대각 => i, i + 1값만 접근가능
const N = Number(input[0]);
const dp = Array.from({ length: N + 1 }, () => []);
const lists = [];
lists[0] = [0];
dp[0].push(0);

for (let i = 1; i <= N; i++) {
  lists.push(input[i].trim().split(' ').map(Number));
}
//5 ~ 0
dp[N].push(...lists[N]);
for (let i = N; i > 0; i--) {
  //0 ~ 3
  for (let j = 0; j < lists[i].length - 1; j++) {
    dp[i - 1].push(
      Math.max(lists[i - 1][j] + dp[i][j], lists[i - 1][j] + dp[i][j + 1])
    );
  }
}
console.log(dp[1][0]);
