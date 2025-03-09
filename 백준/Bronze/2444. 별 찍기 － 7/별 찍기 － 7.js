const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const N = parseInt(input, 10);
let result = '';

// 위쪽 삼각형 (1~N번째 줄)
for (let i = 1; i <= N; i++) {
  result += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n';
}

// 아래쪽 삼각형 (N+1~2N-1번째 줄)
for (let i = N - 1; i >= 1; i--) {
  result += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n';
}

console.log(result.trimEnd());
