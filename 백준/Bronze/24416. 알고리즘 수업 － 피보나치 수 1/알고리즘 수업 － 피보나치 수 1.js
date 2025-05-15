const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
    .toString()
    .trim()
);

function fiboMemo(n) {
  const memo = Array(n + 1).fill(0);
  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

console.log(fiboMemo(N), N - 2);
